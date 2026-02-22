import { Link, Outlet } from "react-router-dom"

export const OpenForms = () => {
    return(
        <>
            <hr />
                <Link to="/">came back</Link>
                <br />
                <Link to="/formik">Open RegistrationForm</Link>
                <br />
                <Link to="/hookForm">Open RegistrationFormOnHookForm</Link>
                <Outlet/>
                
            <hr />
        </>
    )
}