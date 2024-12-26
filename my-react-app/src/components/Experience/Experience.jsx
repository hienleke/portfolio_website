import React, { useState, useEffect , useRef } from "react";
import "./Experience.css";
const Experience = () => {


	const experiences = [
		{
			company: "INNORIX",
			location: "Binh Thanh District, HCM city, Viet Nam",
			role: "Fullstack Software Engineer",
			duration: "Dec 2023 – Oct 2024",
			responsibilities: [
				"Migrated file transfer system to a web platform with cloud integration (Azure Blob, Google Storage, Amazon S3), enabling drag-and-drop functionality and file management actions.",
				"Migrated legacy queue system to Redis, reducing data loss from 20% to 2-3% and improving transfer reliability. Developed error detection system with Redis integration.",
				"Optimized transfer times by 20%, implemented monitoring tools to track performance and enhance user satisfaction.",
				"Designed and implemented Coze API-based chatbot for software sales and support, reducing support staff from 20 to 4.",
				"Created logging server to track errors and real-time notifications, utilizing CronJobs to automatically generate error reports.",
			],
		},
		{
			company: "An Phu Gia",
			location: "Binh Thanh District, HCM city, Viet Nam",
			role: "Backend Engineer",
			duration: "Nov 2021 – Nov 2023",
			responsibilities: [
				"Designed and implemented a notification system and newsfeed for ERP system, replacing outdated module.",
				"Migrated data from Discord chat system to custom-built chat system, improving real-time communication by 40%.",
				"Optimized business reporting system using RabbitMQ, reducing report generation time from 3 minutes to under 50 seconds.",
				"Developed core module for real-time updates on product discounts, integrated with RabbitMQ for seamless operation.",
			],
		},
		{
			company: "Robert Bosch Engineering & Business Solutions Vietnam",
			location: "Tan Binh District, HCM city, Viet Nam",
			role: "Software Engineer Intern",
			duration: "Jan 2021 – Jun 2021",
			responsibilities: [
				"Researched and developed web services, coding conventions, style guides, and design patterns for backend systems.",
				"Collaborated with team leader to design database schema and implement backend services, including comment, newsfeed, and notification systems.",
			],
		},
	];
	const elementRef = useRef(null);
	const [height_wrapLine, setHeight_wrapLine] = useState(100);

  
	useEffect(() => {
		const handleScroll = () => {
		  if (elementRef.current) {
			const rect = elementRef.current.getBoundingClientRect();
			const scrollY = window.scrollY || window.pageYOffset;
			const elementTop = rect.top + scrollY; 
		
			const viewportHeight = window.innerHeight || document.documentElement.clientHeight; 
			const scrollPosition = scrollY + viewportHeight; 
			const visibilityPercentage = (((scrollPosition -  elementTop) - (rect.height / 5) ) /  rect.height)  * 100;
		
			if (visibilityPercentage < 0) {
				setHeight_wrapLine(0); 
			} else if (visibilityPercentage > 100) {
				setHeight_wrapLine(100); 
			}
			else  		setHeight_wrapLine(visibilityPercentage); 
		  }
		};
	
		window.addEventListener("scroll", handleScroll);
		// Initial check on component mount
		handleScroll();
	
		return () => {
		  window.removeEventListener("scroll", handleScroll);
		};
	  }, []); 



	return (
		<section  ref={elementRef} className="experience">
			<h2 className="headLine expericence-headLine">
				{" "}
				<span className="red-color">History work</span> <span></span>Timeline
			</h2>
			<div className="experience-content">
				<div className="wrap-line" style={{
					position: 'absolute',
					width: '2px',
					height: `${height_wrapLine}%`,
					left: '50%',
					backgroundColor: 'red',
					zIndex: 1,
					transition: 'height 0.3s linear'
				}}></div>
				{experiences.map((ex, index) => {
					return (
						<div key={ex.company} className={`experience-item`}>
							{" "}
							{/* Using a unique key for each experience */}
							<div className="content">
								<h4>{ex.company}</h4>
								<p>{ex.location}</p>
								<p>
									<strong>Role:</strong> {ex.role}
								</p>
								<p>
									{ex.techstack?.map((tech, index) => (
										<span key={index}>{tech}</span>
									))}
								</p>

								<p>
									<strong>Responsibilities:</strong>
								</p>
								<ul>
									{ex.responsibilities.map((responsibility, index) => (
										<li key={index}>{responsibility}</li>
									))}
								</ul>
							</div>
							<div className="dot">
								
							</div> 
							<div className="year">{ex.duration}</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Experience;
