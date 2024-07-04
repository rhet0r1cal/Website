// Imports
import '@/styles/Introduction.css';

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
                    <img src = '/images/icon.png' width = {200}></img>
                    <p id = 'headerContent'>
                        Hello, <br></br> I'm <span id = 'specialText'>Rh3t</span>!
                    </p>
                </div>
                <p id = 'descriptionText'>
                    {children}
                </p>
            </div>
        
        </>

    )

}