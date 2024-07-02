// Imports
import '@/public/style.css';
import Decal from '@/components/Decal';
import Navbar from '@/components/Navbar';
import Version from '@/components/Version';

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
                <Decal size = {2000}></Decal>
                <Version fromFile = {true}></Version>
                <script src = '/api/attribute.js'></script>

            </body>
        </html>

    )

}