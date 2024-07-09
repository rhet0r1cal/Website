// Imports
import type { Metadata } from 'next';
import { resumeClick } from '@/logic/ResumeButton';
import ImageHeader from '@/components/ImageHeader';

// Metadata
export const metadata: Metadata = {
    title: 'about | rhet.dev'
}

// Component
export default function aboutPage(){

    // Content
    return (

        <>
        
            <ImageHeader size = {150} title = 'Nice to meet you!'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br><br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ImageHeader>

            <div className = 'flexbox' style = {{marginTop: 10}}>
                <p className = 'button' onClick = {resumeClick}>
                    Resume
                </p>
            </div>
        
        </>

    )

}