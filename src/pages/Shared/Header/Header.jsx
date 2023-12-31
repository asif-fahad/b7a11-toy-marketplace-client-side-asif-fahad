import React, { useContext } from 'react';
import logo from '../../../../public/logo.png'
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProviders';

const Header = () => {

    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }



    return (
        <div>
            <div className="navbar bg-base-100">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Home</NavLink>

                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Blog</NavLink>

                            <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>All Toys</NavLink>

                            {user ? <>
                                <NavLink to='/myToys' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>My Toys</NavLink>


                                <NavLink to='/addAToy' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Add A Toy</NavLink>

                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div aria-label={user.displayName} title={user.displayName} className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>

                                <button onClick={handleLogOut} className='btn btn-success btn-sm'>Logout</button>
                            </> : <>
                                <Link to='/login'><button className='btn btn-info btn-sm'>Login</button></Link>
                            </>}
                        </ul>
                    </div>
                    <Link to='/' className="flex items-center">
                        <img src={logo} className="h-8 mr-3" alt="Fahad's Toys" />
                        <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fahad's Toys</span>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 space-x-10 flex items-center">
                        <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Home</NavLink>

                        <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Blog</NavLink>

                        <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>All Toys</NavLink>

                        {user ? <>
                            <NavLink to='/myToys' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>My Toys</NavLink>


                            <NavLink to='/addAToy' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Add A Toy</NavLink>

                            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                <div aria-label={user.displayName} title={user.displayName} className="w-10 rounded-full">
                                    <img src={user.photoURL} />
                                </div>
                            </label>

                            <button onClick={handleLogOut} className='btn btn-success btn-sm'>Logout</button>
                        </> : <>
                            <Link to='/login'><button className='btn btn-info btn-sm'>Login</button></Link>
                        </>}
                    </ul>
                </div>
            </div>


            <div>
                {/* <div>
                <div className="navbar bg-base-100">
                    <div className="flex-1">
                        <Link to='/' className="flex items-center">
                            <img src={logo} className="h-8 mr-3" alt="Fahad's Toys" />
                            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Fahad's Toys</span>
                        </Link>
                    </div>
                    <div className="flex-none gap-2">
                        <div className='space-x-3'>
                            <NavLink to='/' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Home</NavLink>

                            <NavLink to='/blog' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Blog</NavLink>

                            <NavLink to='/allToys' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>All Toys</NavLink>

                            {user ? <>
                                <NavLink to='/myToys' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>My Toys</NavLink>


                                <NavLink to='/addAToy' className={({ isActive }) => (isActive ? 'font-medium tracking-wide text-cyan-600 transition-colors duration-200' : 'font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-cyan-600')}>Add A Toy</NavLink>

                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div aria-label={user.displayName} title={user.displayName} className="w-10 rounded-full">
                                        <img src={user.photoURL} />
                                    </div>
                                </label>

                                <button onClick={handleLogOut} className='btn btn-success btn-sm'>Logout</button>
                            </> : <>
                                <Link to='/login'><button className='btn btn-info btn-sm'>Login</button></Link>
                            </>}
                        </div>
                    </div>
                </div>
            </div> */}
            </div>
        </div>
    );
};

export default Header;