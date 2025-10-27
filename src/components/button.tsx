import type { ButtonType } from "../utils/types"
import clsx from "clsx"; // optional but powerful for combining classes

const Button: React.FC<ButtonType> = ({ label, variant = 'primary', customCls, getClickAction }) => {
    const baseStyles = 'h-12 z-10 px-8 flex justify-center items-center capitalize font-bold'
    const variantStyles = {
        primary: 'bg-cyan-500 rounded-full',
        secondary: 'bg-cyan-300 rounded-full h-12'
    }
    return (
        <div className={clsx(baseStyles, variantStyles[variant], customCls)} onClick={getClickAction}>{label}</div>
    )
}

export default Button