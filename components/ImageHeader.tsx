// Imports
import '@/styles/ImageHeader.css';

// Interface
interface ImageHeaderProps {
    size: number;
    title: string;
    children: React.ReactNode;
}

// Component
export default function ImageHeader({children, size, title}: ImageHeaderProps){

    // Content
    return (

        <div id = 'ImageHeaderContainer' className = 'flexbox'>
            <img id = 'ImageHeaderPicture' src = '/images/personal.png' width = {size}></img>
            <p id = 'ImageHeaderTitle'>{title}</p>
            <p id = 'ImageHeaderText'>{children}</p>
        </div>

    )

}