// Imports
import './styles/Version.css';
import data from '@/public/api/manifest.json';

// Interface
interface VersionProps {
    children?: React.ReactNode
    fromFile?: boolean
}

// Component
export default function Version({children, fromFile}: VersionProps){

    // Content
    if (fromFile == true){return(

        <p id = 'Version'>
            v{data.version}
        </p>

    )} else {return(

        <p id = 'Version'>
            {children}
        </p>

    )}

}