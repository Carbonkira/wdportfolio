import React, { useRef } from 'react' 
import CustomHook from './CustomHook';
function Home() {
const scrollTab = useRef();
CustomHook(scrollTab);

return (
    <section ref={scrollTab} className='home'>
        <div className="content">
            <div className="name">
                MY NAME IS <span>RHAMIELL VIRAY</span>
            </div>
            <div className="des">
                {/* 30 */}
                Motivated and creative 3rd-year IT student with an Eye for detail specializing in front-end web development!
            </div>
            
            <a href="/creative.pdf" target="_blank" rel="noopener noreferrer" className='animation active '>
                CREATIVE RESUME
            </a>
        </div>
        <div className="avatar">
            <div className="card">
                <img src="/avatar.jpg" alt="" />
                <div className="info">
                    <div>Developer</div>
                    <div>Web Designer</div>
                    <div>Photographer</div>
                    <div>Editor</div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Home
