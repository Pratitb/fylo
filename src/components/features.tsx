import Assets from "../assets/assets"
import { features } from "../utils/data"
import FeatureCard from "./featureCard"

const Features = () => {
    return (
        <div className="flex flex-col items-center gap-20 py-16 md:flex-row md:flex-wrap lg:justify-center">
            <FeatureCard icon={Assets?.accessAnywhere} head="access your files, anywhere" desc={features?.accessAnywhereDesc} />
            <FeatureCard icon={Assets?.security} head="security you can trust" desc={features?.security} />
            <FeatureCard icon={Assets?.collab} head="real-time collaboration" desc={features?.collab} />
            <FeatureCard icon={Assets?.store} head="store any type of file" desc={features?.store} />
        </div>
    )
}

export default Features