import type { FeatureCardType } from "../utils/types"

const FeatureCard: React.FC<FeatureCardType> = ({ icon, head, desc }) => {
    return (
        <div className="flex flex-col items-center md:max-w-80">
            <img src={icon} className="mb-8" alt="" />
            <p className="card-head">{head}</p>
            <p className="card-desc">{desc}</p>
        </div>
    )
}

export default FeatureCard