import * as React from 'react'
import './ourRecentVideos.css';
import FadeUp from '../Animations/FadeUp';

const OurRecentVideos: React.FC = () => {
  return (
    <div className="ourRecentVideos-container">
      <div className="ourRecentVideos-heading">our recent videos</div>
      <div className="ourRecentVideos-examples">

        <FadeUp
          className="example-vid-wrapper vid-left"
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
        </FadeUp>

        <FadeUp
          fadein=""
          className="example-vid-wrapper vid-center"
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
        </FadeUp>

        <FadeUp
          fadein=""
          className="example-vid-wrapper vid-right"
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
        </FadeUp>
      </div>

    </div>
  )
}

export default OurRecentVideos;
