// Imports
import '@/public/style.css';

// Interface
interface RootLayoutProps {
    children: React.ReactNode
}

// Component
export default function RootLayout({children}: RootLayoutProps){

    // Content
    return (

        <html lang = 'en'>
            <head></head>
            <body>
                {children}
            </body>
        </html>

    )

}