// Imports
import './styles/Navbar.css';

// Component
export default function Navbar(){

    // Content
    return (

        <>
            <div className = 'flexbox'>
                <div id = 'Navbar'>
                    <p style = {{paddingRight: 10}}>~</p>
                    <p id = 'HomeButton' className = 'NavbarElement'>Home</p>
                    <p id = 'AboutButton' className = 'NavbarElement'>About</p>
                    <p id = 'BlogButton' className = 'NavbarElement'>Blog</p>
                    <p style = {{paddingLeft: 10}}>~</p>
                </div>
                <script src = '/logic/Navbar.js'></script>
            </div>
        </>

    )

}