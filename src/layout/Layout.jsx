import { Footer, Navbar, SocialMedias } from '../components/index'
import Routing from "../routing/Routing"

const Layout = () => {
  return (
    <div className='h-auto w-full max-w-[1440px] mx-auto flex flex-col gap-8'>
      <header>
        <SocialMedias />
        <Navbar />
      </header>
      <main>
        <Routing/>
      </main>
      <footer>
        <Footer/>
      </footer>
    </div>
  )
}

export default Layout
