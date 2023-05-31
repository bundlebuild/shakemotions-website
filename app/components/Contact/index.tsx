import * as React from 'react';
import './contact.css';
import FadeUp from '../Animations/FadeUp';

const Contact: React.FC = () => {
  return (
    <div className="contact-section">
      <div className="contact-heading">
        Love our work, Hire us!
      </div>
      <div className="contact-form">
        <div className="contact-form-input">
          <input type="text" name="name" placeholder="Name *" />
        </div>

        <div className="contact-form-input">
          <input type="text" name="project_tagline" placeholder="Project Tagline *" />
        </div>

        <div className="contact-form-input">
          <textarea name="project_details" placeholder="Project Details *" style={{ resize: "none", height: 150 }}></textarea>
        </div>

        <div className="contact-form-input">
          <input type="email" name="email" placeholder="Email *" />
        </div>

        <div className="contact-form-footer">
          <div className="btn-embed w-embed">
            <button className="btn primary submit-btn" type="submit">
              <span className="btn-contents">
                <span className="btn-text">Submit</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
