//@ts-nocheck
"use client"
import React, { useState, useEffect, useRef } from 'react'
import './workWillAmaze.css'

const WorkWillAmaze: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(-1);
  const paragraphRefs = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveIndex(entry.target.dataset.index);
        }
      });
    }, { threshold: 1 });

    paragraphRefs.current.forEach((ref) => {
      observer.observe(ref);
    });

    return () => {
      paragraphRefs.current.forEach((ref) => {
        observer.unobserve(ref);
      });
    };
  }, []);
  return (
    <div className="workWillAmaze-container" id="examples">
      <div className="left-section">
        <div className={`workWillAmaze-heading ${activeIndex == 0 ? 'active' : ''}`} ref={(el) => (paragraphRefs.current[0] = el)}
          data-index={0}>
          Voice over
        </div>


        <div className={`workWillAmaze-heading ${activeIndex == 1 ? 'active' : ''}`} ref={(el) => (paragraphRefs.current[1] = el)}
          data-index={1}>
          Storyboard
        </div>


        <div className={`workWillAmaze-heading ${activeIndex == 2 ? 'active' : ''}`} ref={(el) => (paragraphRefs.current[2] = el)}
          data-index={2}>
          Animation
        </div>
        <div className={`workWillAmaze-heading ${activeIndex == 3 ? 'active' : ''}`} ref={(el) => (paragraphRefs.current[3] = el)}
          data-index={3}>
          Video
        </div>
      </div>
      <div className="right-section">
        <div
          fadein=""
          className="example-vid-wrapper vid-sahil"
          style={{ opacity: 1 }}
        >
          <div className="example-vid-embed w-embed">
            <div
              data-setup="{}"
              preload="auto"
              muted="true"
              loop="true"
              autoPlay="true"
              playsInline="true"
              className="video-js vjs-example vjs-rounded vjs-fluid example-2-dimensions vjs-controls-enabled vjs-workinghover vjs-v8 vjs-has-started vjs-paused vjs-user-inactive"
              id="example-2"
              tabIndex={-1}
              lang="en"
              translate="no"
              role="region"
              aria-label="Video Player"
            >
              <video
                id="example-2_html5_api"
                className="vjs-tech"
                playsInline="playsinline"
                preload="auto"
                data-setup="{}"
                tabIndex={-1}
                autoPlay muted
              >
                <source
                  src="https://keyframe-five.vercel.app/vids/sahil-darkest-hour.mp4"
                  type="video/mp4"
                />
                <p className="vjs-no-js">
                  To view this video please enable JavaScript, and consider upgrading to
                  a web browser that
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
              <div className="vjs-poster vjs-hidden" aria-disabled="false" />
              <div className="vjs-title-bar vjs-hidden">
                <div className="vjs-title-bar-title" id="vjs-title-bar-title-27" />
                <div
                  className="vjs-title-bar-description"
                  id="vjs-title-bar-description-28"
                />
              </div>
              <div
                className="vjs-text-track-display"
                translate="yes"
                aria-live="off"
                aria-atomic="true"
              />
              <div className="vjs-loading-spinner" dir="ltr">
                <span className="vjs-control-text">Video Player is loading.</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkWillAmaze;
