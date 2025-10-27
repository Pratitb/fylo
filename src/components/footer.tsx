import Assets from "../assets/assets"
import { footerLinks } from "../utils/data"
import type { LinksType } from "../utils/types"
import FooterItem from "./footerItem"
import RoundButton from "./roundButton"

const Footer = () => {
    return (
        <div className="pt-16 pb-4">
            <img src={Assets?.navLogo} className="max-w-32" alt="Fylo Logo" />
            <div className="py-8 flex flex-col gap-12 md:flex-row md:items-start">
                {/* Items */}
                <div className="flex flex-col gap-4 flex-1">
                    <FooterItem icon={Assets?.locate} desc='lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet' />
                    <FooterItem icon={Assets?.phone} desc='+91-9876543210' />
                    <FooterItem icon={Assets?.mail} desc='dummy@dummy.com' />
                </div>
                {/* Shortcut Links */}
                <div className="flex flex-wrap gap-4 flex-1 md:justify-center">
                    {footerLinks?.map((link: LinksType, index: number) => {
                        return <a key={index} href={link?.url} className="capitalize">{link?.label}</a>
                    })}
                </div>
                {/* Social Buttons */}
                <div className="flex gap-2 flex-1 md:justify-center">
                    <RoundButton icon={Assets?.social} />
                    <RoundButton icon={Assets?.social} />
                    <RoundButton icon={Assets?.social} />
                </div>
            </div>
        </div>
    )
}

export default Footer