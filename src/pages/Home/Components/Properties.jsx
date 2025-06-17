import React from 'react'
import Card from '../../../components/Card'

const Properties = () => {
    const variants = [
    {
      type: 'Luxury Villa',
      image : 'https://holiwaysvillas.com/wp-content/uploads/2024/06/STAR-1.webp',
      price: '2.264.000',
      dest: '18 New Street Miami, OR 97219',
      Bedrooms: 8,
      Bathrooms: 8,
      Area: 545,
      Floor: 1,
      Parking: '6 spots'
    },
    {
      type: 'Modern Apartment',
      image : 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2025/4/14/shutterstock_2545692583-Zastolskiy-Victor-modern-apartment-design-interior.jpg.rend.hgtvcom.1280.960.85.suffix/1744664801975.webp',
      price: '1.150.000',
      dest: '44 Grand Avenue New York, NY 10001',
      Bedrooms: 3,
      Bathrooms: 2,
      Area: 180,
      Floor: 15,
      Parking: '1 spot'
    },
    {
      type: 'Penthouse',
      image : 'https://brickell-media-production.s3.amazonaws.com/media/images/echo-brickell-penthouse.width-1200.format-webp.webp',
      price: '3.750.000',
      dest: '77 Ocean Drive, Los Angeles, CA 90001',
      Bedrooms: 5,
      Bathrooms: 4,
      Area: 350,
      Floor: 40,
      Parking: '2 spots'
    },
    {
      type: 'Cozy Cottage',
      image : 'https://homesmartbook.com/wp-content/uploads/2024/12/cozy-cottage-home-decor.webp',
      price: '650.000',
      dest: '12 Hilltop Road, Portland, OR 97035',
      Bedrooms: 2,
      Bathrooms: 1,
      Area: 120,
      Floor: 1,
      Parking: '1 spot'
    },
    {
      type: 'Family House',
      image : 'https://www.thehousedesigners.com/images/plans/01/JBZ/bulk/9463/3141-day-rendering_m.webp',
      price: '1.580.000',
      dest: '9 Green Street, Chicago, IL 60607',
      Bedrooms: 6,
      Bathrooms: 3,
      Area: 410,
      Floor: 2,
      Parking: '2 spots'
    },
    {
      type: 'Beach House',
      image : 'https://www.self-build.co.uk/wp-content/uploads/2022/11/Roderick-James-Architects-2.webp',
      price: '2.890.000',
      dest: '101 Palm Beach Rd, Miami, FL 33139',
      Bedrooms: 4,
      Bathrooms: 4,
      Area: 300,
      Floor: 2,
      Parking: '3 spots'
    }
  ];
  return (
    <div className='h-auto w-full flex flex-col items-center gap-2'>

      <div className='w-full h-auto flex items-center'>
        <div className='w-full h-[80%] flex flex-col items-center gap-1'>
          <p className='text-[#cc512c] font-bold'>PROPERTIES</p>
          <div className='h-auto w-full sm:w-[50%] md:w-[30%] font-bold text-3xl text-center'>
            We Provide The Best Property You Like
          </div>
        </div>
      </div>

      {/* cards */}
      <div className='w-full h-auto flex items-center justify-center'>
         <div className='w-[90%] h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 place-items-center'>
            {variants.map((item, idx) => (
                <Card key={idx} data={item} />
             ))}
         </div>
      </div>
    </div>
   

  )
}

export default Properties
