import React from 'react';
import styles from './CompletedExam.module.css';
import Navbar from '../../Navbar/Navbar'

function CompletedExam() {
	return (
		<div className={styles.completedExam}>
			<Navbar />
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
			<div className={styles.footer}>
				<button>VIEW</button>
				<span>Dashboard</span>
				<button>&#x3e;</button>
			</div>
		</div>
	)
}

export default CompletedExam;
