import { createContext } from "react";
import toast, { Toaster } from "react-hot-toast";

interface ToastContext {

}

const ToastCtx = createContext<ToastContext>({})

export const toastSuccess = (message: string) => toast(message);

export const RollToast: React.FC = ({ children }) => {
  return (
    <div>
      <ToastCtx.Provider value={{}}>
        <Toaster />
        {children}
      </ToastCtx.Provider>
    </div>
  );
};
