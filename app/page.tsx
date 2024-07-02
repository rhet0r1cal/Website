// Imports
import type { Metadata } from 'next';

// Meta
export const metadata: Metadata = {
    title: 'home | rhet.dev'
}

// Component
export default function Index(){

    // Content
    return (

        <>
    
            <div id = 'header' className = 'flexbox' style = {{padding: '50px'}}>
                <img src = '/images/icon.png' width = {'175vw'}></img>
                <p id = 'headerText' style = {{paddingLeft: 20}}>
                    Hello, <br></br> I'm <span style = {{color: 'orange'}}>Rh3t</span>!
                </p>
            </div>
        
        </>

    )

}