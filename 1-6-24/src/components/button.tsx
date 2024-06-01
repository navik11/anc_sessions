import "./button.css"

interface BtnProps {
    text: string, 
    func: () => void
};

function Button({text, func}: BtnProps) {
    return <button className="btn" onClick={func}>{text}</button>;
}

export default Button;