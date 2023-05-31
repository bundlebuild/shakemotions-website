import * as React from 'react'
import './howItWorks.css';
import HiwItem from './how-it-works-item';

const HowItWorksV2: React.FC = () => {
  return (
    <div className="how-it-works-container" id="howto">
      <div className="how-it-works-section">
        <HiwItem number={1} heading="Let's talk" subHeading="Let’s discuss your vision, let’s spark up ideas." />
        <HiwItem number={2} heading="We'll work" subHeading="We'll start working on this vision, and make it a reality." />
        <HiwItem number={3} heading="Satisfied?" subHeading="We'll revise, and change. to your satisfaction." />

      </div>

      <div className="how-it-works-footer">
        <button className="btn primary"><span className="btn-contents"><span className="btn-text">Book an Intro Call</span></span></button>
      </div>
    </div>
  )


}

export default HowItWorksV2;
