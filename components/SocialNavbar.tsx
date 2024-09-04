// Imports
import '@/styles/SocialNavbar.css';
import { github, twitter, resume } from '@/logic/SocialNavbar';

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
            <img className = 'button' src = '/icons/socials/x.svg' onClick = {twitter} width = {size} style = {{marginLeft: spacing}}></img>
        </div>

    )

}