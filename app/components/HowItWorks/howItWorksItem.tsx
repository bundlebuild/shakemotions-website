//@ts-nocheck
import React from 'react'
import Link from 'next/link'
import './howItWorks.css';

export const WorkContainer: React.FC = ({ children }) => (
  <div className="work-container">
    {children}
  </div>
)

export const WorkBackground: React.FC = () => (
  <div className="work-background-container">
    <div className="work-background-blck bg-black h-[30vh] lg:h-auto"></div>
    <div className="work-background-white bg-white h-[70vh] lg:min-h-screen"></div>
  </div>
)

export const WorkLeft: React.FC<{ progress: number }> = ({
  children,
  progress
}) => {
  let translateY = Math.max(0, 50 - progress * 3 * 50);
  if (progress > 0.85) translateY = Math.max(-50, -(progress - 0.85) * 2 * 50)

  return (
    <div className="work-left" style={{
      transform: `translateY(${translateY}px)`
    }}>
      <div className="work-left-content">
        {children}
      </div>
    </div>
  )
}

export const WorkRight: React.FC<{ progress: number }> = ({
  children,
  progress
}) => {
  let translateY = Math.max(-50, -(progress - 0.5) * 50)
  return (
    <div className="work-right" style={{
      transform: `translateY(${translateY}px)`
    }}>
      <div className="work-right-content">
        {children}
      </div>
    </div>
  )
}
