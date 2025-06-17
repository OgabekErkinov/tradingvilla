import React from 'react'
import penthouse from '../../assets/images/penthouse.webp'
import SunnyMap from '../../components/SunnyMap'
import Contacts from './Components/Contacts'
import SendForm from './Components/SendForm'

const Contact = () => {
  return (
    <div className='w-full h-[700px]'>
      <div className='w-full h-[380px] relative'>
        <img src={ penthouse } alt="penthouse" className='w-full h-full' />
        <div className='h-full w-full absolute z-10 top-0 left-0 backdrop-blur-[3px] flex items-center justify-center'>
         
          <div className='w-full h-[80%] flex flex-col justify-top items-center'>
             <p className='text-[#EE626B] font-bold text-[15px]'> Contact Us</p>
             <div className='text-[40px] text-white font-bold w-[50%] text-shadow-lg'>
                Get In Touch With Our Agents
             </div>
          </div>

        </div>

        <div className='w-full h-auto flex flex-col md:flex-row justify-evenly absolute z-10 top-[50%]'>
          
          {/* map and contact */}
           <div className='w-full md:w-[50%] h-[250px] md:h-[450px] flex flex-col bg-white '>
            {/* map */}
            <div className='w-full h-[75%]'>
              <SunnyMap/>
            </div>

            {/* contacts */}
            <div className='w-full h-[20%] hidden md:block'>
              <Contacts/>
            </div>

           </div>

           {/* form */}
           <div className='w-full md:w-[35%] h-[450px] md:h-[450px]'>
             <SendForm/>
           </div>
        </div>

        
      </div>
      
    </div>
  )
}

export default Contact
