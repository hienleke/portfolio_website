import React, { useState, useEffect, useRef } from "react";
import "./Experience.css";
import innorix_logo  from '../../asset/innorix.jfif'
import bosch_logo from '../../asset/bosch.jfif'
import apg_logo from '../../asset/apg.jpg'
import useVisibility from "../custom_hook/useVisibility";
const Experience = () => {
	const experiences = [
		{
			company: "INNORIX",
			product_link: "https://innorix.com/en/exacoola/product/7",
			logo: innorix_logo,
			location: "(Remote) HCM city, Viet Nam",
			role: "Fullstack Software Engineer",
			duration: "Dec 2023 – Nov 2024",
			skills: [
				"Express",
				"RabbitMQ",
				"React",
				"Redis",
				"Redux",
				"Sequelize",
				"Socket",
				"Typescript",
				"SailJS",
				"Nginx",
				"DataDog",
				"Pm2",
				"AWS (RDS, EC2, Lamda, S3, CDK, API Gateway, CloudFont)", 
				"Azure (Blob Storage)",
				"Github Action",
				"CronJob",
				"Docker",
				"Express",
				"GCP (Google Storage)",
				"Jest",
				"Microservices",
				"MySql",
				"Prisma",
			],
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
			logo: apg_logo,
			role: "Backend Engineer",
			duration: "Nov 2021 – Nov 2023",
			skills: ["Express",  "SocketIO","MongoDB", "Redis", "RabbitMQ", "MySQL", "Postgres", "GraphQL", "Jest", "CI/CD", "S3", "PM2", "Schedule", "Docker", "Microservice" ,"DataDog" , "Jira" ],

			responsibilities: [
				"Designed and implemented a notification system and newsfeed for ERP system, replacing outdated module.",
				"Migrated data from Discord chat system to custom-built chat system, improving real-time communication by 40%.",
				"Optimized business reporting system using RabbitMQ, reducing report generation time from 3 minutes to under 50 seconds.",
				"Developed core module for real-time updates on product discounts, integrated with RabbitMQ for seamless operation.",
			],
		},
		{
			company: "Robert Bosch Engineering & Business Solutions Vietnam",
			logo: bosch_logo,
			location: "Tan Binh District, HCM city, Viet Nam",
			role: "Software Engineer Intern",
			duration: "Jan 2021 – Jun 2021",
			skills: [ "Spring Boot", "Spring Data JPA", "Spring Security", "Spring MVC",
				"Java",
				"MYSQL", "SQL SERVER" , "APACHE" , "PostMan" , "XML" ],
			responsibilities: [
				"Researched and developed web services, coding conventions, style guides, and design patterns for backend systems.",
				"Collaborated with team leader to design database schema and implement backend services, including comment, newsfeed, and notification systems.",
			],
		},
	];
	const elementRef = useRef(null);
	useVisibility(elementRef, 'experience');
	
	const [height_wrapLine, setHeight_wrapLine] = useState(0);

	useEffect(() => {
		const handleScroll = () => {
			if (elementRef.current) {
				const rect = elementRef.current.getBoundingClientRect();
				const scrollY = window.scrollY || window.pageYOffset;
				const elementTop = rect.top + scrollY;

				const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
				const scrollPosition = scrollY + viewportHeight;
				const visibilityPercentage = ((scrollPosition - elementTop - rect.height / 5) / rect.height) * 100;

				if (visibilityPercentage < 5) {
					setHeight_wrapLine(5);
				} else if (visibilityPercentage > 100) {
					setHeight_wrapLine(100);
				} else setHeight_wrapLine(visibilityPercentage);
			}
		};

		window.addEventListener("scroll", handleScroll);
		handleScroll();
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<section id="experience" ref={elementRef} className="experience bounds ">
			<h2 className="headLine expericence-headLine">
				<span className="experience-title">Experience</span>
			</h2>
			<div className="experience-content">
				<div
					className="wrap-line"
					style={{
						position: "absolute",
						width: "2px",
						height: `${height_wrapLine}%`,
						left: "0%",
						backgroundColor: "red",
						zIndex: 1,
						transition: "height 0.3s ease",
						magrin: "3rem 0 ",
					}}
				></div>
				{experiences.map((ex, index) => {
					return (
						<div key={ex.company} className={`experience-item ${index % 2 === 0 ? "left" : "right"}`}>
							<div className="duration-working">{ex.duration}</div>
							<div className="content box-card">
								<div className="company-info" style={{ display: "flex", width: "100%", justifyContent: "space-between", alignItems: "center" }}>
								<div><img style = {{ height : '50px' , width : '50px' , borderRadius : '50%'}} src={ex.logo}></img>	<h4>{ex.company}</h4 > {ex.product_link ?<span>Demo : <span className="emoji">👉</span> <a href={ex.product_link}  style ={{ color : '#029aeb'}} target="_blank">Link </a>   </span> :   " "}</div>
									<p style={{ color: "#747474" }}>{ex.location}</p>
								</div>
								<h4>{ex.role}</h4>
								<p>
									{ex.techstack?.map((tech, idx) => (
										<span key={idx}>{tech}</span>
									))}
								</p>
								<ul>
									{ex.responsibilities.map((responsibility, idx) => (
										<li key={idx}>{responsibility}</li>
									))}
								</ul>
								<div className="skill-tabs">
									{ex.skills?.map((skill, idx) => (
										<div className="skill-tab" key={idx}>
											{skill.toLowerCase()}
										</div>
									))}
								</div>
							</div>
						</div>
					);
				})}
			</div>
		</section>
	);
};

export default Experience;
