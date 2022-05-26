import { createContext } from "react";
import toast, { Toast, Toaster } from "react-hot-toast";

interface ToastContext {

}

const ToastCtx = createContext<ToastContext>({})

export const toastSuccess = (message: string) => toast(message);

export const RollToast: React.FC = ({ children }) => {
  return (
    <ToastCtx.Provider></ToastCtx.Provider>
      <Toaster />
      {children}
    </>
  );
};
