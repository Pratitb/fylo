import type { HeroType } from "../utils/types"
import Button from "./button"

const Hero: React.FC<HeroType> = ({ heroBg, heroImg, head, desc }) => {
    return (
        <div className="flex flex-col items-center gap-8 px-2 py-8 mt-4 relative bg-primary rounded-2xl">
            <img src={heroBg} className=" absolute bottom-0 left-0 object-cover" alt="Wavy Background" />
            <img src={heroImg} className="md:max-w-[700px]" alt="Users putting files in a folder" />
            <div className="max-w-[500px] z-10">
                <p className="text-3xl leading-10 font-bold text-center">{head}</p>
                <p className="text-center mt-4">{desc}</p>
            </div>
            <Button label="get started" variant="primary" />
        </div>
    )
}

export default Hero