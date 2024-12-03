import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart,faBars,faUser,faXmark} from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Login from '../Pages/Login';
import { Link } from 'react-router-dom';
import Register from '../Pages/Register';
function Navbar(){
    const [open ,setOpen]=useState(false);
        const toggleMenu =()=>{
            setOpen(prevState=> !prevState)
        }
    return (
        <>
        <header
            className="fixed inset-x-0 top-3 z-30 mx-auto text-sm w-full max-w-screen  bg-navbar py-3  md:top-6 md:text-lg lg:text-xl rounded-xl lg:max-w-screen-xl md:max-w-screen-md">
            <div class="px-10 lg:px-16 md:px-13">
                <div className="flex items-center justify-between">
                    <div className="flex shrink-0">
                        <a aria-current="page" class="flex items-center" href="/">
                            <p class=" text-text_nav font-bold text-xl">DISSHOP</p>
                        </a>
                    </div>
                    <div className="toggle hidden md:flex md:items-center md:justify-center md:gap-5 text-text_nav">
                        <a aria-current="page"
                            className="block md:inline-block rounded-lg px-2 py-1 text-sm md:text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">Home</a>
                        <a className="block md:inline-block rounded-lg px-2 py-1 text-sm md:text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">Shop</a>
                        <a className="block md:inline-block rounded-lg px-2 py-1 text-sm md:text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">Products</a>
                        <a className="block md:inline-block rounded-lg px-2 py-1 text-sm md:text-lg font-medium text-gray-900 transition-all duration-200 hover:bg-gray-100 hover:text-gray-900"
                            href="#">About Us</a>
                    </div>
                    <div className="flex items-center justify-end gap-3">
                        <div>
                        <a className="inline-flex text-text_nav items-center justify-center rounded-xl bg-btn w-10 h-10 md:w-12 md:h-12  text-lg md:text-xl font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                            href="/login">
                                <FontAwesomeIcon icon={faShoppingCart} />
                            </a>
                        </div>
                        <div>
                        <Link  to={"/Login"} className="inline-flex text-text_nav items-center justify-center bg-btn w-10 h-10 md:w-12 md:h-12 rounded-xl text-lg md:text-xl font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                           >
                                <FontAwesomeIcon icon={faUser}/>
                            </Link>
                        </div>
                        <div id='humburger' onClick={toggleMenu} className='block md:hidden'>
                            {open?(
                                <div className='toggle text-text_nav inline-flex items-center content-center justify-center rounded-xl w-10 h-10 bg-btn md:w-12 md:h-12 text-lg md:text-2xl font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                                    <FontAwesomeIcon icon={faXmark}/>
                                 </div>
                            ):(
                                <div className='toggle  text-text_nav inline-flex items-center content-center justify-center rounded-xl bg-btn w-10 h-10 md:w-12 md:h-12  text-lg md:text-2xl font-semibold text-white shadow-sm transition-all duration-150 hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600'>
                                    <FontAwesomeIcon icon={faBars} className=''/>
                               </div>
                            )}
                    
                        </div>
                    </div>
                </div>
            </div>
            <div className={`toggle ${open?'block':'hidden'} md:hidden block md:items-center md:justify-center md:gap-5 text-text_nav  border-t-2 mt-4 `}>
                        <a aria-current="page"
                            className="block   px-5 py-4 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-btn hover:text-gray-900"
                            href="#">Home</a>
                        <a className="block  px-5 py-4 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-btn hover:text-gray-900"
                            href="#">Shop</a>
                        <a className="block  px-5 py-4 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-btn hover:text-gray-900"
                            href="#">Products</a>
                        <a className="block  px-5 py-4 text-md font-medium text-gray-900 transition-all duration-200 hover:bg-btn hover:text-gray-900"
                            href="#">AboutUs</a>
                    </div>
        </header>
        </>
    );
}
export default Navbar