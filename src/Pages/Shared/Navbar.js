import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {

    return (
        <nav className="w-full flex flex-wrap items-center justify-between py-3 bg-gray-900 text-gray-200 shadow-lg navbar navbar-expand-lg navbar-light sticky top-0 z-10">
            <div className="container-fluid w-full flex flex-wrap items-center justify-between px-6">
                <button className="navbar-toggler text-gray-500 border-0 hover:shadow-none hover:no-underline py-2 px-2.5 bg-transparent focus:outline-none focus:ring-0 focus:shadow-none focus:no-underline" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars"
                        className="w-6" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path fill="currentColor"
                            d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z">
                        </path>
                    </svg>
                </button>
                <div className="collapse navbar-collapse flex-grow items-center" id="navbarSupportedContent">
                    <a className=" flex items-center text-3xl font-extrabold text-sky-200 hover:text-sky-500 focus:text-sky-500 mt-2 lg:mt-0 mr-1" href="/">
                        AC||DC
                    </a>
                    {/* <!-- Left links --> */}
                    <ul className="navbar-nav flex flex-col pl-5 list-style-none mr-auto">
                        <li className="nav-item p-2">
                            <Link className="nav-link text-white" to="/home">Home</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-white" to="/all-products">All Products</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-white" to="/blogs">Blogs</Link>
                        </li>
                        <li className="nav-item p-2">
                            <Link className="nav-link text-white" to="/my-portfolio">My Portfolio</Link>
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}

                {/* <!-- Right elements --> */}
                <div className="flex items-center relative">
                    {/* <!-- Icon --> */}
                    <Link className="nav-link text-white p-2" to="/dashboard">Dashboard</Link>
                    <Link className="nav-link text-white p-2" to="/login">Log In</Link>
                    <Link className="nav-link text-white p-2" to="/login">Log Out</Link>
                </div>
                {/* <!-- Right elements --> */}
            </div>
        </nav>
    );
};

export default Navbar;