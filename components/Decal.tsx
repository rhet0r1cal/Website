// Imports
import './styles/Decal.css';

// Interface
interface DecalProps {
    size: number
}

// Component
export default function Decal({size}: DecalProps){

    // Content
    return (

        <div id = 'DecalContainer'>
            <img id = 'Decal' src = '/images/planet.svg' width = {size}></img>
        </div>

    )

}