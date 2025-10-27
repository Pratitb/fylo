import type { AccessCardType } from '../utils/types'
import Button from './button'
import Input from './input'

const AccessCard: React.FC<AccessCardType> = ({ head, desc }) => {
    return (
        <div className='bg-primary px-4 py-6 rounded-lg text-center max-w-[500px] mx-auto'>
            <p className='text-white text-xl capitalize font-bold'>{head}</p>
            <p className='my-4'>{desc}</p>
            <Input placeholder='enter your email...' />
            <Button label='get started for free' />
        </div>
    )
}

export default AccessCard