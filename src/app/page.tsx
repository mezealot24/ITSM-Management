"use client";
import { useState } from "react";

export default function Home() {
	const [isVisible, setIsVisible] = useState(true);

	const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
		e.preventDefault(); // Prevent default anchor behavior
		setIsVisible(false);

		// Delay navigation until after fade-out animation
		setTimeout(() => {
			window.location.href = "/login"; // Navigate to login page
		}, 500); // Match this duration with your fade-out duration
	};

	return (
		<div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 bg-cream">
			<main
				className={`flex flex-col gap-8 row-start-2 items-center transition-opacity duration-500 ${
					isVisible ? "fade-in" : "fade-out"
				}`}
			>
				<h1 className="text-3xl font-bold text-green-800">NYC ITSM</h1>
				<a
					href="/login"
					onClick={handleClick} // Handle click to trigger fade-out
					className="mt-4 px-4 py-2 bg-green text-white rounded hover:bg-green-600"
				>
					Enter Site
				</a>
			</main>
			<footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
				<p className="text-sm text-gray-500">
					© 2024 NYC ITSM. All rights reserved.
				</p>
			</footer>
		</div>
	);
}
