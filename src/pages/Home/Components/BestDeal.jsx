import { useState } from "react";
import apartment from '../../../assets/images/apartment.jfif'
import penthouse from '../../../assets/images/penthouse.webp'
import villa from '../../../assets/images/villa.webp'
import date from "../../../assets/icons/date.png"

const BestDeal = () => {
  const [choosen, setChoosen] = useState('Apartment');


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
    <div className="h-auto w-full flex justify-center py-20 bg-gray-100 relative top-[160px]">
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
  );
};

export default BestDeal;
