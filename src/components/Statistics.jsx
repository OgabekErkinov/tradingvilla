import { useInView } from 'react-intersection-observer';
import CountUp from 'react-countup';

const Statistics = () => {
  const { ref, inView } = useInView({
    triggerOnce: false, 
    threshold: 0.6,      
  });

  const statistics = [
    { count: 54, text: 'Buildings Finished Now' },
    { count: 12, text: 'Years Experience' },
    { count: 24, text: 'Awards won 2024' }
  ];

  return (
    <div ref={ref} className="w-full py-12 flex items-center justify-center bg-white">
      <div className="w-[95%] max-w-[1200px] flex flex-col md:flex-row items-center justify-between gap-8">
        {statistics.map((stats, idx) => (
          <div key={idx}
            className="relative bg-[#FFEEE9] w-[280px] h-[110px] rounded-xl flex items-center justify-evenly px-4 shadow-md"
          >
            <div className="text-[#F35525] font-bold text-4xl">
              <CountUp
                end={stats.count}
                duration={2}
                redraw={true}       
                start={inView ? 0 : null}  
              />
            </div>
            <div className="text-xl text-gray-800 font-medium w-[60%]">
              {stats.text}
            </div>
            <div className="w-16 h-16 rounded-full bg-[#F35525] absolute top-[-25px] right-[-25px]"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Statistics;
