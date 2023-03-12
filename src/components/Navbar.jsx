import React from "react"
import {
	AiOutlineMenu,
	AiOutlinePhone,
	AiFillFacebook,
	AiFillInstagram,
} from "react-icons/ai"
import {FcGoogle} from "react-icons/fc"
import {FaSnapchatGhost} from "react-icons/fa"
import YourLogoHere from "../assets/YourLogoHere.png"

const Navbar = () => {
	return (
		<div className="mx-auto flex min-h-screen">
			{/* Left Side */}
			<div>
				<nav className="border-r-4 border-black h-full">
					<h1 className="sm:text-3xl lg:text-4xl flex mx-5 font-bold italic">
						GlassTek
					</h1>

					<ul className="flex flex-col p-6 text-gray-750">
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>Auto Glass Replacement</h1>
						</li>
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>Auto Glass Repair</h1>
						</li>
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>AG & Industrial Equipment</h1>
						</li>
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>Semi / Tractor Trailers</h1>
						</li>
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>Sensor Calibration</h1>
						</li>
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>Sunroofs</h1>
						</li>
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>RV/Campers</h1>
						</li>
						<li className="text-xl py-4 flex cursor-pointer hover:underline">
							<h1>Locomotive Equipment</h1>
						</li>
					</ul>
					<div className="flex px-2">
						<AiFillFacebook className="text-blue-800" size={35} />
						<div className="text-8xl font-extrabold">
							<AiFillInstagram size={35} />
						</div>
                        <div><FcGoogle size={35} /> </div>
                        <div><FaSnapchatGhost size={35} className="text-[#fffc00]" /></div>
					</div>
				</nav>
			</div>
			<div className="grid sm:grid-cols-[100px_minmax(900px,_1fr)_100px] md:grid-cols-[200px_minmax(900px,_1fr)_200px] lg:grid-cols-[520px_minmax(900px,_1fr)_520px] justify-items-center mx-8">
				<h2 className="text-center font-bold text-2xl cursor-pointer hover:underline">
					Get a Quote
				</h2>

				<img className="w-[300px] h-[150px]" src={YourLogoHere} alt="/" />

				<div className="flex font-bold"> <AiOutlinePhone size={30} />  605-555-5555</div>
			</div>
		</div>
	)
}

export default Navbar
