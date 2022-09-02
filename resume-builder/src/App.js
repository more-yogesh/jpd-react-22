import { Link, BrowserRouter, Route, Routes } from "react-router-dom";
import { HomePage } from "./pages/home";


const App = () => {

    const AboutPage = () => {
        return (
            <div>
                This is about page
            </div>
        );
    }
    const ContactPage = () => {
        return (
            <div>
                This is Contact page
            </div>
        );
    }

    return (
        <BrowserRouter>
            <Link to="/">Home Page</Link>
            <Link to="/about">About Page</Link>
            <Link to="/contact">Contact Page</Link>
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/contact" element={<ContactPage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;