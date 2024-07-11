import React, { useState, useEffect } from 'react';
import {
  Section,
  SectionDivider,
  SectionTitle
} from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';
import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Img,
  Tag,
  TagList,
  TitleContent,
  UtilityList
} from './ProjectsStyles';

const Projects = () => {
  const [scrollY, setScrollY] = useState(0);

  // Update scrollY state on scroll
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Attach scroll listener
    window.addEventListener('scroll', handleScroll);
    return () => {
      // Cleanup on unmount
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Section nopadding id="projects">
      <SectionDivider />
      <SectionTitle main>Projects</SectionTitle>
      <GridContainer>
        {projects.map((p, i) => (
          <BlogCard
            key={i}
            style={{ opacity: scrollY > 200 ? 1 : scrollY / 200 }}
          >
            <Img src={p.image} />
            <TitleContent>
              <HeaderThree title>{p.title}</HeaderThree>
              <Hr />
            </TitleContent>
            <CardInfo>{p.description}</CardInfo>
            <div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {p.tags.map((t, i) => (
                  <Tag key={i}>{t}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks href={p.visit}>Code</ExternalLinks>
              <ExternalLinks href={p.source}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
  );
};

export default Projects;
