import { useState } from "react";
import Link from "next/link";
function Footer() {
    const [navbar, setNavbar] = useState(false);
    return (
        <section className="bg-[#242626]">

        <div className="text-white h-[500px] bg-[#242626] p-24 justify-evenly text-center flex">

            <div>

        <img src="/images/logosan.png" className="absolute right-0  -z-0 opacity-5 pb-10"/>
            </div>
            <div className=" bordr-2 flex flex-col z-20  items-center  justify-center font-light w-[25%] -2">
                <img src="/images/logo2.png" />
                <p className="text-left py-2 text-[#F4F4F4]">Ut wisi enim ad minim veniam, quis laore nostrud exerci tation ulm hedi corper turet suscipit lobortis augue duis dolore te feugait nulla facilisi mazim placerath</p>
            </div>
            <div className="w-[20%] flex flex-col z-10 items-center justify-center">
                <h1 className="text-[#41B6E6] font-semibold text-xl pl-2 pb-3">Quick Links</h1>
                <ul className="text-sm">
                    <li className=" text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="#home" onClick={() => setNavbar(!navbar)}>
                            Home
                        </Link>
                    </li>
                    <li className=" text-lg text-white py-2 md:px-6 text-center border-b-2 md:border-b-0  hover:bg-purple-900  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="#about" onClick={() => setNavbar(!navbar)}>
                            About Us
                        </Link>
                    </li>
                    <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="#blog" onClick={() => setNavbar(!navbar)}>
                            Why Choose Us
                        </Link>
                    </li>
                    <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                            Powerful Features
                        </Link>
                    </li>
                    <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">
                        <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                            Our Team
                        </Link>
                    </li>
                </ul>
            </div>
            <div className="w-[20%] flex z-10 flex-col item-center justify-center">
                <h1 className="text-[#41B6E6] font-semibold text-xl pl-2 pb-3">
                    Our Services
                </h1>
                    <ul>
                        <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">Service 1</li>
                        <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">Service 2</li>
                        <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">Service 3</li>
                        <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">Service 4</li>
                        <li className=" text-lg text-white py-2 px-6 text-center  border-b-2 md:border-b-0  hover:bg-purple-600  border-purple-900  md:hover:text-purple-600 md:hover:bg-transparent">Service 4</li>
                    </ul>
            </div>
            <div className="w-[25%] z-10 -2">
            <h1 className="pt-4 text-[#41B6E6] font-semibold text-xl pl-2 pb-3">
                    Our Socials
                </h1>
                <div className="flex -2 items-center justify-center ">
                    <img src="/images/fb22.png" className="m-2 w-[40px]"/>
                    <img src="/images/li.png"   className="m-2 w-[40px]"/>
                    <img src="/images/git.png"  className="m-2 w-[40px]"/>
                </div>
                <div>
                <h1 className="text-[#41B6E6] pt-10 font-semibold text-xl pl-2 pb-3">
                    Contact Us
                </h1>
                <p>Email</p>
                <p>Phone</p>
                </div>
            </div>
       
        </div>
            <h1 className="flex items-center p-2 justify-center border-t-[0.5px] text-gray-200">Privacy&Policy</h1>
        </section>
    );
}
export default Footer;