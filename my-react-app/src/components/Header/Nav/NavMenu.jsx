import React, { useEffect } from "react";
import "./NavMenu.css";
import { useSelector } from "react-redux";

const NavMenu = () => {
	const {currentComponent} = useSelector((state) => state.currentComponent);

	useEffect(() => {
		console.log("current component:", currentComponent);
	}, [currentComponent]);

	return (
		<div className="Nav_right bounds">
			<a href="#about" className={currentComponent?.toLowerCase() === "about" ? "active" : ""}>
				About
			</a>
			<a href="#experience" className={currentComponent?.toLowerCase() === "experience" ? "active" : ""}>
				Experience
			</a>
			<a href="#skill" className={currentComponent?.toLowerCase() === "skill" ? "active" : ""}>
				Skills
			</a>
			<a href="#contact" className={currentComponent?.toLowerCase() === "footer" ? "active" : ""}>
				Contact
			</a>
		</div>
	);
};

export default NavMenu;
