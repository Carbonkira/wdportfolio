import React, { useRef, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faHtml5, faCss3, faJs, faFigma, faBootstrap } from '@fortawesome/free-brands-svg-icons';
import CustomHook from './CustomHook';

function Skills() {
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  const [listSkills] = useState([
    {
      name: 'HTML',
      des: 'Proficient in creating semantic and accessible HTML structures. Experienced with HTML5 features and best practices for web development.',
      icon: faHtml5
    },
    {
      name: 'CSS',
      des: 'Skilled in styling web pages with CSS, including responsive design principles.  Able to create visually appealing and user-friendly interfaces.',
      icon: faCss3
    },
    {
      name: 'Javascript',
      des: 'Solid understanding of JavaScript fundamentals, including DOM manipulation, event handling, and asynchronous programming. Experience with modern JavaScript frameworks and libraries.',
      icon: faJs
    },
    {
      name: 'ReactJs',
      des: 'Experienced in building dynamic and interactive web applications using React. Proficient in component lifecycle, state management, and working with React Router and other related libraries.',
      icon: faReact
    },
    {
      name: 'Bootstrap',
      des: 'Familiar with using Bootstrap for rapid prototyping and building responsive layouts. Able to customize Bootstrap components and leverage its grid system.',
      icon: faBootstrap
    },
    {
      name: 'Figma',
      des: 'Proficient in using Figma for UI design and prototyping. Able to create wireframes, mockups, and design systems for web and mobile applications.',
      icon: faFigma
    }

  ]);
  return (
    <section className='skills' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        SKILLS
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
      Proficient in HTML5, CSS3, JavaScript, Bootstrap, React, and Figma, with strong UI/UX design skills.       </div>
      <div className="list">
        {
          listSkills.map((value, key) => (
            <div className={'item '} key={key} ref={(el) => el && divs.current.push(el)}>
              <FontAwesomeIcon icon={value.icon} />
              <h3>{value.name}</h3>
              <div className="des">{value.des}</div>
            </div>
          ))
        }
      </div>
    </section>
  )
}

export default Skills