import * as React from 'react'
import './ourProject.css';
import Image from 'next/image';

interface Props {
  image: String,
  name: String,
}

const ProjectCard: React.FC = (props: Props) => {
  return (
    <div className="project-card">
      <div className="project-image">
        <img src={props.image} />
      </div>
      <div className="project-heading">
        {props.name}
      </div>
      <div className="project-cta">
        <div className="btn-embed w-embed">
          <button
            className="btn primary"
          >
            <span className="btn-contents">
              <span className="btn-text">View More</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard;
