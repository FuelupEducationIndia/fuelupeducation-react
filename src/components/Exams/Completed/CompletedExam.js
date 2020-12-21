import React from 'react';
import styles from './CompletedExam.module.css';
import Navbar from '../../Navbar/Navbar'
import emptyCircle from '../../../assets/images/empty-circle.png';
import fullCircle from '../../../assets/images/full-circle.png';

function CompletedExam() {
	return (
		<div className={styles.completedExam}>
			<Navbar />
			<h1>Micro-organisms</h1>
			<h6>Higher secondary</h6>
			<div className={styles.dots3}>
				<img src={fullCircle} alt="fullCircle" />
				<div className={styles.line3}></div>
				<img src={fullCircle} alt="fullCircle" />
				<div className={styles.line3}></div>
				<img src={fullCircle} alt="fullCircle" />
				<div className={styles.line3}></div>
				<img src={emptyCircle} alt="emptyCircle" />
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
