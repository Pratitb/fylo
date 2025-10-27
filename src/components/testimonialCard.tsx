import type { TestimonialCardType } from "../utils/types"

const TestimonialCard: React.FC<TestimonialCardType> = ({ reviewText, userImg, userName, roleName, companyName }) => {
    return (
        // wrap
        <div className="bg-testimonialsBg p-6 rounded-md">
            {/* review */}
            <p className="">{reviewText}</p>
            <div className="flex items-center gap-4 mt-8">
                <img src={userImg} className="rounded-full w-12" alt="" />
                <div>
                    {/* name */}
                    <p className="text-white capitalize tracking-wider">{userName}</p>
                    <div className="text-xs capitalize">
                        {/* title */}
                        <span>{roleName},&nbsp;</span>
                        {/* company name */}
                        <span>{companyName}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TestimonialCard