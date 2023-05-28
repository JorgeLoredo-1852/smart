import { Environment, OrbitControls } from "@react-three/drei";
import {Model as SrBanorte} from '../../models/speaking'
import {Model as Cajero} from '../../models/cajero'
import { useState } from "react";
import {Model as Card} from '../../models/card'
import { useFrame } from "@react-three/fiber";


const Banorte = ({currTab}) => {
    const [posCard, setPosCard] = useState(0)

    const getPosition = () => {
        if(currTab === 1 || currTab === 2){
            return [0,0,0]
        }
        if(currTab === 3){
            return [-6,2,0]
        }
        if(currTab === 4){
            return [0,-3,0]
        }
        if(currTab === 5){
            return [0,-3,0]
        }
        if(currTab === 6){
            return [0,0,0]
        }
    };

    useFrame(()=>{
        setPosCard(posCard + 0.01)
    })
    
    return(
        <>
            <ambientLight intensity={0.5}/>
            <Environment preset="forest" blur={0.5}/>
            <OrbitControls></OrbitControls>
            <group position={[0,-7,0]}>
                <Cajero position={[0,-4,-5]}/>
                {currTab !== 6 ? <SrBanorte position = {getPosition()}/>: <Card position={[0,6,0]} scale={3} rotation={[Math.PI/12,posCard,Math.PI/2]}/>}
            </group>
        </>
    )
}

export default Banorte;