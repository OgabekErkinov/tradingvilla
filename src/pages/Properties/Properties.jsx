import BackToHome from '../../components/BackToHome';
import Card from '../../components/Card'

const Properties = () => {

   const variants = [
  {
    type: 'Luxury Villa',
    image: 'https://holiwaysvillas.com/wp-content/uploads/2024/06/STAR-1.webp',
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
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2025/4/14/shutterstock_2545692583-Zastolskiy-Victor-modern-apartment-design-interior.jpg.rend.hgtvcom.1280.960.85.suffix/1744664801975.webp',
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
    image: 'https://brickell-media-production.s3.amazonaws.com/media/images/echo-brickell-penthouse.width-1200.format-webp.webp',
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
    image: 'https://homesmartbook.com/wp-content/uploads/2024/12/cozy-cottage-home-decor.webp',
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
    image: 'https://www.thehousedesigners.com/images/plans/01/JBZ/bulk/9463/3141-day-rendering_m.webp',
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
    image: 'https://www.self-build.co.uk/wp-content/uploads/2022/11/Roderick-James-Architects-2.webp',
    price: '2.890.000',
    dest: '101 Palm Beach Rd, Miami, FL 33139',
    Bedrooms: 4,
    Bathrooms: 4,
    Area: 300,
    Floor: 2,
    Parking: '3 spots'
  },
  {
    type: 'Skyline Apartment',
    image: 'https://brickell-media-production.s3.amazonaws.com/media/images/echo-brickell-penthouse.width-1200.format-webp.webp',
    price: '1.950.000',
    dest: '88 Sunset Blvd, LA, CA 90026',
    Bedrooms: 4,
    Bathrooms: 2,
    Area: 290,
    Floor: 25,
    Parking: '1 spot'
  },
  {
    type: 'Lakeview Villa',
    image: 'https://holiwaysvillas.com/wp-content/uploads/2024/06/STAR-1.webp',
    price: '2.500.000',
    dest: '5 Lakeview Drive, Austin, TX 73301',
    Bedrooms: 7,
    Bathrooms: 5,
    Area: 500,
    Floor: 2,
    Parking: '5 spots'
  },
  {
    type: 'Urban Flat',
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2025/4/14/shutterstock_2545692583-Zastolskiy-Victor-modern-apartment-design-interior.jpg.rend.hgtvcom.1280.960.85.suffix/1744664801975.webp',
    price: '890.000',
    dest: '23 Elm Street, Boston, MA 02108',
    Bedrooms: 2,
    Bathrooms: 2,
    Area: 160,
    Floor: 10,
    Parking: '1 spot'
  },
  {
    type: 'Country Cottage',
    image: 'https://homesmartbook.com/wp-content/uploads/2024/12/cozy-cottage-home-decor.webp',
    price: '720.000',
    dest: '33 Farm Lane, Nashville, TN 37201',
    Bedrooms: 3,
    Bathrooms: 2,
    Area: 140,
    Floor: 1,
    Parking: '1 spot'
  },
  {
    type: 'Seaside Mansion',
    image: 'https://www.self-build.co.uk/wp-content/uploads/2022/11/Roderick-James-Architects-2.webp',
    price: '3.800.000',
    dest: '200 Oceanfront, Malibu, CA 90265',
    Bedrooms: 9,
    Bathrooms: 7,
    Area: 700,
    Floor: 3,
    Parking: '6 spots'
  },
  {
    type: 'Twin Apartment',
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2025/4/14/shutterstock_2545692583-Zastolskiy-Victor-modern-apartment-design-interior.jpg.rend.hgtvcom.1280.960.85.suffix/1744664801975.webp',
    price: '970.000',
    dest: '70 Twin Oaks, Seattle, WA 98101',
    Bedrooms: 2,
    Bathrooms: 1,
    Area: 150,
    Floor: 12,
    Parking: '1 spot'
  },
  {
    type: 'Retro Bungalow',
    image: 'https://homesmartbook.com/wp-content/uploads/2024/12/cozy-cottage-home-decor.webp',
    price: '800.000',
    dest: '40 Palm Grove, Tampa, FL 33602',
    Bedrooms: 3,
    Bathrooms: 2,
    Area: 180,
    Floor: 1,
    Parking: '1 spot'
  },
  {
    type: 'Glass House',
    image: 'https://www.thehousedesigners.com/images/plans/01/JBZ/bulk/9463/3141-day-rendering_m.webp',
    price: '2.000.000',
    dest: '99 Crystal View, Phoenix, AZ 85001',
    Bedrooms: 5,
    Bathrooms: 4,
    Area: 400,
    Floor: 2,
    Parking: '3 spots'
  },
  {
    type: 'Sunset View Home',
    image: 'https://holiwaysvillas.com/wp-content/uploads/2024/06/STAR-1.webp',
    price: '1.760.000',
    dest: '56 Sunset Road, San Diego, CA 92101',
    Bedrooms: 4,
    Bathrooms: 3,
    Area: 320,
    Floor: 2,
    Parking: '2 spots'
  },
  {
    type: 'Downtown Condo',
    image: 'https://brickell-media-production.s3.amazonaws.com/media/images/echo-brickell-penthouse.width-1200.format-webp.webp',
    price: '1.350.000',
    dest: '11 Central St, Houston, TX 77002',
    Bedrooms: 3,
    Bathrooms: 2,
    Area: 200,
    Floor: 18,
    Parking: '1 spot'
  },
  {
    type: 'Elite Loft',
    image: 'https://hgtvhome.sndimg.com/content/dam/images/hgtv/stock/2025/4/14/shutterstock_2545692583-Zastolskiy-Victor-modern-apartment-design-interior.jpg.rend.hgtvcom.1280.960.85.suffix/1744664801975.webp',
    price: '1.220.000',
    dest: '66 Fashion Ave, Manhattan, NY 10018',
    Bedrooms: 2,
    Bathrooms: 2,
    Area: 190,
    Floor: 9,
    Parking: '1 spot'
  },
  {
    type: 'Dream Beach Villa',
    image: 'https://www.self-build.co.uk/wp-content/uploads/2022/11/Roderick-James-Architects-2.webp',
    price: '3.100.000',
    dest: '77 Paradise Cove, Key West, FL 33040',
    Bedrooms: 5,
    Bathrooms: 5,
    Area: 550,
    Floor: 2,
    Parking: '4 spots'
  }
];


  return (
    <div className='w-full h-auto flex flex-col items-center justify-center gap-4'>

      <BackToHome/>

      <div className='h-auto w-full flex flex-col gap-2 items-center'>
        <p className='text-[#EE626B] font-bold w-full text-center'>Properties</p>
        <div className='w-[50%] h-auto text-[#1E1E1E] font-bold text-[28px] md:text-[48px] leading-none text-center'>
          We Provide The Best Property You Like
        </div>
      </div>

         <div className='w-[90%] h-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-6 px-4 py-8'>
            {variants.map((item, idx) => (
                <Card key={idx} data={item} />
             ))}
         </div>
    </div>
   

  )
}

export default Properties
