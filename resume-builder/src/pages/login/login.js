import { useContext } from "react";
import { AuthContex } from "../../contex/auth";

const Login = () => {
    const { isLoggedIn, setIsLoggedIn } = useContext(AuthContex);

    const Login = () => <button onClick={() => setIsLoggedIn(true)}>
        Click To Login
    </button>

    const Logout = () => <button onClick={() => setIsLoggedIn(false)}>
        Logout
    </button>

    return (
        <>
            {
                isLoggedIn ? <Logout /> : <Login />
            }
        </>
    );
}

export default Login;