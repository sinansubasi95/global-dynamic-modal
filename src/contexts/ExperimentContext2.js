import { createContext, useCallback, useContext, useState } from "react";

const ExperimentContext = createContext();

export default ExperimentContext;

export function ExperimentContextProvider({children}) {
    const [modals, setModals] = useState([]);

    function uuidv4() {
        return ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g, c =>
          (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
        );
    };

    const open = useCallback(
        function(modal) {
            setModals(modals => [...modals, modal]);
            // setTimeout(() => setToasts((toasts) => toasts.slice(1)), 3000);
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

    const promise = (callback, component) => {
        let modal = {
            id: uuidv4(),
            component: component
        };

        open(modal);
        return new Promise(function(resolve, reject) {
            callback()
                .then(response => {
                    console.log("sadsa2")
                    resolve(MODAL.id, response);
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
                    <div key={modal.id}>
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