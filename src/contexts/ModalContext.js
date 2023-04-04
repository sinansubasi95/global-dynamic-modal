import { createContext, useContext, useState } from "react";
import { uuid } from 'uuidv4';

const ModalContext = createContext();

export default ModalContext;

export function ModalContextProvider({children}) {
    const [isActive, setIsActive] = useState(false);
    const [layout, setLayout] = useState(null);

    const open = (layout) => {
        setIsActive(true);
        // setModals(modals => [...modals, {id: uuid(), isActive: true}]);
        setLayout(layout);
    }

    const close = () => {
        setIsActive(false);
        setLayout(null);
    };

    return (
        <ModalContext.Provider value={{
            // isActive,
            open,
            close
        }}>
            {children}
            {layout}
        </ModalContext.Provider>
    )
}

export function useModalContext() {
    return useContext(ModalContext);
}