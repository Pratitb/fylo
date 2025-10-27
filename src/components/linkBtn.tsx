import type { LinkBtnType } from "../utils/types"

const LinkBtn: React.FC<LinkBtnType> = ({ label, icon }) => {
    return (
        <div className="border-b border-cyan-500 mt-4 pb-1 items-center inline-flex gap-2">
            <p className="text-cyan-500">{label}</p>
            <img src={icon} alt="" />
        </div>
    )
}

export default LinkBtn