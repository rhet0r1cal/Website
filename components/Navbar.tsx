// Imports
import '@/styles/Navbar.css';
import { home, about, archive } from '@/logic/Navbar';

// Component
export default function Navbar(){

    // Content
    return (

        <>
            <div className = 'flexbox'>
                <div id = 'Navbar'>
                    <p style = {{paddingRight: 10}}>~</p>
                    <p className = 'NavbarElement' onClick={home}>Home</p>
                    <p className = 'NavbarElement' onClick={about}>About</p>
                    <p className = 'NavbarElement' onClick={archive}>Archive</p>
                    <p style = {{paddingLeft: 10}}>~</p>
                </div>
            </div>
        </>

    )

}