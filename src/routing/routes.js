import { Contact, Details, Home, Properties } from "../pages";

export const routes = [
    { element : <Home/>, route : '/' },
    { element : <Details/>, route : '/details' },
    { element : <Properties/>, route : '/properties' },
    { element : <Contact/>, route : '/contact' }
]