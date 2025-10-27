import type React from "react"
import type { RoundButtonType } from "../utils/types"

const RoundButton: React.FC<RoundButtonType> = ({ getActionFn, icon }) => {
    return (
        <div onClick={getActionFn} className="rounded-full border p-1">
            <img src={icon} alt="" />
        </div>
    )
}

export default RoundButton