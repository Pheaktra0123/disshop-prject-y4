import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShop } from "@fortawesome/free-solid-svg-icons";
function Home(){
    return (
        
        <>
            <Navbar/>
               <main>
                  <section>
                  <div className="relative top-28 flex md:flex">
                        <div className="md:w-1/3">
                            <div>
                                <h1 className="text-text_third md:text-text_prim text-navbar text-center md:text-start text-wrap font-bold md:px-28 md:leading-prim-text w-max">WELCOME <p className="animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5">DISSHOP</p></h1>
                                <p className="text-center md:text-start text-navbar md:px-28  md:text-[18px]">Find out the products has low price</p>
                                <div className="bg-btn p-3 mx-10  md:mx-28 md:p-4 rounded-md text-text_nav text-[18px] font-bold text-center mt-5 md:mt-10" >
                                   <FontAwesomeIcon icon={faShop}/>
                                   <button className="ml-3">Let's Shoping</button>
                                </div>
                            </div>
                        </div>
                        <div class="bg-gray-100 hidden md:block ml-36 mr-28">
                            <div class="container mx-auto px-4 py-8">
                                <div class="grid grid-cols-1 md:grid-cols-4 gap-4">
                                    
                                    <div class="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
                                        <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxuYXR1cmV8ZW58MHwwfHx8MTcyMTA0MjYwMXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Nature" class="w-full h-full object-cover"/>
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div class="absolute bottom-0 left-0 right-0 p-4">
                                                <h3 class="text-2xl font-bold text-text_nav">Explore Nature</h3>
                                                <p class="text-text_nav">Discover the beauty of the natural world</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                                        <img src="https://images.unsplash.com/photo-1493770348161-369560ae357d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw2fHxmb29kfGVufDB8MHx8fDE3MjEwNDI2MTR8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Food" class="w-full h-48 object-cover"/>
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div class="absolute bottom-0 left-0 right-0 p-4">
                                                <h4 class="text-xl font-bold text-text_nav">Culinary Delights</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                                        <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0ZWNobm9sb2d5fGVufDB8MHx8fDE3MjEwNDI2Mjh8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="Technology" class="w-full h-48 object-cover"/>
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div class="absolute bottom-0 left-0 right-0 p-4">
                                                <h4 class="text-xl font-bold text-text_nav">Tech Innovations</h4>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                                        <img src="https://images.unsplash.com/photo-1503220317375-aaad61436b1b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHw1fHx0cmF2ZWx8ZW58MHwwfHx8MTcyMTA0MjY0MXww&ixlib=rb-4.0.3&q=80&w=1080" alt="Travel" class="w-full h-48 object-cover"/>
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div class="absolute bottom-0 left-0 right-0 p-4">
                                                <h4 class="text-xl font-bold text-text_nav">Travel Adventures</h4>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="relative overflow-hidden rounded-2xl shadow-lg group">
                                        <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NzEyNjZ8MHwxfHNlYXJjaHwxfHxhcnR8ZW58MHwwfHx8MTcyMTA0MjY5Nnww&ixlib=rb-4.0.3&q=80&w=1080" alt="Art" class="w-full h-48 object-cover"/>
                                        <div
                                            class="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div class="absolute bottom-0 left-0 right-0 p-4">
                                                <h4 class="text-xl font-bold text-text_nav">Artistic Expressions</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                   </div>
                  </section>
                  <section>
                    
                  </section>
               </main>
            <Footer/> 
        </>
    );
}
export default Home