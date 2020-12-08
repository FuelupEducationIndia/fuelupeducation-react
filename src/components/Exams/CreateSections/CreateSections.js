import React from 'react';
import styles from './CreateSections.module.css';
import { Link } from 'react-router-dom';

const CreateSections = () => {
	return (
		<div className={styles.createSections}>
			<h1>Micro-organisms</h1>
			<h6>Higher secondary</h6>
			<div className={styles.dots4}>
				<div className={styles.circle4}></div>
				<div className={styles.line4}></div>
				<div className={styles.circle4}></div>
				<div className={styles.line4}></div>
				<div className={styles.circle4}></div>
				<div className={styles.line4}></div>
				<div className={styles.circle4}></div>
			</div>
			<div className={styles.dotsText}>
				<span>Create exam</span>
				<span>Create sections</span>
				<span>Create questions</span>
				<span>Completed</span>
			</div>
			<div className={styles.details4}>
				<div>
					<h3>Enter the details to add a section to the exam paper</h3>
					<div>
						<label for="text">Section name<span>01</span></label>
						<input type="text" id="text" />
					</div>
					<div>
						<label for="text">Section name <span>02</span></label>
						<input type="text" />
					</div>
					<div>
						<label for="text">Section name <span>03</span></label>
						<input type="text" id="text" />
					</div>

				</div>
				<div>
					<div>
						<label for="text">Duration</label>
						<input type="text" id="text" placeholder="hr/mins" />
					</div>
					<div>
						<label for="text">Duration</label>
						<input type="text" id="text" placeholder="hr/mins" />
					</div>
					<div>
						<label for="text">Duration</label>
						<input type="text" id="text" placeholder="hr/mins" />
					</div>

				</div>
				<div>
					<div>
						<label for="text">Section description</label>
						<input type="text" id="text" />
					</div>
					<div>
						<label for="text">Section description</label>
						<input type="text" id="text" />
					</div>
					<div>
						<label for="text">Section description</label>
						<input type="text" id="text" />
					</div>
				</div>
				<div>
					<button id={styles.button}>+</button><Link to="/choose-from-question-bank" id={styles.button}>Next</Link><button id={styles.button}>Save for later</button>
				</div>
			</div>
		</div>
	)
}

export default CreateSections;
