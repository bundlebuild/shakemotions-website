//@ts-nocheck
"use client"
import * as React from 'react'
import './hero.css';
import FadeUp from '../Animations/FadeUp';
import { ScrollContext } from '@/app/utils/scroll-observer';

const Hero: React.FC = () => {
  const refContainer = React.useRef<HTMLDivElement>(null);

  const { scrollY } = React.useContext(ScrollContext);


  let progress = 0;

  const { current: elContainer } = refContainer

  if (elContainer) {
    progress = Math.min(1, scrollY / elContainer.clientHeight);
  }

  React.useEffect(() => {
    const video = document.querySelector('.video');
    const textOverlay = document.querySelector('.text-overlay');

    video.addEventListener('play', () => {
      textOverlay.style.webkitMaskImage = 'url(#video-mask)';
      textOverlay.style.maskImage = 'url(#video-mask)';
    });
  }, []);

  return (
    <div ref={refContainer} className="hero video-text-container"
      style={{
        transform: `translateY(-${progress * 20}vh)`
      }}
    >

      <video
        id="example-2_html5_api"
        className="video"
        autoPlay muted
      >
        <source
          src="https://keyframe-five.vercel.app/vids/sahil-darkest-hour.mp4"
          type="video/mp4"
        />
        <p className="vjs-no-js">
          To view this video please enable JavaScript, and consider upgrading to a web
          browser that
          <a
            href="https://videojs.com/html5-video-support/"
            target="_blank"
            className="vjs-hidden"
            hidden="hidden"
          >
            supports HTML5 video
          </a>
        </p>
      </video>
      <FadeUp className="hero-text text-overlay">
        We make world-class animations, <span className="highlighted">for you</span>.
      </FadeUp>
      <div className="hero-cta">

        <a
          href="#howto"
          data-ms-content="!members"
          className="btn-link w-inline-block"
        >
          <div className="btn-embed w-embed">
            <button
              className="btn primary"
            >
              <span className="btn-contents">
                <span className="btn-text">Get Started</span>
              </span>
            </button>
          </div>
        </a>
      </div>
    </div>
  )
}

export default Hero;
