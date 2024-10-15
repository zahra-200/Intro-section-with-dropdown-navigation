import { useState } from "react";
import "./NavbarStyle.css";
import Logo from "../../images/logo.svg"
import { FaBars, FaTimes } from "react-icons/fa";


function Navbar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (

        <div>
            <nav className="w-full flex justify-between h-24">
                <div className="flex">
                    <div className="flex justify-center items-center px-5">
                        <img src={Logo} className="" />
                    </div>
                    <div className="hidden md:flex md:justify-center md:items-center md:gap-8 md:px-6" >
                        <a className="p-2 border rounded-md" href="">Features</a>
                        <a className="p-2 border rounded-md" href="">Compony</a>
                        <a className="p-2 border rounded-md" href="">Carears</a>
                        <a className="p-2 border rounded-md" href="">About</a>
                    </div>
                </div>

                <div className="flex justify-center items-center px-5">
                    <button className="md:hidden" onClick={toggleMenu}>
                        {isMenuOpen ? <FaTimes /> : <FaBars />}
                    </button>

                    <div className="hidden md:flex md:gap-6">
                        <a className="p-2 border rounded-md" href="">Sign in</a>
                        <a className="p-2 border rounded-md" href="">Login</a>
                    </div>
                </div>


            </nav>
            <div className={`side-menu ${isMenuOpen ? 'open' : ''}`}>
                <ul className="md:hidden p-4 text-center">
                    <li className="my-5 cursor-pointer border rounded-lg py-2 bg-white">Features</li>
                    <li className="my-5 cursor-pointer border rounded-lg py-2 bg-white">Compony</li>
                    <li className="my-5 cursor-pointer border rounded-lg py-2 bg-white">Carears</li>
                    <li className="my-5 cursor-pointer border rounded-lg py-2 bg-white">About</li>
                    <li className="my-5 cursor-pointer border rounded-lg py-2 bg-yellow-400">Sign in</li>
                    <li className="my-5 cursor-pointer border rounded-lg py-2 bg-green-500">Login</li>
                </ul>
            </div>
        </div>





    )
}


export default Navbar