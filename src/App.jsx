import './App.css'
import Nav from './compenants/NNAv'
import Events from './compenants/section1'
import Leaders from './compenants/leaders'
import Community from './compenants/com'
import Footer from './compenants/footer'
import Projects from './compenants/projects'
import BackgroundBeamsWithCollisionDemo from './compenants/comp'
import InfiniteMovingCardsDemo from './compenants/talks'
import ExpandableCardDemo from './compenants/events'
 import LampDemo from './compenants/tst1'
 import CarouselDemo from './compenants/mgcd'
 import Foooter from './compenants/Foooter'
 import TimelineDemo from './compenants/time'
 import General from './compenants/general'
 import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
 import Teach from './compenants/teach'
import Energy from './compenants/energy'
import Lab from './compenants/lab'
import IT from './compenants/it'
import Hour from './compenants/hour'
import { FlipWordsDemo } from './compenants/hdr'
import AuroraBackgroundDemo from './compenants/join'
import StickyBannerDemo from './compenants/banner'
import DotGrid from './compenants/bit';
function App() {

  return (
    
    
      <Router >
  <Nav/>
        <Routes>
          <Route path="/Website" element={
            <>
            <div className='bg-gray-900 w-full'>
              
<div style={{ width: '100%', height: '600px', position: 'relative' }}>
  <DotGrid
    dotSize={4}
    gap={15}
    baseColor="#5227FF"
    activeColor="#5227FF"
    proximity={120}
    shockRadius={250}
    shockStrength={5}
    resistance={750}
    returnDuration={1.5}
  />
</div>
            
        <General/>
        <CarouselDemo/>
        <TimelineDemo/>
        <AuroraBackgroundDemo/>
        
        </div>
            </>
          }/>

          <Route path="/Team" element={
            <>
            <Leaders/>
            
            </>
          }/>
          <Route path="/Teach" element={
            <>
            <Teach/>
            </>
          }/>

                    <Route path="/Energy" element={
            <>
            <Energy/>
            </>
          }/>

          <Route path="/Lab" element={
            <>
            <Lab/>
            
            </>
          }/>

          <Route path="/IT" element={
            <>
            <IT/>
            </>
          }/>

          <Route path="/Hour" element={
            <>

            <Hour/>
            
            </>
          }/>

          

      

        
        
        

    
       </Routes>
       <Foooter/>
     </Router>
        
  
  )
}

export default App;