import React from 'react';
import styles from './CreateNewQuestion.module.css';
import { Link } from 'react-router-dom';

const CreateNewQuestion = () => {
	return (
		<div>
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
			<div className={styles.chooseQuestion6}>
				<div className={styles.question}>
					<h2>Create question</h2>
					<p>Select section</p>
					<select>
						<option>Option 1</option>
						<option>Option 1</option>
						<option>Option 1</option>
					</select>
					<p>Add new question</p>
					<button>+</button>
				</div>
				<div className={styles.question6}>
					<h2>Create a new question</h2>
					<p>Select topic</p>
					<div>
						<div className={styles.boxes}>Types of Fungi</div>
						<div className={styles.boxes}>Growth of Bacteria</div>
					</div>
					<p>+ create new topic</p>
					<h2>Enter question details</h2>
					<div className={styles.question6}>
						<label>Question type</label>
						<select>
							<option>option1</option>
							<option>option2</option>
							<option>option3</option>
						</select>
					</div>
					<div className={styles.question6}>
						<label>Question Difficulty level</label>
						<select>
							<option>option1</option>
							<option>option2</option>
							<option>option3</option>
						</select>
					</div>
					<div>
						<div className={styles.question6}>
							<label>Question</label>
							<select id={styles.lastSelect}>
								<option >option1</option>
								<option>option2</option>
								<option>option3</option>
							</select>
						</div>
					</div>
					<h2>Enter the options, mark the correct option</h2>
					<p>Mark the correct option</p>
					<p>Option1</p>
					<input type="radio" />  <input tyle="text" placeholder="Enter question here" />
					<p>Option2</p>
					<input type="radio" />  <input tyle="text" placeholder="Enter question here" />
					<p>+ Add question</p>
					<button>Cancel</button><Link to="/completed-exam" id={styles.button}>Create</Link>
				</div>
			</div>
		</div>
	)
}

export default CreateNewQuestion;
