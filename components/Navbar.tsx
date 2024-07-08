// Imports
import '@/styles/Navbar.css';
import { aboutButtonClick, archiveButtonClick, blogButtonClick, homeButtonClick } from '@/logic/Navbar';

// Component
export default function Navbar(){

    // Content
    return (

        <>
            <div className = 'flexbox'>
                <div id = 'Navbar'>
                    <p style = {{paddingRight: 10}}>~</p>
                    <p className = 'NavbarElement' onClick={homeButtonClick}>Home</p>
                    <p className = 'NavbarElement' onClick={aboutButtonClick}>About</p>
                    <p className = 'NavbarElement' onClick={blogButtonClick}>Blog</p>
                    <p className = 'NavbarElement' onClick={archiveButtonClick}>Archive</p>
                    <p style = {{paddingLeft: 10}}>~</p>
                </div>
            </div>
        </>

    )

}