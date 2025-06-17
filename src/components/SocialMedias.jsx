import mailIcon from "../assets/icons/mail.png";
import mapIcon from "../assets/icons/map.png"
import facebook from "../assets/icons/facebook.png"
import twitter from "../assets/icons/twitter.png"
import linkedin from "../assets/icons/linkedin.png"
import instagram from "../assets/icons/instagram.png"

const SocialMedias = () => {
  return (
    <div className='w-full h-[24px] hidden md:block'>
      <div className='w-full h-full flex justify-between items-center'>

        {/* left side */}
        <div className='h-full flex justify-start gap-8'>
          <div className='flex h-full items-center gap-2'>
            <img src={mailIcon} alt="mail" className='w-5 h-5 object-contain' />
            <p className='text-sm text-gray-700 hover:underline'>
              ogabekerkinov56@gmail.com
            </p>
          </div>
           <div className='flex h-full items-center gap-2'>
            <img src={mapIcon} alt="map" className='w-5 h-5 object-contain' />
            <p className='text-sm text-gray-700 hover:underline'>
               Sunny Isles Beach, FL 33160
            </p>
          </div>
        </div>

        {/* right side */}
        <div className="h-full w-[50%] flex justify-end gap-8">
          <div className="flex justify-center gap-2 items-center pr-2">
            <div className="h-6 w-6 flex items-center justify-center rounded-[50%] bg-gray-400">
              <img src={ facebook } alt="facebook" />
            </div>
            <div className="h-6 w-6 flex items-center justify-center rounded-[50%] bg-gray-400">
              <img src={ twitter } alt="twitter" />
            </div>
            <div className="h-6 w-6 flex items-center justify-center rounded-[50%] bg-gray-400">
              <img src={ linkedin } alt="linkedin" />
            </div>
            <div className="h-6 w-6 flex items-center justify-center rounded-[50%] bg-gray-400">
              <img src={ instagram } alt="instagram" />
            </div> 
          </div>

        </div>
      </div>
    </div>
  );
};

export default SocialMedias;
