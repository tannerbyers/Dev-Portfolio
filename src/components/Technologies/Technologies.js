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
      Front-End: <br />
      Essentials: HTML5, CSS3, Javascript (ES6) <br />
      Styling: Sass, Bootstrap, Tailwind, Styled-Components <br />
      Libaries: React, React Hooks, React Router, Next.js, TypeScript
      <br />
      <br />
      Back-End: Node.js, Express.js, Python, Java
      <br />
      <br />
      Data: My SQL, Postgre SQL, MongoDB, DynamoDB, Redis
      <br />
      <br />
      Cloud: AWS Lambda, AWS API Gateway, AWS EC2, AWS Amplify, AWS CDK & SDK
    </SectionText>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
