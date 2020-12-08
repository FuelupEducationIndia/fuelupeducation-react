import React from 'react';
import styles from './CreateExam.module.css';
import { Link } from 'react-router-dom';
import classes from './CreateExam.module.css';

const CreateExam = () => {
	return (
		<div className={classes.createExam}>
			<h1>Micro-organisms</h1>
			<h6>Higher secondary</h6>
			<div className={styles.dots3}>
				<div className={styles.circle3}></div>
				<div className={styles.line3}></div>
				<div className={styles.circle3}></div>
				<div className={styles.line3}></div>
				<div className={styles.circle3}></div>
				<div className={styles.line3}></div>
				<div className={styles.circle3}></div>
			</div>
			<div className={styles.dotsText}>
				<span>Create exam</span>
				<span>Create sections</span>
				<span>Create questions</span>
				<span>Completed</span>
			</div>
			<div className={styles.details}>
				<h3>Enter the details to create new exam</h3>
				<label for="details">Exam name</label><br></br>
				<select name="details">
					<option value="option1">Option 1</option>
					<option value="option2">Option 2</option>
					<option value="option3">Option 3</option>
				</select>
				<div className={styles.courses}>
					<div>
						<label for="select-course">Select course</label><br></br>
						<select name="select-course">
							<option value="option1">Option 1</option>
							<option value="option2">Option 2</option>
							<option value="option3">Option 3</option>
						</select>
					</div>
					<div>
						<label for="enter-course-code">Enter course code</label><br></br>
						<input type="text" />
					</div>
					<div>
						<Link to="/create-sections" id={styles.button}>Next</Link><Link id={styles.button}>Save for later</Link>
					</div>
					<br></br>
				</div>
			</div>
		</div>
	)
}

export default CreateExam;
