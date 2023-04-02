import { createContext, useCallback, useContext, useState } from "react";

const ToastContext = createContext();

export default ToastContext;

export function ToastContextProvider({children}) {
    const [toasts, setToasts] = useState([]);

    const addToast = useCallback(
        function(toast) {
            setToasts(toasts => [...toasts, toast]);
        },
        [setToasts]
    );

    return (
        <ToastContext.Provider value={addToast}>
            {children}
            <div className="toasts-wrapper">
                {toasts.map(toast => (
                    <div className="toast" key={toast}>
                        {toast}
                    </div>
                ))}
            </div>
        </ToastContext.Provider>
    )
}

export function useToastContext() {
    return useContext(ToastContext);
}
  

/**
 * 1. Component 
 * 2. API Request
 * 3. Options
 * 4. Visibility State
 * 5. Uniqueness
 */