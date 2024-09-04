// Imports
import '@/styles/VersionLabel.css';
import data from '@/public/api/manifest.json';

// Component
export default function VersionLabel() {

    // Content
    return (

        <p id = 'VersionLabel'>
            <b>Version</b>: {data.version}
        </p>

    )

}