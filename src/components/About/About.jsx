

import React from "react";

export default function About() {
    return (
        <div className="py-16 bg-white dark:bg-slate-900 dark:text-slate-300">
            <div className="container m-auto px-6 text-gray-600 dark:text-slate-300 md:px-12 xl:px-6">
                <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                    <div className="md:5/12 lg:w-5/12 ">
                        <img
                            src="https://img.freepik.com/free-photo/sports-abstract-collage_23-2151203866.jpg?w=740&t=st=1710069202~exp=1710069802~hmac=de7c28e493b800203cb8de04c93049975a8f3d43e8e6e64fe778a062d7f097c4"
                            alt="image"
                        />
                    </div>
                    <div className="md:7/12 lg:w-6/12">
                        <h2 className="text-2xl text-gray-900 dark:text-white font-bold md:text-4xl">
                        'Unite, Play, Thrive: Connecting Sports Enthusiasts in the Heart of Your Community.'
                        </h2>
                        <p className="mt-6 text-gray-600 dark:text-slate-300">
                        Whether you're a seasoned athlete or a casual player, <span className="text-blue-600 ">Sportify</span> invites you to join our dynamic community. Together, let's redefine the way we play, connect, and thrive. It's time to lace up, grab your gear, and embark on a journey of sportsmanship and shared excitement. Welcome to the heart of sports camaraderie – welcome to Sportify.
                        </p>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}