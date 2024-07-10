// Imports
import type { Metadata } from 'next';

// Metadata
export const metadata: Metadata = {
    title: '404 | rhet.dev'
}

// Component
export default function notFound(){

    // Content
    return (

        <div style = {{textAlign: 'center', fontWeight: 'bold'}}>
        
            <p style = {{fontSize: 30, margin: 10}}>
                404
            </p>
            What you're looking for couldn't be located!
        
        </div>

    )

}