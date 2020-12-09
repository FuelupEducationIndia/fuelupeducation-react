import React from 'react';
import styles from './ChooseFromQuestionBank.module.css';
import { Link } from 'react-router-dom';
import Navbar from '../../../Navbar/Navbar'

const ChooseFromQuestionBank = () => {
	return (
		<div className={styles.chooseFromQuestionBank}>
			<Navbar />
			<h1>Micro-organisms</h1>
			<h6>Higher secondary</h6>
			<div className={styles.dots5}>
				<div className={styles.circle5}></div>
				<div className={styles.line5}></div>
				<div className={styles.circle5}></div>
				<div className={styles.line5}></div>
				<div className={styles.circle5}></div>
				<div className={styles.line5}></div>
				<div className={styles.circle5}></div>
			</div>
			<div className={styles.dotsText}>
				<span>Create exam</span>
				<span>Create sections</span>
				<span>Create questions</span>
				<span>Completed</span>
			</div>
			<div className={styles.chooseQuestion}>
				<div className={styles.question}>
					<h3>Create questions</h3>
					<label for="create-questions">Select section</label><br></br>
					<select name="create-questions" className={styles.createQuestions}>
						<option value="option1">Option 1</option>
						<option value="option2">Option 2</option>
						<option value="option3">Option 3</option>
					</select>
					<p>Add new question</p>
				</div>
				<div className={styles.question}>
					<h3>Choose from Question Bank</h3>
					<div>
						<p>Select question from question bank</p>
					</div>
					<div>
						<p>Select question from question bank</p>
					</div>
					<div>
						<p>Select question from question bank</p>
					</div>
					<div>
						<p>Select question from question bank</p>
					</div>
					<button id={styles.button}>
						<Link to="/create-new-question" id={styles.button}>Finish</Link>
					</button>

				</div>
				<div>
				</div>
			</div>
		</div>
	)
}

export default ChooseFromQuestionBank;
