import { Route, Routes } from 'react-router-dom'
import { Contact, Details, Home, Properties } from '../pages'

const Routing = () => {
  return (
    <Routes>
        <Route element = {<Home/>} path='/'/>
        <Route element = {<Properties/> } path = '/properties'/>
        <Route element = {<Details/>} path= '/details'/>
        <Route element = {<Contact/>} path= '/contact'/>
    </Routes>
  )
}

export default Routing
