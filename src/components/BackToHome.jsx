import { useLocation, useNavigate } from 'react-router-dom';
import apartment from '../assets/images/apartment.jpg';

const BackToHome = () => {
  const path = useLocation();
  const navigate = useNavigate();

  const currentPath = path.pathname === '/' ? 'Home' : path.pathname.slice(1).replace(/-/g, ' ');

  return (
    <div className='w-full h-[240px] flex justify-center items-center relative'>
      {/* Background rasm */}
      <img src={apartment} alt="image" className='h-full w-full object-cover' />

      {/* Overlay content */}
      <div className='w-full h-[80%] flex flex-col gap-4 absolute z-10 top-[10%] backdrop-blur-[3px] items-center justify-center'>

        {/* Navigatsiya link */}
        <div
          className='w-auto px-4 h-[40px] bg-white text-black flex items-center justify-center rounded shadow cursor-pointer hover:bg-gray-100 transition'
          onClick={() => navigate('/')}
        >
          Home / {currentPath}
        </div>

        {/* Sarlavha */}
        <div className='text-4xl md:text-6xl font-bold text-white capitalize'>
          {currentPath}
        </div>
      </div>
    </div>
  );
};

export default BackToHome;
