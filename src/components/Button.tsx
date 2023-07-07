import { PropsWithChildren, forwardRef } from "react";
import { buttonStyle } from "./Button.css";

export const Button = forwardRef<HTMLButtonElement, PropsWithChildren>(({ children }, ref) => (
    <button ref={ref} className={buttonStyle({
        type: 'primary'
    })}>
        {children}
    </button>
));

Button.displayName = "Button";
