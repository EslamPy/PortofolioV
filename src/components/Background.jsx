import React, { useEffect, useRef, useState } from "react";

const AnimatedBackground = () => {
	const blobRefs = useRef([]);
	const starsRef = useRef(null);
	const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
	
	useEffect(() => {
		// Create stars
		if (starsRef.current) {
			const starCount = window.innerWidth < 768 ? 50 : 100;
			for (let i = 0; i < starCount; i++) {
				const star = document.createElement('div');
				star.classList.add('star');
				
				// Random position
				star.style.top = `${Math.random() * 100}%`;
				star.style.left = `${Math.random() * 100}%`;
				
				// Random size
				const size = Math.random() * 2;
				star.style.width = `${size}px`;
				star.style.height = `${size}px`;
				
				// Random animation delay
				star.style.animationDelay = `${Math.random() * 10}s`;
				
				starsRef.current.appendChild(star);
			}
		}
		
		const handleMouseMove = (e) => {
			const { clientX, clientY } = e;
			const centerX = window.innerWidth / 2;
			const centerY = window.innerHeight / 2;

			// Calculate distance from center (normalized)
			const distanceX = (clientX - centerX) / centerX;
			const distanceY = (clientY - centerY) / centerY;
			
			setMousePosition({ x: distanceX, y: distanceY });

			// Apply movement to blobs with different intensities
			if (blobRefs.current[0]) {
				blobRefs.current[0].style.transform = `translate(${distanceX * 20}px, ${distanceY * 20}px)`;
			}
			if (blobRefs.current[1]) {
				blobRefs.current[1].style.transform = `translate(${distanceX * -15}px, ${distanceY * -15}px)`;
			}
			if (blobRefs.current[2]) {
				blobRefs.current[2].style.transform = `translate(${distanceX * 10}px, ${distanceY * 10}px)`;
			}
			if (blobRefs.current[3]) {
				blobRefs.current[3].style.transform = `translate(${distanceX * -25}px, ${distanceY * -25}px)`;
			}
			
			// Subtle parallax effect for stars
			if (starsRef.current) {
				starsRef.current.style.transform = `translate(${distanceX * -5}px, ${distanceY * -5}px)`;
			}
		};

		window.addEventListener("mousemove", handleMouseMove);
		return () => {
			window.removeEventListener("mousemove", handleMouseMove);
		};
	}, []);

	return (
		<div className="fixed inset-0 -z-10 overflow-hidden">
			{/* Stars */}
			<div ref={starsRef} className="absolute inset-0 transition-transform duration-1000 ease-out">
				{/* Stars will be added dynamically */}
			</div>
			
			{/* Noise overlay */}
			<div
				className="absolute inset-0 opacity-20"
				style={{
					backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
				}}
			/>

			{/* Animated blobs with improved colors */}
			<div className="absolute inset-0 overflow-hidden">
				<div
					ref={(ref) => (blobRefs.current[0] = ref)}
					className="absolute top-0 -left-4 md:w-[30rem] md:h-[30rem] w-72 h-72 bg-gradient-to-br from-primary-600 to-secondary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 md:opacity-15 animate-pulse-slow"
				></div>
				<div
					ref={(ref) => (blobRefs.current[1] = ref)}
					className="absolute top-0 -right-4 w-[30rem] h-[30rem] bg-gradient-to-bl from-blue-500 to-primary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 md:opacity-15 hidden sm:block animation-delay-2000 animate-pulse-slow"
				></div>
				<div
					ref={(ref) => (blobRefs.current[2] = ref)}
					className="absolute -bottom-8 left-[-40%] md:left-20 w-[30rem] h-[30rem] bg-gradient-to-tr from-secondary-600 to-primary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-30 md:opacity-15 animation-delay-4000 animate-pulse-slow"
				></div>
				<div
					ref={(ref) => (blobRefs.current[3] = ref)}
					className="absolute -bottom-10 right-20 w-[30rem] h-[30rem] bg-gradient-to-tl from-blue-500 to-secondary-600 rounded-full mix-blend-multiply filter blur-[128px] opacity-20 md:opacity-10 hidden sm:block animate-pulse-slow"
				></div>
			</div>
			
			{/* Grid overlay */}
			<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f08_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f08_1px,transparent_1px)] bg-[size:32px_32px]"></div>
			
			{/* Vignette effect */}
			<div className="absolute inset-0 bg-radial-gradient pointer-events-none"></div>
			
			{/* Add these styles to your CSS */}
			<style jsx>{`
				.star {
					position: absolute;
					background-color: white;
					border-radius: 50%;
					opacity: 0;
					animation: twinkle 10s infinite;
				}
				
				@keyframes twinkle {
					0%, 100% { opacity: 0; }
					50% { opacity: 0.8; }
				}
				
				.bg-radial-gradient {
					background: radial-gradient(circle at center, transparent 0%, rgba(3, 0, 20, 0.4) 80%, rgba(3, 0, 20, 0.8) 100%);
				}
			`}</style>
		</div>
	)
}

export default AnimatedBackground