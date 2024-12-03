import imagelog from '../asset/log.gif'
import googleimg from '../asset/google.png'
import { Link } from 'react-router-dom';
function Register(){
    return(
        <>
        <section className="h-screen flex justify-between  place-items-center ">
            <div className="w-1/2">
                <img src={imagelog} alt="" className='mx-auto h-full'/>
            </div>
            <div className="w-1/2">
                <p className='text-navbar font-bold'>DISSHOP</p>
                <h1 className='text-navbar font-bold text-text_third'>Register Account</h1>
                <form action="" className='flex flex-col  mt-5'>
                    <div className='form-login w-[500px] bg-bg_solf rounded-md'>
                        <input type='text' placeholder='Username' className='w-[450px] mx-3 text-text_nav outline-none p-3 bg-bg_solf'/>
                    </div>
                    <div className='form-login w-[500px] bg-bg_solf rounded-md mt-5'>
                        <input type='text' placeholder='Email' className='w-[450px] mx-3 text-text_nav outline-none p-3 bg-bg_solf'/>
                    </div>
                    <div className='form-login w-[500px] bg-bg_solf rounded-md mt-5'>
                        <input type='text' placeholder='Password' className='w-[450px] mx-3 text-text_nav outline-none p-3 bg-bg_solf'/>
                    </div>
                    <div className='flex w-[500px] mt-10'>
                        <Link to="" className='text-center rounded-md w-1/2 px-3 py-2 font-medium bg-btn text-text_nav hover:bg-navbar hover:text-text_nav ease-in-out delay-200'>
                            <button type='button' >Register</button>
                        </Link>
                        <Link to="/Login" className='w-1/2 rounded-md border-2 font-medium border-btn text-navbar px-3 py-2 mx-2 text-center'>
                        <button type='button'>Login</button>
                        </Link>
                    </div>
                    <div className='flex w-[500px] bg-bg_solf text-navbar rounded-md justify-center items-center mt-5'>
                        <img src={googleimg} className="w-[54px]" alt="" />
                        <p className='ml-3 font-medium'>Login with google</p>
                    </div>
                </form>
            </div>
        </section>
        </>
    );
}
export default Register 