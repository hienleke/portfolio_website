import React, { useEffect } from "react";
import "./NavMenu.css";
import { useSelector } from "react-redux";

const NavMenu = () => {
	const {data} = useSelector((state) => state.currentComponent);

	useEffect(() => {
		console.log("current component:", data);
	}, [data]);

	return (
		<div className="Nav_right bounds">
			<a href="#about" className={data?.toLowerCase() === "about" ? "active" : ""}>
				About
			</a>
			<a href="#experience" className={data?.toLowerCase() === "experience" ? "active" : ""}>
				Experience
			</a>
			<a href="#projects" className={data?.toLowerCase() === "projects" ? "active" : ""}>
				Projects
			</a>
			<a href="#skill" className={data?.toLowerCase() === "skill" ? "active" : ""}>
				Skills
			</a>
			<a href="#contact" className={data?.toLowerCase() === "footer" ? "active" : ""}>
				Contact
			</a>
		</div>
	);
};

export default NavMenu;
