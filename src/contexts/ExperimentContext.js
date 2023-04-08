import { createContext, useCallback, useContext, useState } from "react";

const ExperimentContext = createContext();

export default ExperimentContext;

export function ExperimentContextProvider({children}) {
    const [modals, setModals] = useState([]);

    function uuidv4() {
        return Math.random().toString(36).substring(2, 15) +
            Math.random().toString(36).substring(2, 15);
    }

    const open = useCallback(
        function(modal) {
            setModals(modals => [...modals, modal]);
        },
        [setModals]
    );

    const close = useCallback(
        function(id) {
            setModals(modals => modals.filter(modal => modal.id !== id));
        }
    )

    const edit = useCallback(
        function(modal) {
            setModals(modals => modals.map(m => m.id === modal.id ? modal : m));
        }
    )

    const promise = (callback, {loading, success, error}) => {
        const ID = uuidv4();

        open({
            id: ID,
            component: loading(ID)
        });

        return new Promise(function(resolve, reject) {
            callback()
                .then(response => {
                    edit({
                        id: ID,
                        component: success(ID, response)
                    })
                    resolve(ID, response);
                })
                .catch(error => {
                    reject(error);
                });
        });
    };

    return (
        <ExperimentContext.Provider value={{promise, open, edit, close}}>
            {children}
                {modals.map(modal => (
                    <div className="modals-wrapper" key={modal.id}>
                        {modal.component}
                    </div>
                ))}
            {/* <div className="modals-wrapper">
                {modals.map(modal => (
                    <div className="modal" key={modal.id}>
                        {modal.id}
                    </div>
                ))}
            </div> */}
        </ExperimentContext.Provider>
    );
}

export function useExperimentContext() {
    return useContext(ExperimentContext);
}
  

/**
 * 1. Component 
 * 2. API Request
 * 3. Options
 * 4. Visibility State
 * 5. Uniqueness
 */