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
	const scrollComponent = useRef(null);
	const [height_wrapLine, setHeight_wrapLine] = useState(0);
	const handleIntersection = (entries) => {
	  entries.forEach((entry) => {
		const { top, bottom } = entry.boundingClientRect; // Get element's position relative to the viewport
		const viewportHeight = window.innerHeight; // Height of the viewport
		const elementHeight = entry.target.offsetHeight; // Height of the element itself
  
		// Calculate visible part of the element
		const visibleTop = Math.max(0, top);
		const visibleBottom = Math.min(viewportHeight, bottom);
		const visibleHeight = visibleBottom - visibleTop;
  
		// Calculate the visibility percentage
		const percentage = Math.max(0, Math.min(100, (visibleHeight / elementHeight) * 100));
		
		  setHeight_wrapLine(`${percentage}%`); 
		  console.log('height_wrapLine', height_wrapLine);
	  });
	};
  
	useEffect(() => {
		if (!scrollComponent.current) return;
	  const observer = new IntersectionObserver(handleIntersection, {
		threshold: Array.from({ length: 101 }, (_, i) => i / 100),
	  });
  
	  // Start observing the component when the component is mounted
	  if (scrollComponent.current) {
		observer.observe(scrollComponent.current);
	  }
  
	  return () => observer.disconnect();
	}, []);



	return (
		<section  ref={scrollComponent} className="experience">
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
									<strong>Duration:</strong> {ex.duration}
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
