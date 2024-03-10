import React from "react";
import Carousel from "../Carosel/Carousel";

//ICONS
import { GrDatabase } from "react-icons/gr";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { GrGallery } from "react-icons/gr";
import { IoNotificationsOutline } from "react-icons/io5";
import { TbPigMoney } from "react-icons/tb";
import { BsWhatsapp } from "react-icons/bs";





export default function Home() {
	let slides = [
		"https://ideogram.ai/api/images/direct/sSO7hDD5QbeYvqfZpHgqLA.png",
		"https://images.pexels.com/photos/14605729/pexels-photo-14605729.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://ideogram.ai/api/images/direct/l99JPLlsRXWvjiQLCfikJw.png",
		"https://images.pexels.com/photos/1080882/pexels-photo-1080882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/1263426/pexels-photo-1263426.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/262524/pexels-photo-262524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		"https://images.pexels.com/photos/3763875/pexels-photo-3763875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
		

	  ];

	return (
		<div>

			<div className="  flex h-[80vh]    overflow-hidden m-auto ">
				<div className=" px-20 dark:bg-slate-900 dark:text-white ">
					<h1 className="text-6xl mt-32 bg-gradient-to-r from-blue-900 to-yellow-700 dark:from-blue-600 dark:to-yellow-300  bg-clip-text text-transparent">Connect with Sports Enthusiasts</h1>
					<p className="mt-5">Join the ultimate sports lover community app</p>
					<button type="button" className="mt-2 px-4 py-2 text-white rounded-full bg-gradient-to-r from-blue-600 to-black">Play Now</button>
				</div>
				<Carousel  slides={slides} />
				
			</div>
			<div className=" dark:bg-slate-900 dark:text-white h-[80vh]   flex flex-col items-center justify-start">

			<div className="dark:bg-slate-800 w-full bg-blue-100 flex flex-wrap gap-4  p-10 justify-center mt-4">


				<div className="flex items-center gap-2  dark:bg-slate-600 bg-slate-300 p-4  px-6 cursor-pointer rounded-md">
					<GrDatabase />
					Membership
				</div>

				<div className="flex items-center gap-2 dark:bg-slate-600  bg-slate-300 p-4  px-6 cursor-pointer  rounded-md">
					<HiOutlineLocationMarker />
					Centers
				</div>

				<div className="flex items-center gap-2 dark:bg-slate-600 bg-slate-300 p-4 px-6 cursor-pointer rounded-md">
					<GrGallery />
					Gallery
				</div>

				<div className="flex items-center gap-2 dark:bg-slate-600 bg-slate-300 p-4  px-6 cursor-pointer rounded-md">
					<IoNotificationsOutline />
					Notification
				</div>

				<div className="flex items-center gap-2 dark:bg-slate-600 bg-slate-300 p-4  px-6 cursor-pointer rounded-md">
					<TbPigMoney />
					Refer & Earn
				</div>
				<div className="flex items-center gap-2 dark:bg-slate-600 bg-slate-300 p-4  px-6 cursor-pointer rounded-md">
					<BsWhatsapp />
					Help and Support
				</div>
				

				

				


				
			</div>
			</div>

		</div>
	);
}
