import { useState } from 'react'
import Chat from './components/chat/Chat'
import { Canvas } from '@react-three/fiber'
import Banorte from './components/banorte/Banorte'

export const App = () => {
  const [currTab, setCurrTab] = useState(1)

  return (
    <div style={{height: "100vh", width:"100vw", position:"relative", backgroundColor:"#000000", overflow:"hidden", display:"flex", justifyContent:"center"}}>
        <div style={{position:"absolute",top:0, left:0, width:"100vw", height:"100vh", zIndex: 10}}>
           <Canvas 
                className="canvas"
                shadows
                camera={{position: [0,10,60], fov: 15}}
                color={"#000000"}
                style={{zIndex: 10}} 
                >
                  <Banorte currTab={currTab}/>
            </Canvas>
        </div>
        <Chat currTab = {currTab} setCurrTab = {setCurrTab}/>
    </div>
  )
}

export default App
