import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../Provider/AuthProvider";


const Navbar = () => {
    const { user , logOut} = useContext(AuthContext)
    const handleLogOut = ()=>{
        logOut()
        .then(()=> console.log('User logged out succesfully'))
        .catch(error => console.log(error))
    }
    return (
        <div className="max-w-screen-2xl mx-auto">
            <div className="navbar bg-purple-400">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            <li className="pr-4 text-white">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            <li className="pr-4 text-white">
                                <NavLink
                                    to="/addproduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li className="pr-4 text-white">
                                <NavLink
                                    to="/mycart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>    
                            <li className="pr-4 text-white">
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                            
                        </ul>
                    </div>
                    <div className="flex gap-4">
                        <img className="w-10 h-10 rounded-lg" src="./logo.jpg" alt="" />
                        <p className="text-2xl font-bold">Electro</p>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                            <li className="pr-4 text-white">
                                <NavLink
                                    to="/"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    Home
                                </NavLink>
                            </li>
                            {
                                user && <>
                                    <li className="pr-4 text-white">
                                <NavLink
                                    to="/addproduct"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    Add Product
                                </NavLink>
                            </li>
                            <li className="pr-4 text-white">
                                <NavLink
                                    to="/mycart"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    My Cart
                                </NavLink>
                            </li>    
                                </>
                            }
                            <li className="pr-4 text-white">
                                <NavLink
                                    to="/login"
                                    className={({ isActive, isPending }) =>
                                        isPending ? "pending" : isActive ? "active" : "bg-sky-600"
                                    }
                                >
                                    Login
                                </NavLink>
                            </li>
                    </ul>
                    
                </div>
                <div className="navbar-end">
                    {
                        user ? <>
                            <span>{user.displayName} {user.photoUrl}</span>
                            <a onClick={handleLogOut} className="btn btn-sm">Sign out</a>
                        </>
                        : <Link to='/login'>
                            <button className="btn btn-sm">Login</button>
                        </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;