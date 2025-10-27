import Assets from "../assets/assets"
import { navLinks } from "../utils/data"
import type { LinksType } from "../utils/types"

const Navbar = () => {

    return (
        <div className="flex gap-8 items-center">
            <img src={Assets?.navLogo} className="max-w-32" alt="Fylo Logo" />
            <div className="w-full flex justify-end gap-3 md:gap-8">
                {navLinks?.map((link: LinksType, index: number) => {
                    return (
                        <a href="" key={index} className="text-slate-300 capitalize font-extralight text-sm">{link?.label}</a>
                    )
                })}
            </div>
        </div>
    )
}

export default Navbar