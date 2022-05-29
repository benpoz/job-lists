import React from "react";

const Navbar = () => {
    return ( 
        <nav className="font-sans flex flex-col text-center content-center sm:flex-row sm:text-left sm:justify-between py-2 px-6 bg-white shadow sm:items-baseline w-full">
            <div className="mb-2 sm:mb-0 flex flex-row">
                <div className="h-10 w-10 self-center mr-2">
                    <img alt="logo" className="h-10 w-10 self-center" src="https://csscomps.com/images/csscomps.png" />
                </div>
                <div>
                    <a href="/home" className="text-2xl no-underline text-grey-darkest hover:text-blue-dark font-sans font-bold">Jobssss</a><br/>
                    <span className="text-xs text-blue-dark">Get Your Jobs Here</span>
                </div>
            </div>
            <div className="sm:mb-0 self-center">
                <a href="contact" className="text-md no-underline text-black hover:text-blue ml-2 px-1">Contact Us</a>
                <a href="companies" className="text-md no-underline text-grey-darker hover:text-blue ml-2 px-1">Companies</a>
            </div>
        </nav>
    )
}

export default Navbar;