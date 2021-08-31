import React, { useState } from 'react';
import PropTypes from 'prop-types';

import styles from './NavTaecher.module.scss';

import Assignment from '../Assignment/Assignment';

const NavTeacher = props => {
  const [viewIn, setViewIn] = useState('')

  const onClick = e => {
    setViewIn(e.currentTarget.getAttribute('render'))
  }
  
  return (
    <div className={styles.nav}>
      <ul className={styles.navul}>
        <li render="Courses" onClick={onClick}>
          Browse Courses
        </li>
        <li render="MyCourses" onClick={onClick}>
          My courses
        </li>
        <li render="Lectures" onClick={onClick}>
          Lectures
        </li>
        <li render="Exams" onClick={onClick}>
          Exams
        </li>
        <li 
          render="Assignments" 
          onClick={onClick}
          className={`${
            viewIn === 'Assignments' ? styles.renderedSection : ''
          }`}
        >
          Assignments
        </li>
        <li render="Attendance" onClick={onClick}>
          Attendance
        </li>
        <li render="certificate" onClick={onClick}>
          Certificate
        </li>
      </ul>

      {viewIn === 'Assignments' ? <Assignment /> : ''}
    </div>
  )
};

NavTeacher.propTypes = {};

export default NavTeacher;