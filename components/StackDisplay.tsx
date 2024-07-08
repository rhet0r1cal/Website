// Imports
import '@/styles/StackDisplay.css';

// Interface
interface StackDisplayProps {
    padding: string,
    size: string
}

// Component
export default function StackDisplay({padding, size}: StackDisplayProps) {

    // Content
    return (

        <div id = 'StackDisplayContainer'>
            <img src = '/icons/html.svg' width = {size}></img>
            <img src = '/icons/css.svg' width = {size} style = {{paddingLeft: padding}}></img>
            <img src = '/icons/js.svg' width = {size} style = {{paddingLeft: padding}}></img>
            <img src = '/icons/next.svg' width = {size} style = {{paddingLeft: padding}}></img>
            <img src = '/icons/node-js.svg' width = {size} style = {{paddingLeft: padding}}></img>
            <img src = '/icons/python.svg' width = {size} style = {{paddingLeft: padding}}></img>
            <img src = '/icons/react.svg' width = {size} style = {{paddingLeft: padding}}></img>
            <img src = '/icons/typescript.svg' width = {size} style = {{paddingLeft: padding}}></img>
        </div>
        
    )

}