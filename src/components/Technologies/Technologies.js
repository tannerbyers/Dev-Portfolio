import React from "react";
import { DiFirebase, DiReact, DiVisualstudio } from "react-icons/di";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  List,
  ListContainer,
  ListItem,
  ListParagraph,
  ListTitle,
} from "./TechnologiesStyles";

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      <br />
      Front-End: HTML, CSS, Sass, Bootstrap, JavaScript, React, React Hooks,
      React Router, Styled Components, Next.js, TypeScript
      <br />
      <br />
      Back-End: NodeJs, Python, Java, MySQL
      <br />
      <br />
      Cloud: AWS Lambda, AWS API Gateway, AWS EC2, AWS Amplify, AWS S3, AWS CDK
      & SDK
    </SectionText>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
