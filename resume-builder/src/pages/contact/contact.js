import { useContext } from "react";
import { AuthContex } from "../../contex/auth";


const ContactPage = () => {
    const { isLoggedIn } = useContext(AuthContex);
    return (
        <div>
            This is Contact page
            <h5>{isLoggedIn ? 'Logout' : 'Login' }</h5>
        </div>
    );
}

export default ContactPage;