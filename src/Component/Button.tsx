

interface ButtonProps {
    label: string;
}

 const Button:React.FC<ButtonProps> = () =>{
    return (
        <button className="btn btn-primary">
        Click Me
        </button>
    );
 }
 export default Button;