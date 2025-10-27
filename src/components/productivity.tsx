import type { ProductivityType } from "../utils/types"
import LinkBtn from "./LinkBtn"

const Productivity: React.FC<ProductivityType> = ({ productiveImg, head, desc, btnLabel, linkBtnArr }) => {
    return (
        <div className="py-24 md:flex md:flex-col md:items-center lg:flex-row lg:justify-center lg:gap-10">
            <img src={productiveImg} className="mb-12 lg:max-w-[500px]" alt="Users busy with work activities" />
            <div className="text-center">
                <p className="card-head">{head}</p>
                <p className="card-desc max-w-[500px]">{desc}</p>
                <LinkBtn label={btnLabel} icon={linkBtnArr} />
            </div>
        </div>
    )
}

export default Productivity