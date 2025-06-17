import phoneIcon from '../../../assets/icons/phone.png'
import emailIcon from '../../../assets/icons/email.png'
import { motion } from 'framer-motion'

const Contacts = () => {
    const contacts = [
        {
            icon: phoneIcon,
            element: '+998972293299',
            type: 'Phone number'
        },
        {
            icon: emailIcon,
            element: 'ogabekerkinov56@gmail.com',
            type: 'Business email'
        }
    ]

    return (
        <div className='w-full h-full flex justify-around items-center gap-8'>
            {contacts.map((contact, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.2 }}
                    className="w-[45%] flex items-center gap-4 bg-white p-4 rounded-xl shadow-md"
                >
                    <img src={contact.icon} alt={contact.type} className="w-8 h-8" />
                    <div className='flex flex-col justify-center items-center h-16 '>
                        <span className="text-sm font-semibold text-wrap">{contact.element}</span>
                        <span className="text-sm text-gray-500">{contact.type}</span> 
                    </div>
                </motion.div>
            ))}
        </div>
    )
}

export default Contacts
