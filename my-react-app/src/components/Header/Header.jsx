import React, { useEffect, useState , useRef } from "react";
import "./Header.css";

const Header = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const stickyRef = useRef(null); 
  const [isSticky, setIsSticky] = useState(false);

useEffect(() => {
  const handleScroll = () => {
    if (stickyRef.current) {
	let  view_port  = window.innerHeight
	  let scrollY = window.scrollY;
      let isSticky_check =   (  scrollY  > view_port) ?  true : false;
	  console.log("isSticky:", isSticky, "isSticky_check:", isSticky_check);
      if(isSticky_check !== isSticky )
	  {
		setIsSticky(isSticky_check)
	  }
    }
  };

  		window.addEventListener("scroll", handleScroll);
		window.addEventListener("load", setIsLoaded(true));
		return () => {
      window.removeEventListener("load", setIsLoaded(true));
      window.removeEventListener("scroll", handleScroll);
		};
	}, [isSticky]);
	return (
		<header className ={`header ${isSticky ? 'isSticky' : '' }`} ref={stickyRef}>
			<div className={`header-image ${` ${isLoaded ? "loaded" : ""}`}`}>
				<img
					src="./favicon.png" 
					alt="Header"
					className="header-img"
				/>
			</div>
      <nav >
				<div className="social slideUp">
					<a href="https://github.com/hienleke" target="_blank" rel="noopener noreferrer">
						<img src={"https://skillicons.dev/icons?i=github"} alt="G itHub" />
					</a>
					<a href="mailto:lekehien5431@gmail.com" target="_blank" rel="noopener noreferrer">
						<img src="https://skillicons.dev/icons?i=gmail" alt="Gmail" />
					</a>
					<a href="https://www.linkedin.com/in/hien-le-ke-9124681a7/" target="_blank" rel="noopener noreferrer">
						<img src="https://skillicons.dev/icons?i=linkedin" alt="LinkedIn" />
					</a>
				</div>

			</nav>
		</header>
	);
};

export default Header;
