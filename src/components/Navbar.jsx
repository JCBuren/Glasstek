import React, { useState } from "react"
import {
	AiOutlineMenu,
	AiOutlinePhone,
	AiFillFacebook,
	AiFillInstagram,
} from "react-icons/ai"
import YourLogoHere from "../assets/YourLogoHere.png"

const Navbar = () => {
	return (
		<div className="max-w-full mx-auto flex justify-between">
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
						<div className="text-8xl font-extrabold  bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
							<AiFillInstagram size={35} />
						</div>
					</div>
				</nav>
			</div>

			<div className="font-bold text-2xl">Get a Quote</div>

			{/* Logo */}

			<img className="w-[300px] h-[150px]" src={YourLogoHere} alt="/" />

			{/* Phone */}

			<div className="flex font-bold">
				<AiOutlinePhone size={30} /> 605-555-5555{" "}
			</div>
		</div>
	)
}

export default Navbar
