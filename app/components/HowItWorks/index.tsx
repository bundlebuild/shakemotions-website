"use client"
import * as React from 'react'
import './howItWorks.css';
import { Tile, TileBackground, TileContent, TileContext, TileWrapper } from '../Tile';
import { WorkBackground, WorkContainer, WorkLeft, WorkRight } from './howItWorksItem';

const HowItWorks: React.FC = () => {
  return (
    <TileWrapper numOfPages={3}>
      <TileBackground>
        <WorkBackground />
      </TileBackground>
      <TileContent>
        <Tile
          page={0}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="work-heading">Let's Talk</div>
                <div className="work-subheading">Let’s discuss your vision, let’s spark up ideas.</div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <svg width="250" height="250" viewBox="0 0 107 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" width="102" height="98" rx="49" fill="#BABABA" fill-opacity="0.5" />
                  <rect y="3" width="98" height="98" rx="49" fill="white" />
                  <path d="M51.9623 75V36.188H50.9703L43.8403 50.82H36.9583L46.5683 31.6H58.4723V75H51.9623Z" fill="black" />
                </svg>
              </WorkRight>
            </WorkContainer>
          )}></Tile>

        <Tile
          page={1}
          renderContent={({ progress }) => (
            <WorkContainer>
              <WorkLeft progress={progress}>
                <div className="work-heading">Let's Talk</div>
                <div className="work-subheading">Let’s discuss your vision, let’s spark up ideas.</div>
              </WorkLeft>
              <WorkRight progress={progress}>
                <svg width="250" height="250" viewBox="0 0 107 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="5" width="102" height="98" rx="49" fill="#BABABA" fill-opacity="0.5" />
                  <rect y="3" width="98" height="98" rx="49" fill="white" />
                  <path d="M51.9623 75V36.188H50.9703L43.8403 50.82H36.9583L46.5683 31.6H58.4723V75H51.9623Z" fill="black" />
                </svg>
              </WorkRight>
            </WorkContainer>
          )}></Tile>

      </TileContent>
    </TileWrapper>
  )
}

export default HowItWorks;
