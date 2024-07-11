import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Link from 'next/link';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Gathika Colambage <br />
          <h6>Software Engineer</h6>
        </SectionTitle>
        <SectionText>
        As a Full Stack Developer skilled in development, design, and social media marketing, I bring a versatile skill set to any project. I'm currently in my second year of Computer Science at Coventry University, NIBM Sri Lanka.
        </SectionText>
        <Link href="#contact"><Button onClick={props.handleClick} >Contact Me</Button></Link>
      </LeftSection>
    </Section>
  </>
);

export default Hero;