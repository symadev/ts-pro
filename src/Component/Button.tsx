

interface ButtonProps {
    label: string;
    onClick?: () => void;
}
//   {/* here need to be assign both file the label and onClick with the props */}

 const Button:React.FC<ButtonProps> = (props) =>{
    return (
        <button onClick={props.onClick} className="button">
            {props.label}
        </button>
       
    );
 }
 export default Button;