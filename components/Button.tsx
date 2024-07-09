// Imports
import '@/styles/Button.css';
import { CSSProperties, MouseEventHandler } from 'react';

// Interface
interface ButtonProps {
    style?: CSSProperties;
    children: React.ReactNode;
    onClickEvent: MouseEventHandler;
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