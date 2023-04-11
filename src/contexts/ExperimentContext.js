import { createContext, useContext, useReducer } from "react";

const ExperimentContext = createContext();

function uuidv4() {
    return Math.random().toString(36).substring(2, 15) +
        Math.random().toString(36).substring(2, 15);
}

const ActionType = {
    ADD_MODAL: "ADD_MODAL",
    UPDATE_MODAL: "UPDATE_MODAL",
    REMOVE_MODAL: "REMOVE_MODAL",
    UPSERT_MODAL: "UPSERT_MODAL",
    START_PAUSE: "START_PAUSE",
    END_PAUSE: "END_PAUSE",
};

const Reducer = (state, action) => {
    switch(action.type) {
        case ActionType.ADD_MODAL:
            return {
                ...state,
                modals: [action.modal, ...state.modals]
            }
        case ActionType.UPDATE_MODAL:
            return {
                ...state,
                modals: state.modals.map((m) =>
                  m.id === action.modal.id ? { ...m, ...action.modal } : m
                ),
            };
        case ActionType.UPSERT_MODAL:
            return state.modals.find((m) => m.id === action.modal.id)
                ? Reducer(state, { type: ActionType.UPDATE_MODAL, modal: action.modal  })
                : Reducer(state, { type: ActionType.ADD_MODAL, modal: action.modal  });
        case ActionType.REMOVE_MODAL:
            return {
                ...state,
                modals: state.modals.filter((m) => m.id !== action.modal.id),
            };
    };
};

class Modal {
    constructor(promise, components, dispatch) {
        this.id = uuidv4();
        this.createdAt = Date.now();
        this.components = components;
        this.promise = promise;
        this.dispatch = dispatch;
    };

    handleLoading() {
        this.dispatch({
            type: ActionType.ADD_MODAL,
            modal: {
                id: this.id,
                createdAt: this.createdAt,
                component: this.components.loading({id: this.id})
            }
        });
    };

    handlePromise() {
        return new Promise((resolve, reject) => {
            this.promise
                .then((p) => {
                    this.handleSuccess(p);
                    resolve(p, this.id);
                })
                .catch((e) => {
                    this.handleError(e);
                    reject(e, this.id)
                });
        })
    };

    handleSuccess(p) {
        this.dispatch({
            type: ActionType.UPSERT_MODAL,
            modal: {
                id: this.id,
                createdAt: this.createdAt,
                component: this.components.success({id: this.id}, p)
            }
        });
    };

    handleError(e) {
        this.dispatch({
            type: ActionType.UPSERT_MODAL,
            modal: {
                id: this.id,
                createdAt: this.createdAt,
                component: this.components.error({id: this.id}, e)
            }
        });
    };
};

const ExperimentContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(Reducer, {modals: []});

    const open = (promise, components) => {
        const modal = new Modal(promise, components, dispatch);
        modal.handleLoading();
        modal.handlePromise();
    };

    const close = (id) => {
        dispatch({
            type: ActionType.REMOVE_MODAL,
            modal: {
                id: id,
            }
        });
    };

    return (
        <ExperimentContext.Provider value={{open, close}}>
            {children}
            {state.modals.map(modal => (
                <div className="modals-wrapper" key={modal.id}>
                    {modal.component}
                </div>
            ))}
        </ExperimentContext.Provider>
    )
} 

function useExperimentContext() {
    const context = useContext(ExperimentContext);

    if (context === undefined)
      throw new Error('useExperimentContext must be used within a ExperimentContextProvider');

    return context;
}

export {ExperimentContextProvider, useExperimentContext};