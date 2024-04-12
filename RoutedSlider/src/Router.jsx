import App from './App.jsx'
import {createBrowserRouter} from 'react-router-dom'
import About from './routes/About'
import Contact from './routes/Contact'
import Projects from './routes/Projects.jsx'
import LRSlider from './LRSlider.jsx'


export const Router = createBrowserRouter([
  {
    path: '/',
    element: <LRSlider Route={<About />} left="/contact" right="/projects" />,
  },
  {
    path: '/contact',
    element: <LRSlider Route={<Contact />} left="/projects" right="/" />,
  },
  {
    path: '/projects',
    element: <LRSlider Route={<Projects />} left="/" right="/contact" />,
  }
])
