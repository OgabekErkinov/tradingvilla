import { Details, Properties, Slider, VideoView } from "./Components/index"
import { Statistics } from "../../components/index"
import { Contact } from "../index"

const Home = () => {
  return (
    <div className="flex flex-col gap-8">
      <Slider/>
      <Details/>
      <div className="h-auto w-full flex flex-col gap-8">
        <div className="w-full h-[700px]">
        <VideoView/>
        </div>
        <Statistics/>
        <Properties/>
        <Contact/>
      </div>
    </div>
  )
}

export default Home
