import React from 'react';
import styles from './CompletedExam.module.css';

function CompletedExam() {
	return (
		<div>
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
		</div>
	)
}

export default CompletedExam;
