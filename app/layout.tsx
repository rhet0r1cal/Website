// Imports
import '@/styles/_Main.css';
import Decal from '@/components/Decal';
import Navbar from '@/components/Navbar';
import VersionLabel from '@/components/VersionLabel';

// Interface
interface LayoutProps {
    children: React.ReactNode
}

// Component
export default function RootLayout({children}: LayoutProps){

    // Content
    return (

        <html lang = 'en' className = 'flexbox'>
            <head></head>
            <body>
            
                {children}

                { /* Extra Stuff */}
                <Navbar></Navbar>
                <VersionLabel></VersionLabel>
                <Decal size = {2000}></Decal>

            </body>
        </html>

    )

}