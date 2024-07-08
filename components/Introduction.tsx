// Imports
import '@/styles/Introduction.css';
import StackDisplay from './StackDisplay';

// Interface
interface IntroProps {
    children: React.ReactNode
}

// Component
export default function IntroductionElement({children}: IntroProps){

    // Content
    return (

        <>

            <div id = 'headerContainer' className = 'flexbox'>
                <div className = 'flexbox'>
                    <img id = 'imgContainer' src = '/images/icon.png' width = {125}></img>
                    <p id = 'headerContent'>
                        Hello, <br></br> I'm <span id = 'specialText'>Rh3t</span>!
                    </p>
                </div>

                <StackDisplay
                    padding = '45px'
                    size = '30px'
                ></StackDisplay>

                <p id = 'descriptionText'>
                    {children}
                </p>
            </div>
        
        </>

    )

}