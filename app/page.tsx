// Imports
import type { Metadata } from 'next';
import IntroductionElement from '@/components/Introduction';

// Meta
export const metadata: Metadata = {
    title: 'home | rhet.dev'
}

// Component
export default function Index(){

    // Content
    return (

        <>

            <IntroductionElement>
                Nice to meet you! I'm a software developer based in the United States.
            </IntroductionElement>
        
        </>

    )

}