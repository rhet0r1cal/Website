// Imports
import type { Metadata } from 'next';
import ImageHeader from '@/components/ImageHeader';
import SocialNavbar from '@/components/SocialNavbar';

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
                I'm a 17 y/o software developer, or another one of those unfortunate souls who've sold their soul to the internet for more than 6 years. <br></br><br></br> I'm experienced in languages such as HTML, JavaScript, Typescript, and Python. Along with that, I also have experience with tools such as React, Next.js, and data storage and server software like Supabase, Cloudflare, and Firebase. <br></br><br></br> You can view my socials below, I look forward to working with you!
            </ImageHeader>

            <SocialNavbar
                size = {25}
                spacing = {40}
                topMargin = {40}
            ></SocialNavbar>
        
        </>

    )

}