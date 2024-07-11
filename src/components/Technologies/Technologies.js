import React, { useEffect, useRef } from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () => {
  const listRef = useRef([]);

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

    listRef.current.forEach(item => {
      if (item) observer.observe(item);
    });

    return () => {
      if (listRef.current) {
        listRef.current.forEach(item => {
          if (item) observer.unobserve(item);
        });
      }
    };
  }, []);

  return (
    <Section id="tech">
      <SectionDivider divider />
      <SectionTitle>Technologies</SectionTitle>
      <SectionText>
        I've worked with a range of technologies in the web development world.
        From Back-end to Design
      </SectionText>
      <List>
        {[
          { icon: <DiReact size="3rem" />, title: "Front-End", text: "Experience with React.js, Flutter, JQuery" },
          { icon: <DiFirebase size="3rem" />, title: "Back-End", text: "Experience with Node.js, Express, PHP and Databases" },
          { icon: <DiZend size="3rem" />, title: "UI/UX", text: "Experience with tools like Figma" },
        ].map((item, index) => (
          <ListItem key={index} ref={el => (listRef.current[index] = el)}>
            <picture>{item.icon}</picture>
            <ListContainer>
              <ListTitle>{item.title}</ListTitle>
              <ListParagraph>{item.text}</ListParagraph>
            </ListContainer>
          </ListItem>
        ))}
      </List>
      <SectionDivider colorAlt />
    </Section>
  );
};

export default Technologies;
