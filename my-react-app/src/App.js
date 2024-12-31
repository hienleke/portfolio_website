import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import NavMenu from "./components/Header/Nav/NavMenu";
import About from "./components/About/About";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Skill from "./components/Skill/Skill";

function App() {
	const [activeSection, setActiveSection] = useState("");

	useEffect(() => {
		const sections = document.querySelectorAll("section");
		const options = {
			root: null,
			threshold: 0.5,
		};

		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					setActiveSection(entry.target.id);
				}
			});
		}, options);

		sections.forEach((section) => observer.observe(section));

		return () => {
			// Clean up observer on unmount
			sections.forEach((section) => observer.unobserve(section));
		};
	}, []);
	return (
		<div className="App">
			<Header activeSection={activeSection} />
			<div className="main-content" style={{
					padding: "0 5%",         
					width: "100%",           
					height: "auto",           
					display: "flex",        
					gap: "1rem",              
					flexDirection: "column"   
				}}>
				<About  />
				<NavMenu />
				<Experience  />
				<Skill />
				<Footer /> 
			</div>
		</div>
	);
}

export default App;
