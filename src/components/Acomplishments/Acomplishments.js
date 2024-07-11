import React, { useEffect, useRef } from 'react';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 25, text: 'Completed academic Projects' },
  { number: 2, text: 'Completed Client Projects' },
  { number: 170, text: 'LinkedIn Connections' },
  { number: 3000, text: 'Hours of Coding Experience' }
];

const Acomplishments = () => {
  const boxesRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.1 }
    );

    boxesRef.current.forEach(box => {
      if (box) observer.observe(box);
    });

    return () => {
      if (boxesRef.current) {
        boxesRef.current.forEach(box => {
          if (box) observer.unobserve(box);
        });
      }
    };
  }, []);

  return (
    <Section>
      <SectionTitle>Personal Achievements</SectionTitle>
      <Boxes>
        {data.map((card, index) => (
          <Box key={index} ref={el => (boxesRef.current[index] = el)}>
            <BoxNum>{`${card.number}+`}</BoxNum>
            <BoxText>{card.text}</BoxText>
          </Box>
        ))}
      </Boxes>
      <SectionDivider />
    </Section>
  );
};

export default Acomplishments;
