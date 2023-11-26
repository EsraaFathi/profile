
import Hero from './components/2 hero/Hero';
import Contact from './components/4 contact/Contact';
import Main from './components/3 main/Main';
// import Footer from './components/5 footer/Footer';
// import Header from './components/1 header/Header';
// import ParticlesBackground from './components/particles';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Applayout from './components/Applayout';
import Video from './components/video';

import Home from './components/Home'
function App() {

const router =createBrowserRouter([
  {
    path:'/',
    element:<Applayout/>,
    children: [
      {index: true, element:<Home />},

        {path :'/contact', element:<Contact />},
        {path:'/projects', element:<Main />},
        {path:'/hero', element:<Hero />},
        {path:'/video', element:<Video />}

        // {path:'/conact-us',element:<Contact />},


    ]
  }
])



  return (
    <>

<RouterProvider router={router} />

    {/* <div id="up" className='container'>
      <ParticlesBackground/>
    <Header/>
 
     <Hero/>
     <div className='divider'/>
     <Main/>
     <div className='divider'/>

     <Contact/>
     <div className='divider'/>

  <Footer/>*/}

    {/* </div>  */}

    </>
  )
}

export default App
