import React from "react";
import { GrDocumentPdf } from "react-icons/gr";
import { IconContext } from "react-icons";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = ({ handleClick }) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hi, I'm Tanner
        </SectionTitle>
        <SectionText>
          I'm a Full-Stack Developer w/ a focus in React, Node, and AWS Cloud.
          <br />
        </SectionText>
        <a
          target="_blank"
          href="mailto:programtanner@gmail.com?subject=Saw your portfolio website and would like to speak with you!"
        >
          <Button onClick={handleClick}>Contact me</Button>
        </a>
        <br />
      </LeftSection>
    </Section>
  </>
);

export default Hero;
