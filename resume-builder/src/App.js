import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";
import ContactPage from './pages/contact/contact';
import AboutPage from "./pages/about/about";
import Login from "./pages/login/login";
import { AuthContex } from "./contex/auth";
import { useState } from "react";
import { Blog } from "./pages/blog";


const App = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return (
        <>
            <AuthContex.Provider value={{ isLoggedIn, setIsLoggedIn }}>
                <BrowserRouter>
                    <ul>
                        <li><Link to="/">Home Page</Link></li>
                        <li><Link to="/about">About Page</Link></li>
                        <li><Link to="/contact">Contact Page</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/blog">Blog</Link></li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                        <Route path="/contact" element={<ContactPage />} />
                        <Route path="/about" element={<AboutPage />} />
                        <Route path="/blog" element={<Blog />} />
                    </Routes>
                </BrowserRouter>
                <h4>{isLoggedIn ? 'Login' : 'Logout'}</h4>
            </AuthContex.Provider>
        </>
    );
}

export default App;