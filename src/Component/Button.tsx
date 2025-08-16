import { useState } from "react";


interface ButtonProps {
    label: string | number | boolean
    onClick?: () => void;
    something?: boolean;
}



interface Books {
    name: string;
    price: number;

}

//   {/* here need to be assign both file the label and onClick with the props */}
// this is how ew make the component reusable
const Button: React.FC<ButtonProps> = (props) => {
    const { label, onClick } = props;

    //using the hook now
    // const [value, setValue] = useState(1) //---> this process in in implicit process
    const [value, setValue] = useState<number>(1); //----> this is explicit process






    const [books, setBooks] = useState<Books>({ name: "one", price: 10 }); //----> this is explicit process
    const [from, setFrom] = useState<string | undefined>()
   
    //must putted here the default value 
    //the initial value is 1 here    






    //this is for the frominput 
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFrom(e.target.value);
    }



    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    }



    return (
        <div>

            <h3>name {books.name} (RS{books.price})</h3>
            <button onClick={() => setBooks({ name: "Two", price: 20 })} className="button">Update</button>

            <h3>{value}</h3>
            <button onClick={() => setValue(value + 1)} className="button">
                {label}
            </button>
            <h1>{from}</h1>
            <input onChange={handleChange} type="text" value={from} placeholder="enter your name" />
            <h1>{from}</h1>
            <form onSubmit={handleSubmit}>
                {/* //onSubmit only work for the from */}
                
                <button type="submit">Submit</button>
            </form>


        </div>

    );
}
export default Button;