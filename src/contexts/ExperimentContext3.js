// import { createContext, useCallback, useContext, useReducer, useState } from "react";

// const ExperimentContext = createContext();

// const ActionType = {
//     ADD_MODAL: "ADD_MODAL",
//     UPDATE_MODAL: "UPDATE_MODAL",
//     REMOVE_MODAL: "REMOVE_MODAL",
//     UPSERT_MODAL: "UPSERT_MODAL",
//     START_PAUSE: "START_PAUSE",
//     END_PAUSE: "END_PAUSE",
// };

// function reducer(state, action) {
//     switch(action.type) {
//         case ActionType.ADD_MODAL:
//             return {
//                 ...state,
//                 modals: [action.modal, ...state.modals]
//             }
//         case ActionType.UPDATE_MODAL:
//             return {
//                 ...state,
//                 modals: state.modals.map((m) =>
//                   m.id === action.modal.id ? { ...m, ...action.modal } : m
//                 ),
//             };
//         case ActionType.UPSERT_MODAL:
//             return state.modals.find((m) => m.id === action.modal.id)
//                 ? reducer(state, { type: ActionType.UPDATE_MODAL, modal })
//                 : reducer(state, { type: ActionType.ADD_MODAL, modal });
//         case ActionType.REMOVE_MODAL:
//             return {
//                 ...state,
//                 modals: state.modals.filter((m) => m.id !== action.id),
//             };
//     };
// };

// const uuidv4 = () => Math.random().toString(36).substring(2, 15) +
//     Math.random().toString(36).substring(2, 15);

// class Modal {
//     constructor(component) {
//         this.id = uuidv4();
//         this.createdAt = Date.now();
//         this.component = component;
//     };

//     create() {({
//         id: this.id,
//         createdAt: this.createdAt,
//         component: this.component
//     })};

// };

// function ExperimentProvider({children}) {
//     // const [state, dispatch] = useReducer(reducer, {modals: []});

//     // NOTE: I might need to memoize this value
//     // const value = {state, dispatch}

//     // const createModal = (component) => ({
//     //     id: uuidv4(),
//     //     createdAt: Date.now(),
//     //     component: component,
//     // });

//     // const actionHandler = (type, payload) => dispatch({
//     //     type,
//     //     payload
//     // });

//     const modal = (type, payload) => actionHandler(type, payload);

//     modal.add = (component) => actionHandler(ActionType.ADD_MODAL, createModal(component));

//     add() {
//         dispatch({
//             type: ActionType.ADD_MODAL,
//             component: this.component          
//         });
//     };

//     update() {
//         dispatch({
            
//         });
//     }

//     const promise = callback


//     promise
//         .then((p) => {
//             toast.success(resolveValue(msgs.success, p), {
//                 id,
//                 ...opts,
//                 ...opts?.success,
//             });
//             return p;
//         })
//         .catch((e) => {
//             toast.error(resolveValue(msgs.error, e), {
//                 id,
//                 ...opts,
//                 ...opts?.error,
//             });
//         });

//     promise
//         .then((res) => {
//             actionHandler()
//         })
    
//         const promise = (callback, {loading, success, error}) => {
//             const ID = uuidv4();
    
//             open({
//                 id: ID,
//                 component: loading(ID)
//             });
    
//             return new Promise(function(resolve, reject) {
//                 callback
//                     .then(response => {
//                         edit({
//                             id: ID,
//                             component: success(ID, response)
//                         })
//                         resolve(ID, response);
//                     })
//                     .catch(error => {
//                         reject(error);
//                     });
//             });
//         };

//     return (
//         <ExperimentContext.Provider value={value}>
//             {children}
//             {modals.map(modal => (
//                 <div className="modals-wrapper" key={modal.id}>
//                     {modal.component}
//                 </div>
//             ))}
//         </ExperimentContext.Provider>
//     )
// }

// function useExperiment() {
//     const context = React.useContext(ExperimentContext);

//     if (context === undefined)
//       throw new Error('useExperiment must be used within a ExperimentProvider');

//     return context;
// }

// export {ExperimentProvider, useExperiment};
















// export function ExperimentContextProvider2({children}) {
//     const [modals, setModals] = useState([]);

//     function uuidv4() {
//         return Math.random().toString(36).substring(2, 15) +
//             Math.random().toString(36).substring(2, 15);
//     }

//     const open = useCallback(
//         function(modal) {
//             setModals(modals => [...modals, modal]);
//         },
//         [setModals]
//     );

//     const close = useCallback(
//         function(id) {
//             setModals(modals => modals.filter(modal => modal.id !== id));
//         }
//     )

//     const edit = useCallback(
//         function(modal) {
//             setModals(modals => modals.map(m => m.id === modal.id ? modal : m));
//         }
//     )

//     const promise = (callback, {loading, success, error}) => {
//         const ID = uuidv4();

//         open({
//             id: ID,
//             component: loading(ID)
//         });

//         return new Promise(function(resolve, reject) {
//             callback
//                 .then(response => {
//                     edit({
//                         id: ID,
//                         component: success(ID, response)
//                     })
//                     resolve(ID, response);
//                 })
//                 .catch(error => {
//                     reject(error);
//                 });
//         });
//     };

//     // execute

//     // open modal with id and loading component

//     // execute promise with fetch
//         // then update component and resolve id and response

//     return (
//         <ExperimentContext.Provider value={{promise, open, edit, close}}>
//             {children}
//             {modals.map(modal => (
//                 <div className="modals-wrapper" key={modal.id}>
//                     {modal.component}
//                 </div>
//             ))}
//             {/* <div className="modals-wrapper">
//                 {modals.map(modal => (
//                     <div className="modal" key={modal.id}>
//                         {modal.id}
//                     </div>
//                 ))}
//             </div> */}
//         </ExperimentContext.Provider>
//     );
// }

// export function useExperiment2() {
//     return useContext(ExperimentContext);
// }
  

// /**
//  * 1. Component 
//  * 2. API Request
//  * 3. Options
//  * 4. Visibility State
//  * 5. Uniqueness
//  */