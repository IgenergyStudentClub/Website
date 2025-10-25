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
import Hyperspeed from './compenants/hyperspeed'
function App() {

  return (
    
    
      <Router >
  <Nav/>
        <Routes>
          <Route path="/Website" element={
            <>
            <div className='bg-gray-900 w-full'>
              

<div className='overflow-hidden w-full h-170 lg:h-135'>
  <Hyperspeed className="w-full"
  effectOptions={{
    onSpeedUp: () => { },
    onSlowDown: () => { },
    distortion: 'turbulentDistortion',
    length: 400,
    roadWidth: 10,
    islandWidth: 2,
    lanesPerRoad: 4,
    fov: 90,
    fovSpeedUp: 150,
    speedUp: 2,
    carLightsFade: 0.4,
    totalSideLightSticks: 20,
    lightPairsPerRoadWay: 40,
    shoulderLinesWidthPercentage: 0.05,
    brokenLinesWidthPercentage: 0.1,
    brokenLinesLengthPercentage: 0.5,
    lightStickWidth: [0.12, 0.5],
    lightStickHeight: [1.3, 1.7],
    movingAwaySpeed: [60, 80],
    movingCloserSpeed: [-120, -160],
    carLightsLength: [400 * 0.03, 400 * 0.2],
    carLightsRadius: [0.05, 0.14],
    carWidthPercentage: [0.3, 0.5],
    carShiftX: [-0.8, 0.8],
    carFloorSeparation: [0, 5],
    colors: {
      roadColor: 0x080808,
      islandColor: 0x0a0a0a,
      background: 0x000000,
      shoulderLines: 0xFFFFFF,
      brokenLines: 0xFFFFFF,
      leftCars: [0xD856BF, 0x6750A2, 0xC247AC],
      rightCars: [0x03B3C3, 0x0E5EA5, 0x324555],
      sticks: 0x03B3C3,
    }
  }}
/></div>
            
        <General/>
        <CarouselDemo/>
        <TimelineDemo/>
        
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