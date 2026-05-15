import { useDispatch } from "react-redux";
import authService from "../../appwrite/auth";
import { logout } from "../../store/authSlice";

function Logout() {
    const dispatch = useDispatch()

    const logoutHandler = () => {
        authService.logout().then(() => {
            dispatch(logout())
        })
    }

    return (
        <button
            onClick={logoutHandler}
            className="px-4 py-2 rounded-lg text-sm font-medium text-red-400 hover:text-white hover:bg-red-500/20 border border-red-500/30 hover:border-red-500/60 transition-all duration-200"
        >
            Logout
        </button>
    )
}

export default Logout
