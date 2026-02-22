import { useNavigate } from "react-router-dom";
import { useAuth } from "../../auth/AuthContext";

export const LoginPage = () => {
    const {login} = useAuth();
    const navigate = useNavigate();

    const handleOnClick = () => {
        login();
        navigate("/");
    }

    return(
        <>
            <button onClick={handleOnClick}>click for login</button>
            <form>
                <label htmlFor="name">Name:</label>
                <input type="text" name="name" placeholder="Input name"/> 
                <br />
                <label htmlFor="Lastname">LastName:</label>
                <input type="text" name="Lastname" placeholder="Input Lastname"/> 
                <br />
                <button type="submit">Submit</button>
            </form>
        </>
    )
}