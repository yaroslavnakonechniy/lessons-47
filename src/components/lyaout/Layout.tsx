import { Outlet, Link } from "react-router-dom"
import { useAuth } from "../../auth/AuthContext"

export const Layout = () => {
    const {isAuth, logout} = useAuth();


    return(
        <>
            <header>
                {
                    isAuth ? <button onClick={logout}>Loguot</button> : <Link to="/login">Login In</Link>
                }
            </header>

            <main>
                <Outlet />
            </main>

            <footer>Footer</footer>
        
        </>
    )
}