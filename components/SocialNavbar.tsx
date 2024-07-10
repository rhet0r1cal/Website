// Imports
import '@/styles/SocialNavbar.css';
import { github, instagram, resume } from '@/logic/SocialNavbar';

// Interface
interface SocialNavbarProps {
    size: number;
    spacing: number;
    topMargin: number;
}

// Component
export default function SocialNavbar({spacing, size, topMargin}: SocialNavbarProps){

    // Content
    return (

        <div className = 'flexbox' style = {{marginTop: topMargin}}>
            <img className = 'button' src = '/icons/socials/github.svg' onClick = {github} width = {size}></img>
            <img className = 'button' src = '/icons/socials/instagram.svg' onClick = {instagram} width = {size} style = {{marginLeft: spacing}}></img>
            <img className = 'button' src = '/icons/socials/resume.svg' onClick = {resume} width = {size} style = {{marginLeft: spacing}}></img>
        </div>

    )

}