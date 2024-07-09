// Imports
import '@/styles/Button.css';
import { CSSProperties } from 'react';

// Interface
interface ButtonProps {
    onClickEvent: void;
    style?: CSSProperties;
    children: React.ReactNode;
}

// Component
export default function Button({children, onClickEvent, style}: ButtonProps){

    // Content
    return (

        <div className = 'button' onClick = {onClickEvent} style = {style}>
            {children}
        </div>

    )

}