//@ts-nocheck
"use client"
import * as React from 'react'
import './ourWorks.css';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import ProjectCard from './ProjectCard';
import { ourWork } from '@/app/data/ourWork';
import { workerData } from 'worker_threads';

const OurWorks: React.FC = () => {
  const loaderRef = React.useRef(null);

  React.useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const images = gsap.utils.toArray('li');
    const showDemo = () => {
      document.body.style.overflow = 'auto';
      if (typeof document.scrollingElement !== 'undefined' && document.scrollingElement !== null) {
        document.scrollingElement.scrollTo(0, 0);
      } else {
        window.scrollTo(0, 0);
      }
      gsap.to(document.querySelector('.loader'), { autoAlpha: 0 });

      gsap.utils.toArray('section').forEach((section, index) => {
        const w = section.querySelector('.wrapper');
        if (w) {
          const [x, xEnd] = index % 2 ? ['100%', (w.scrollWidth - section.offsetWidth) * -1] : [w.scrollWidth * -1, 0];
          gsap.fromTo(w, { x }, {
            x: xEnd,
            scrollTrigger: {
              trigger: section,
              scrub: 0.5
            }
          });
        }
      });
    };

    showDemo();

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <>
      <div className="demo-wrapper" id="works">
        <section className="demo-text">
          <div className="wrapper text">OUR WORKS</div>
        </section>
        <section className="demo-gallery">
          <ul className="wrapper demo-gallery-wrapper">
            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[0]['image']} name={ourWork[0]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[1]['image']} name={ourWork[1]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[2]['image']} name={ourWork[2]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[3]['image']} name={ourWork[3]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[4]['image']} name={ourWork[4]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[5]['image']} name={ourWork[5]['name']} />
            </li>


            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[6]['image']} name={ourWork[6]['name']} />
            </li>


            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[7]['image']} name={ourWork[7]['name']} />
            </li>
          </ul>
        </section>

        <section className="demo-gallery">
          <ul className="wrapper demo-gallery-wrapper">
            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[8]['image']} name={ourWork[8]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[9]['image']} name={ourWork[9]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[10]['image']} name={ourWork[10]['name']} />
            </li>

            <li style={{ width: 400 }}>
              <ProjectCard image={ourWork[11]['image']} name={ourWork[11]['name']} />
            </li>

            <li style={{ width: 400 }}>
            </li>
          </ul>
        </section>

        <section className="demo-text">
          <div className="wrapper text">010101010101010101010</div>
        </section>
      </div>
    </>
  )
}

export default OurWorks;
