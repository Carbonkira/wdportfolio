import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPersonCircleQuestion, faEarthAmericas } from '@fortawesome/free-solid-svg-icons';
import CustomHook from './CustomHook';

function Projects() {
  const [listProjects] = useState([
    {
      name: 'Carpe Diem',
      des: 'A personal photography portfolio website showcasing my passion for capturing moments.  Designed with a clean and minimalist aesthetic to highlight the images.',
      mission: 'Front-end Developer and Designer',
      language: 'HTML5, CSS3',
      images: '/project3.PNG'
    },
    {
      name: 'Cactus Cafe Site',
      des: 'A website designed for a local cafe, focusing on user interaction and online ordering.  Integrated a menu display and contact information for easy customer access.',
      mission: 'Back-end Developer, System Analysis and Design',
      language: 'HTML5, CSS3, MongoDB, NodeJS',
      images: '/project1.PNG'
    },
    {
      name: 'Travel Ease',
      des: 'A web application that allows users to plan and track their travel destinations. Features include a map interface, itinerary builder, and a place to record travel memories.',
      mission: 'Full-stack Developer, System Analysis and Design',
      language: 'HTML5, CSS3, Bootstrap, Firebase, VueJs',
      images: '/project2.PNG'
    },
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);
  return (
    <section className='projects' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
        My Projects
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        Explore a selection of my projects, showcasing my skills and experience in web development. From front-end design to full-stack applications, these projects demonstrate my ability to create user-friendly and functional websites.
      </div>
      <div className="list">
        {
          listProjects.map((value, key) => (
            <div className='item' key={key} ref={(el) => el && divs.current.push(el)}>
              <div className="images">
                <img src={value.images} alt={value.name} /> {/* Added alt attribute */}
              </div>
              <div className="content">
                <h3>{value.name}</h3>
                <div className="des">{value.des}</div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faPersonCircleQuestion} /></div>
                  <div>
                    <h4>Role</h4>
                    <div className="des">{value.mission}</div>
                  </div>
                </div>
                <div className="mission">
                  <div><FontAwesomeIcon icon={faEarthAmericas} /></div>
                  <div>
                    <h4>Tools</h4>
                    <div className="des">{value.language}</div>
                  </div>
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </section>
  )
}
export default Projects