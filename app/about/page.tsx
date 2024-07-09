// Imports
import type { Metadata } from 'next';
import Button from '@/components/Button';
import ImageHeader from '@/components/ImageHeader';
import { resumeClick, githubClick, instaClick } from '@/logic/aboutButtons';

// Metadata
export const metadata: Metadata = {
    title: 'about | rhet.dev'
}

// Component
export default function aboutPage(){

    // Content
    return (

        <>
        
            <ImageHeader size = {150} title = "I'm Keegan, nice to meet you!">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. <br></br><br></br> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </ImageHeader>

            <div className = 'flexbox' style = {{marginTop: 40}}>
                <Button onClickEvent = {resumeClick}>Resume</Button>
                <Button onClickEvent = {githubClick} style = {{marginLeft: 20}}>GitHub</Button>
                <Button onClickEvent = {instaClick} style = {{marginLeft: 20}}>Instagram</Button>
            </div>
        
        </>

    )

}