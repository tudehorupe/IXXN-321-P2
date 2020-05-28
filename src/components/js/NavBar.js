import React, { useState } from "react";
import "../css/NavBar.css";
import { NavLink } from 'react-router-dom';


function NavBarAdmin() {
	const [checked, setChecked] = useState(false);

	const checkHandler = () => {
		setChecked(!checked);
	};

	return (
		<div className="mobile-nav-wrapper">
			
			<div className="mobile-nav">

				<div className="lee-wroxton">
					<NavLink to="/home" activeClassName="active" className="home-link link">Lee Wroxton</NavLink>
				</div>
			<div className={checked ? "screen-mask" : "screen-mask-none"} onClick={checkHandler}></div>
			<div className="nav-container">
				<div className="checkbox-wrapper">
					<input type="checkbox" checked={checked} onChange={checkHandler} />
					<span></span>
					<span></span>
					<span></span>
				</div>
				<div id={checked ? "menu-checked" : "menu-unchecked"}>
					<div className="nav-items-container">
						<div className="nav-item" onClick={checkHandler}>
                            <NavLink to="/home" activeClassName="active" className="home-link link">Home</NavLink>
						</div>
						<div className="nav-item" onClick={checkHandler}>
                            <NavLink to="/about" activeClassName="active" className="about-link link">About</NavLink>
						</div>
						<div className="nav-item" onClick={checkHandler}>
                            <NavLink to="/Gallery" className="gallery-link link">Gallery</NavLink>
						</div>
                        <div className="nav-item" onClick={checkHandler}>
                            <NavLink to="/Contact" className="contact-link link">Contact</NavLink>
						</div>
					</div>
				</div>
			</div>
			</div>
		</div>
	);
}

export default NavBarAdmin;
