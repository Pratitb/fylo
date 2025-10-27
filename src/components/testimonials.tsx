import Assets from "../assets/assets"
import { reviewDesc } from "../utils/data"
import TestimonialCard from "./testimonialCard"

const Testimonials = () => {
    return (
        <div className="flex flex-col gap-4 my-16 relative md:flex-row md:justify-center">
            <img src={Assets?.testimonialQuotes} className="w-8 absolute -top-5 left-5" alt="" />
            <TestimonialCard reviewText={reviewDesc} userImg={Assets?.testimonialUser1Img} userName={'satish patel'} roleName="founder & CEO" companyName="huddle" />
            <TestimonialCard reviewText={reviewDesc} userImg={Assets?.testimonialUser2Img} userName={'bruce mckenzie'} roleName="CTO" companyName="huddle" />
            <TestimonialCard reviewText={reviewDesc} userImg={Assets?.testimonialUser3Img} userName={'iva boyd'} roleName="COO" companyName="huddle" />
        </div>
    )
}

export default Testimonials