import viewPicture from "../../assets/images/viewPicture.png"
import viewIcon from "../../assets/icons/view.png"
import spaceIcon from "../../assets/icons/space.png"
import contractIcon from "../../assets/icons/kontrakt.png"
import safetyIcon from "../../assets/icons/safety.png"
import paymentIcon from "../../assets/icons/payment.png"
import penthouse from '../../assets/images/penthouse.webp'
import villa from '../../assets/images/villa.webp'
import date from "../../assets/icons/date.png"
import apartment from "../../assets/images/apartment.jfif"

import { useState } from "react"
import BackToHome from "../../components/BackToHome"

const Details = () => {

      const [isActive, setIsActive] = useState('first')
      const [choosen, setChoosen] = useState('Apartment');
  
      const toggles = [
          {
              question : 'Best useful links ?',
              answer : "Get the best villa website template in HTML CSS and Bootstrap for your business. TemplateMo provides you the best free CSS templates in the world. Please tell your friends about it.",
              state : 'first'
          },
          {
              question : "How does this work ?",
              answer : "Finding and booking your dream villa is now easier than ever — simply explore our carefully curated selection of premium villas, review detailed information and stunning visuals of each property, and with just a few clicks, schedule a visit or get in touch with the property owner to secure your ideal stay.",
              state : 'second'
          },
          {
              question : "Why is Villa Agency the best ?",
              answer : "At Villa Agency, we don’t just list properties — we hand-pick the finest villas to ensure every stay is extraordinary. With a focus on quality, trust, and comfort, we connect you to luxurious homes in stunning locations, backed by verified hosts, responsive customer support, and a seamless booking experience.",
              state : "third"
          }
      ]
  
      const propertiesFlat = [
          { icon : spaceIcon, info : ['250 m2', 'Total Flat space'] },
          { icon : contractIcon, info : ['Contract', 'Contract ready'] },
          { icon : paymentIcon, info : ['Payment', 'Payment process'] },
          { icon : safetyIcon, info : ['Safety', '24/7 Under Control']}
      ]

        const choices = [
          {
            type: 'Apartment',
            image : apartment,
            space: 185,
            floor: '26th',
            rooms: 4,
            parking: 'yes',
            payment: 'Bank'
          },
          {
            type: 'Villa House',
            image : villa,
            space: 285,
            floor: '1st',
            rooms: 20,
            parking: 'yes',
            payment: 'Bank, Credit Card'
          },
          {
            type: 'PentHouse',
            image : penthouse,
            space: 225,
            floor: '40th',
            rooms: 10,
            parking: 'yes',
            payment: 'Bank'
          }
        ];
      
        const properties = [
          'Total space',
          'Floor Number',
          'Number of Rooms',
          'Parking available',
          'Payment process'
        ];
      
        const selected = choices.find(choice => choice.type === choosen);
      

  return (
    <div className='h-auto w-full flex flex-col gap-4'>
      <BackToHome/>

      <div className="w-full h-auto px-4">
              <div className="w-full h-full flex flex-col md:flex-row justify-evenly max-[768px]:gap-16 md:gap-0">
      
                  <div className="flex flex-col sm:flex-row h-full w-full md:w-[60%] justify-evenly gap-4">
      
                      {/* image part */}
                     <div className="h-full w-full md:w-[50%] xl:w-auto relative">
                       <img src={ viewPicture } alt="view" className="h-102 w-full" />
                       <div className="h-[110px] w-[110px] absolute left-1 bottom-[-40px] z-10 bg-[#F35525] rounded-[50%] 
                                      flex justify-center items-center">
                            <img src={ viewIcon } alt="view icon" />
                       </div>
                     </div>
      
                      {/* info part */}
                      <div className="h-[400px] w-full md:w-[50%] xl:w-[40%] p-2">
                        <div className="h-full w-full flex flex-col justify-evenly">
                          <h3 className="text-[#1E1E1E] text-3xl font-bold">
                             Best Apartment <br /> & See View </h3>
                           <div className="w-full h-[60%] flex justify-center items-center bg-black/4">
                              <div className="w-[95%] h-[95%]  flex flex-col gap-1">
                             {toggles?.map((toggle, idx) => (
                                 <div className="w-full" key={idx}>
                                    <div className="w-full text-left cursor-pointer font-semibold text-base"
                                         onClick={() => setIsActive(toggle?.state)}>
                                         {toggle?.question}
                                    </div>
      
                                 <div className={`w-full text-left border-b border-black/5 px-4 transition-all duration-500 ease-in-out overflow-hidden 
                                      ${isActive === toggle?.state ? "h-max-[200px] py-4" : "h-0 py-0"}`}>
                                    <p className={`transition-opacity duration-300 text-sm text-gray-700 ${
                                                  isActive === toggle?.state ? "opacity-100" : "opacity-0"}`}>
                                                 {toggle?.answer}
                                    </p>
                                 </div>
                                 </div>
                               ))}
                              </div>
                           </div>
                        </div>
                      </div>
                  </div>
      
                  {/* properties */}
                 <div className="h-300px md:h-full w-full md:w-[250px]  flex md:flex-col items-center justify-center shadow-[0_0_15px_#00000026] rounded-[10px]">
                    <div className="h-[90%] w-[90%] grid grid-cols-1 max-[400px]:grid-cols-1 max-[720px]:grid-cols-2 max-[768px]:grid-cols-4 gap-2">
                      {
                          propertiesFlat?.map((prop, idx) => {
                              return (
                                  <div className="flex w-full h-[100px] justify-around items-center" key={ idx }>
                                     <img src={ prop?.icon } alt="spaceIcon" className="h-8 w-8 md:h-16 md:w-16"/>
                                     <div className="flex flex-col ">
                                        <p className="font-bold text-start text-xs">{prop?.info[0]}</p>
                                        <p className="text-gray-500 text-xs">{prop?.info[1]}</p>
                                     </div>
                                  </div>
                              )
                          })
                      }
                      
                    </div>
                 </div>
      
      
              </div>
            
      </div>

      <div className="h-auto w-full flex justify-center bg-gray-100">
            <div className="w-[96%] max-w-6xl h-full flex flex-col gap-10">
      
              {/* Title and buttons */}
              <div className="w-full h-auto flex flex-col md:flex-row md:justify-between gap-6">
                <h4 className="font-bold text-4xl h-[180px] flex items-center w-full md:w-[35%] text-left">
                  FIND YOUR BEST DEAL RIGHT NOW!
                </h4>
      
                <div className="w-full md:w-[60%] h-auto flex items-end justify-center md:justify-end gap-3">
                  {choices.map((choice, idx) => (
                    <div
                      key={idx}
                      onClick={() => setChoosen(choice.type)}
                      className={`h-[40px] w-[200px] px-6 flex items-center justify-center rounded text-white transition-all duration-300 cursor-pointer ${
                        choosen === choice.type ? 'bg-[#F35525]' : 'bg-black hover:bg-[#F35525]'
                      }`}
                    >
                      {choice.type}
                    </div>
                  ))}
                </div>
              </div>
      
              {/* Selected property details */}
              <div className="w-full h-auto md:h-[420px] flex flex-col md:flex-row items-center md:justify-around gap-10">
                <div className="h-full w-[300px] flex flex-col justify-evenly gap-4">
                  {properties.map((prop, idx) => {
                    const value = [
                      `${selected.space} m²`,
                      selected.floor,
                      selected.rooms,
                      selected.parking,
                      selected.payment
                    ][idx];
      
                    return (
                      <div key={idx} className="flex justify-between items-center border-b pb-2">
                        <div className="text-gray-500">{prop}</div>
                        <div className="font-medium">{value}</div>
                      </div>
                    );
                  })}
                </div>
      
                {/* Optional: image preview */}
                <div className="h-full w-full md:w-[30%]">
                  <img
                    src={ selected?.image }
                    alt={choosen}
                    className="w-full h-full object-cover shadow-lg"
                  />
                </div>
      
                {/* info */}
                <div className="w-full md:w-[30%] h-full flex flex-col items-center gap-1">
                  <p className="h-auto w-full text-xl ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore rem suscipit eos ipsam explicabo, sed debitis voluptates assumenda numquam rerum ipsa?</p>
                  <p className="h-auto w-full text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat inventore rem suscipit eos ipsam explicabo, sed debitis voluptates assumenda numquam rerum ipsa? Harum nesciunt fugiat atque tempora minus molestiae recusandae!</p>
                  <div className="bg-black h-[40px] w-[150px] rounded-[16px] flex justify-between items-center">
                       <div className="h-full w-[40px] mt-2 flex justify-center items-center bg-[#F35525] rounded-[16px]">
                          <img src= { date } alt="date icon" />
                      </div>
                      <p className="w-[100px] text-xs text-white"> Schedule a visit</p>
                  
                  </div>
                </div>
              </div>
      
            </div>
      </div>
      
    </div>
  )
}

export default Details
