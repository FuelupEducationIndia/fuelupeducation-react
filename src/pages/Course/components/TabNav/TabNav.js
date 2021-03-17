/* eslint-disable import/no-unresolved */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react'
import Certificate from './Certificate'
import './TabNav.scss'

function TabNav() {
  const [toggleState, setToggleState] = useState(1)

  const toggleTab = index => {
    setToggleState(index)
  }
  return (
    <div className="container">
      <div className="bloc-tabs">
        <button
          className={toggleState === 1 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(1)}
          type="button"
        >
          Broswer Course
        </button>
        <button
          className={toggleState === 2 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(2)}
          type="button"
        >
          My Course
        </button>
        <button
          className={toggleState === 3 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(3)}
          type="button"
        >
          Lectures
        </button>
        <button
          className={toggleState === 4 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(4)}
          type="button"
        >
          Exams
        </button>
        <button
          className={toggleState === 5 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(5)}
          type="button"
        >
          Assignments
        </button>
        <button
          className={toggleState === 6 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(6)}
          type="button"
        >
          Attendance
        </button>
        <button
          className={toggleState === 7 ? 'tabs active-tabs' : 'tabs'}
          onClick={() => toggleTab(7)}
          type="button"
        >
          Certificate
        </button>
      </div>

      <div className="content-tabs">
        <div
          className={toggleState === 1 ? 'content  active-content' : 'content'}
        >
          <h2>Content 1</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
            praesentium incidunt quia aspernatur quasi quidem facilis quo nihil
            vel voluptatum?
          </p>
        </div>

        <div
          className={toggleState === 2 ? 'content  active-content' : 'content'}
        >
          <h2>Content 2</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>

        <div
          className={toggleState === 3 ? 'content  active-content' : 'content'}
        >
          <h2>Content 3</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed
            nostrum rerum laudantium totam unde adipisci incidunt modi alias!
            Accusamus in quia odit aspernatur provident et ad vel distinctio
            recusandae totam quidem repudiandae omnis veritatis nostrum
            laboriosam architecto optio rem, dignissimos voluptatum beatae
            aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
        <div
          className={toggleState === 4 ? 'content  active-content' : 'content'}
        >
          <h2>Content 4</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
        <div
          className={toggleState === 5 ? 'content  active-content' : 'content'}
        >
          <h2>Content 5</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
        <div
          className={toggleState === 6 ? 'content  active-content' : 'content'}
        >
          <h2>Content 6</h2>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
            voluptatum qui adipisci.
          </p>
        </div>
        <div
          className={toggleState === 7 ? 'content  active-content' : 'content'}
        >
          <Certificate />
        </div>
      </div>
    </div>
  )
}

export default TabNav
