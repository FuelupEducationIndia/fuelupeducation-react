import React from 'react';
import { Link } from 'react-router-dom';
import App from '../../App';
import classes from "./Navbar.module.css";

class Navbar extends React.Component {
	render() {
		return (
			<div className={classes.navbar}>
				<ul className={classes.navbarList}>
					<li><Link to="/" onClick={App}>Fuelup education123</Link></li>
					<li>Courses&#9662;
						<ul className={classes.dropdownMenu}>
							<li className={classes.dropdownChild}>Junior High School</li>
							<li className={classes.dropdownChild}>Senior Hign School</li>
							<li className={classes.dropdownChild}>Vacational School</li>
							<li className={classes.dropdownChild}>College Students</li>
							<li className={classes.dropdownChild}>Musical School</li>
							<li className={classes.dropdownChild}>Engineering School</li>
						</ul>
					</li>
					<li>Subjects&#9662;
						<ul className={classes.dropdownMenu}>
							<li className={classes.dropdownChild}>Maths</li>
							<li className={classes.dropdownChild}>History</li>
							<li className={classes.dropdownChild}>English</li>
							<li className={classes.dropdownChild}>Hindi</li>
							<li className={classes.dropdownChild}>Regional language</li>
							<li className={classes.dropdownChild}>Commerces</li>
							<li className={classes.dropdownChild}>Science</li>
							<li className={classes.dropdownChild}>Environment science</li>
						</ul>
					</li>
					<li>For Kids</li>
					<li>Team</li>
					<li><Link to="/sign-in">Sign in</Link></li>
					<li>Start Learning</li>
				</ul>
			</div>
		)
	}
}

export default Navbar;

/*
function Navbar() {
		return (
				<div className={classes.navbar} style={{ backgroundImage: 'url("background-image.png")' }}>
						<ul className={classes.navbarList}>
								<li><Link to="/" onClick={App}>Fuelup education</Link></li>
								<li>Courses&#9662;
								<ul className={classes.dropdownMenu}>
												<li className={classes.dropdownChild}>Junior High School</li>
												<li className={classes.dropdownChild}>Senior Hign School</li>
												<li className={classes.dropdownChild}>Vacational School</li>
												<li className={classes.dropdownChild}>College Students</li>
												<li className={classes.dropdownChild}>Musical School</li>
												<li className={classes.dropdownChild}>Engineering School</li>
										</ul>
								</li>
								<li>Subjects&#9662;
								<ul className={classes.dropdownMenu}>
												<li className={classes.dropdownChild}>Maths</li>
												<li className={classes.dropdownChild}>History</li>
												<li className={classes.dropdownChild}>English</li>
												<li className={classes.dropdownChild}>Hindi</li>
												<li className={classes.dropdownChild}>Regional language</li>
												<li className={classes.dropdownChild}>Commerces</li>
												<li className={classes.dropdownChild}>Science</li>
												<li className={classes.dropdownChild}>Environment science</li>
										</ul>
								</li>
								<li>For Kids</li>
								<li>Team</li>
								<li><Link to="/Sign" onClick={Sign}>Sign in</Link></li>
								<li>Start Learning</li>
						</ul>
				</div >
		)
}

export default Navbar
*/