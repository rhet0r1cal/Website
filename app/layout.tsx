// Imports
import '@/public/style.css';
import Decal from '@/components/Decal';

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
                <Decal size = {2000}></Decal>
                {children}
                <script src = '/api/attribute.js'></script>
            </body>
        </html>

    )

}