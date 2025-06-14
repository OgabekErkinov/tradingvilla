import { useRef } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';


const Slider = () => {
    const villasPictures = [
        "https://static.realting.com/uploads/images/f17/65e4615dc20cb58e9cb0b5d086c09.webp",
        "https://arhitectura.ru/wp-content/webp-express/webp-images/uploads/2023/12/arhitekturnoe-byuro-reginy-ziminoj.jpg.webp",
        "https://content.themulia.com/proxy/https://cdn.prod.website-files.com/6624ff6a5db57a668993dd5e/66a1d8866c96c19edaa1873d_Mulia%20Villas%20-%20One%20Bedroom%20-%20Pavilion.webp"
    ]
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="w-full h-128 mx-auto mt-2">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        pagination={{ clickable: true }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        modules={[Autoplay, Pagination, Navigation]}
        onBeforeInit={(swiper) => {
          // @ts-ignore
          swiper.params.navigation.prevEl = prevRef.current;
          // @ts-ignore
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        className="h-full rounded-[5px] relative"
      >
        {
            villasPictures.map((villa, idx) => {
                return (
                        <SwiperSlide key={ idx } style={{position : 'relative'}}>
                          <img src= { villa }
                               alt= {`villa - ${idx}`}
                               className="w-full h-full object-cover" />
                               <div className='absolute z-10 top-0 left-0 h-full w-full bg-black/30
                                               flex items-center justify-start'>
                                 <div className='h-full w-[10%]'></div>
                                 <h3 className='h-[50%] w-50 text-left text-4xl font-extrabold text-white'>
                                    HURRY! <br/>
                                    GET THE BEST VILLA FOR YOU
                                 </h3>
                               </div>
                        </SwiperSlide>
                       )
             })
        }

        {/* Left button */}
        <button
          ref={prevRef}
          className="w-8 h-8 flex justify-center items-center z-10 absolute top-1/2 left-3 -translate-y-1/2 bg-black/50 text-white
                     text-2xl rounded-full hover:bg-black/30 transition hover:cursor-pointer"
        >
          <FaAngleLeft/>
        </button>

        {/* Right button */}
        <button
          ref={nextRef}
          className="w-8 h-8 flex justify-center items-center absolute z-10 top-1/2 right-3 -translate-y-1/2 bg-black/50 text-white 
                     text-2xl rounded-full hover:bg-black/30 transition hover:cursor-pointer"
        >
          <FaAngleRight/>
        </button>
      </Swiper>
    </div>
  )
}

export default Slider
