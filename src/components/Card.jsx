import { motion, scale } from "framer-motion";

const Card = ({ data }) => {
  const { type, image, price, dest, Bedrooms, Bathrooms, Area, Floor, Parking } = data;

  return (
    <div className="w-full max-w-[300px] mx-auto bg-white rounded-xl overflow-hidden">
      
      {/* Image */}
      <img 
        src={ image }
        alt={ type }
        className="w-full h-[200px] object-cover"
      />
      
      {/* Badge & price */}
      <div className="p-4 flex justify-between items-center">
        <span className="w-32 bg-pink-100 text-pink-600 text-sm px-3 py-1 rounded-full font-semibold">
          { type }
        </span>
        <span className="text-[#e63946] font-bold text-lg">
         $ { price }
        </span>
      </div>

      {/* Address */}
      <div className="px-4 text-gray-800 font-semibold text-sm mb-2">
        { dest }
      </div>

      {/* Info */}
      <div className=" w-full flex flex-col items-center gap-1 text-[13px] text-gray-600">
        <div className="flex justify-between w-[70%]">
          <span>Bedrooms: <span className="font-semibold"> { Bedrooms }</span></span>
          <span>Bathrooms: <span className="font-semibold">{ Bathrooms }</span></span>
        </div>
        <div className="flex justify-between w-[70%]">
          <span>Area: <span className="font-semibold">{ Area }m²</span></span>
          <span>Floor: <span className="font-semibold">{ Floor }</span></span>
        </div>
        <div className="flex justify-center w-[70%]">
          <span>Parking: <span className="font-semibold">{ Parking }</span></span>
        </div>
      </div>

      {/* Button */}
      <div className="px-4 pb-4">
        <motion.button 
           className="w-full py-2 bg-black text-white rounded-md"
           whileHover={{ scale: 1.05, cursor : 'pointer' }}
           whileTap={{scale : 1.01}}
           transition={{ duration: 0.3 }}>
          Schedule a visit
        </motion.button>
      </div>
    </div>
  );
};

export default Card;
