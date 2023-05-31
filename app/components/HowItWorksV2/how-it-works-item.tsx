//@ts-nocheck
import * as React from 'react'
import './howItWorksItemStyles.css';
import FadeUp from '../Animations/FadeUp'
import Image from 'next/image';

interface Props {
  number: Number,
  heading: String,
  subHeading: String
}

const HiwItem: React.FC = (props: Props) => {
  return (
    <FadeUp className="how-it-works-item">
      <FadeUp className="hiw-content">
        <div className="hiw-number">
          {props.number}
        </div>
        <div className="hiw-heading">
          {props.heading}
        </div>
        <div className="hiw-subheading">
          {props.subHeading}
        </div>
      </FadeUp>
    </FadeUp>
  )
}

export default HiwItem;
