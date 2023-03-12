import './Navbar.css'

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
            <h1>The College Pros</h1>
            <ul className="links">
                <li><a href="/">Home</a></li>
                <li><a href="/plans">Pick a Plan</a></li>
                <li><a href="/register">Register</a></li>
                <li><a href="/register">Login</a></li>
            </ul>
            </div>
        </nav>
    );
}

export default Navbar;