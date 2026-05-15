import { Container, Logo, Logout } from '../index'
import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

function Header() {
    const authStatus = useSelector((state) => state.auth.status)
    const navigate = useNavigate()
    const location = useLocation()

    const navItems = [
        { name: 'Home', slug: "/", active: true },
        { name: "Login", slug: "/login", active: !authStatus },
        { name: "Sign Up", slug: "/signup", active: !authStatus },
        { name: "All Posts", slug: "/all-posts", active: authStatus },
        { name: "Add Post", slug: "/add-post", active: authStatus },
    ]

    return (
        <header className="sticky top-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-700/50">
            <Container>
                <nav className="flex items-center h-16">
                    <Link to='/' className="mr-8 flex items-center gap-2">
                        <Logo width="36px" />
                        <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                            MegaBlog
                        </span>
                    </Link>
                    <ul className="flex items-center ml-auto gap-1">
                        {navItems.map((item) =>
                            item.active ? (
                                <li key={item.name}>
                                    <button
                                        onClick={() => navigate(item.slug)}
                                        className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200
                                            ${location.pathname === item.slug
                                                ? 'bg-indigo-600 text-white'
                                                : 'text-slate-300 hover:text-white hover:bg-slate-700/60'
                                            }`}
                                    >
                                        {item.name}
                                    </button>
                                </li>
                            ) : null
                        )}
                        {authStatus && (
                            <li className="ml-2">
                                <Logout />
                            </li>
                        )}
                    </ul>
                </nav>
            </Container>
        </header>
    )
}

export default Header
