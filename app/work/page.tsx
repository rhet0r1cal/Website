// Imports
import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: 'work | rhet.dev'
}

// Component
export default function workPage(){

    // Content
    return (

        <div style = {{textAlign: 'center', fontWeight: 'bold'}}>
        
            <p style = {{fontSize: 30, margin: 10}}>Uh oh!</p>
            <p style = {{width: '400px'}}>
                This is taking a bit longer then expected to work out. You can check out my GitHub Repositories while you wait.
            </p>

            <a href = 'https://github.com/rhet0r1cal?tab=repositories'>Visit Repositories</a>
        
        </div>

    )

}