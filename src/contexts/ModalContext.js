import { createContext, useCallback, useContext, useState } from "react";

const ModalContext = createContext();

export default ModalContext;

export function ModalContextProvider({children}) {
    const [modals, setModals] = useState([]);

    const addModal = useCallback(
        function(modal) {
            setModals(modals => [...modals, modal]);
        },
        [setModals]
    );

    return (
        <ModalContext.Provider value={addModal}>
            {children}
            <div className="modals-wrapper">
                {modals.map(modal => (
                    <div className="modal" key={modal}>
                        {modal}
                    </div>
                ))}
            </div>
        </ModalContext.Provider>
    )
}

export function useModalContext() {
    return useContext(ModalContext);
}
  

/**
 * 1. Component 
 * 2. API Request
 * 3. Options
 * 4. Visibility State
 * 5. Uniqueness
 */