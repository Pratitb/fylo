import type { FooterItemType } from "../utils/types"

const FooterItem: React.FC<FooterItemType> = ({ icon, desc }) => {
    return (
        <div className="flex items-start justify-start gap-4">
            <img src={icon} alt="" />
            <p>{desc}</p>
        </div>
    )
}

export default FooterItem