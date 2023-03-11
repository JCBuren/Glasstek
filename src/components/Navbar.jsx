import React, { useState } from "react"
import { AiOutlineMenu, AiOutlinePhone } from "react-icons/ai"
import { BsArrowBarLeft } from "react-icons/bs"
import YourLogoHere from "../assets/YourLogoHere.png"

const Navbar = () => {
	const [toggleNav, setToggleNav] = useState(true)
	return (
		<div className="max-w-[1640px] mx-auto flex justify-between">
			{/* Left Side */}
			<div className="flex items-center m-2">
				<div
					onClick={() => setToggleNav(!toggleNav)}
					className="cursor-pointer"
				>
					<AiOutlineMenu size={35} />
				</div>
				<h1 className="text-2xl sm:text-3xl lg:text-4xl flex">
					Glass<span className="font-bold italic">Tek</span>
				</h1>
			</div>

			<img className="w-[300px] h-[150px]" src={YourLogoHere} alt="/" />
			<div className="flex font-bold">
				<AiOutlinePhone size={30} /> 605-555-5555{" "}
			</div>

			{toggleNav ? (
				<div className="fixed w-full h-screen z-10 top-0 left-0"></div>
			) : (
				""
			)}

			<div
				className={
					toggleNav
						? "fixed top-0 left-0 w-[300px] h-screen bg-white z-10 duration-400 border-r-black border-r-8"
						: "fixed top-0 left-[100%] w-[300px] h-screen bg-white duration-400"
				}
			>
				<BsArrowBarLeft
					onClick={() => setToggleNav(!toggleNav)}
					size={35}
					className="absolute right-4 top-4 cursor-pointer"
				/>
				<h2 className="text-4xl p-4">
					Glass<span className="font-bold italic">Tek</span>
				</h2>
				<nav>
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
				</nav>
			</div>
		</div>
	)
}

export default Navbar
