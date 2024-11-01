import { faFacebook,faTiktok,faGithub,faInstagram} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon} from "@fortawesome/react-fontawesome";

function Footer(){
    return(
        <>
            <div class="bg-navbar text-text_nav mt-96">
                    <div class="max-w-screen-lg px-4 sm:px-6 text-gray-800 sm:grid md:grid-cols-4 sm:grid-cols-2 mx-auto">
                        <div class="p-5">
                            <h3 class="font-bold text-xl text-indigo-600">DISSHOP</h3>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                            </p>
                        </div>
                        <div class="p-5">
                            <div class="text-sm uppercase text-indigo-600 font-bold">Resources</div>
                            <a class="my-3 block" href="/#">Documentation <span class="text-teal-600 text-xs p-1"></span></a><a
                                class="my-3 block" href="/#">Tutorials <span class="text-teal-600 text-xs p-1"></span></a><a
                                class="my-3 block" href="/#">Support <span class="text-teal-600 text-xs p-1">New</span></a>
                        </div>
                        <div class="p-5">
                            <div class="text-sm uppercase text-indigo-600 font-bold">Support</div>
                            <a class="my-3 block" href="/#">Help Center <span class="text-teal-600 text-xs p-1"></span></a><a
                                class="my-3 block" href="/#">Privacy Policy <span class="text-teal-600 text-xs p-1"></span></a><a
                                class="my-3 block" href="/#">Conditions <span class="text-teal-600 text-xs p-1"></span></a>
                        </div>
                        <div class="p-5">
                            <div class="text-sm uppercase text-indigo-600 font-bold">Contact us</div>
                            <a class="my-3 block" href="/#">XXX XXXX, Floor 4 San Francisco, CA
                                <span class="text-teal-600 text-xs p-1"></span></a><a class="my-3 block" href="/#">contact@company.com
                                <span class="text-teal-600 text-xs p-1"></span></a>
                        </div>
                    </div>
                </div>

                <div class="bg-gray-100 pt-2">
                    <div class="flex pb-5 px-3 m-auto pt-5 border-t text-gray-800 text-sm flex-col
                    max-w-screen-lg items-center">
                        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <a href="/#" class="w-6 mx-1 fill-current cursor-pointer text-gray-500 hover:text-indigo-600">
                                <FontAwesomeIcon icon={faFacebook} />
                            </a>
                            <a href="/#" class="w-6 mx-1">
                                <FontAwesomeIcon icon={faInstagram}/>
                            </a>
                            <a href="/#" class="w-6 mx-1">
                                <FontAwesomeIcon icon={faGithub}/>
                            </a>
                            <a href="/#" class="w-6 mx-1">
                                <FontAwesomeIcon icon={faTiktok}/>
                            </a>
                        </div>
                        <div class="my-5">© Copyright 2020. All Rights Reserved.</div>
                    </div>
            </div>
        </>
    );
}
export default Footer