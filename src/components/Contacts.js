import React, { useState, useRef } from 'react';
import CustomHook from './CustomHook';

function Contacts() {
  const [listContacts] = useState([
    {
      title: 'Phone Number',
      value: '09297624601'
    },
    {
      title: 'Email',
      value: 'louisviray27@gmail.com'
    }
  ]);
  const divs = useRef([]);
  const scrollTab = useRef();
  CustomHook(scrollTab, divs);

  const handleEmailClick = () => {
    window.location.href = 'mailto:louisviray27@gmail.com';
  };

  return (
    <section className='contacts' ref={scrollTab}>
      <div className="title" ref={(el) => el && divs.current.push(el)}>
      CONTACTS        
      </div>
      <div className="des" ref={(el) => el && divs.current.push(el)}>
        {/* 20 */}
        I'm always open to new opportunities and collaborations.  Feel free to reach out to discuss your project, ask questions, or just connect! I'm eager to hear from you.      </div>

      <div className="list" ref={(el) => el && divs.current.push(el)}>
        {
          listContacts.map((value, key) => (
            <div className='item' key={key}>
              <h3>{value.title}</h3>
              <div>{value.value}</div>
            </div>
          ))
        }
      <button className="contact-button" onClick={handleEmailClick}>
        Email Me
      </button>
      </div>

    </section>
  );
}

export default Contacts;
