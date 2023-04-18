import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  GothicLink,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
// import { TimeLineData } from "../../constants/constants";

// const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  useEffect(() => {
    const handleResize = () => {
      scroll(carouselRef.current, 0);
    };

    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Section id="about">
      <SectionTitle>About</SectionTitle>
      <SectionText>
        <br />
        Tanner&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;North
        Florida&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <br />
        <br />
        I enjoy coding in javascript libraries and frameworks but am comfortable
        coding in most languages. I also enjoy building with IaaC tools (like
        AWS CDK).
        <br />
        <br />I currently am working on{" "}
        <GothicLink href="https://pushenhance.com/" target="_blank">
          www.pushenhance.com
        </GothicLink>
        . It is a push notifications SaaS that uses Chat-GPT to create
        notification text and scheduling.
        <br />
        <br />
        When I'm not working, I'm usually coding personal projects, taking care
        of my family and animals (we've got goats, chickens, ducks, and
        rabbits), or playing games with friends online.
        <br />
        <br />
      </SectionText>
      <SectionDivider />
      <SectionTitle>
        <br />
        Work Experience
      </SectionTitle>
      <SectionText>
        <GothicLink
          style={{ color: "white", fontWeight: "bold" }}
          href="https://lime-willetta-93.tiiny.site/"
          target="_blank"
        >
          Resume
        </GothicLink>
      </SectionText>
      <SectionText>
        - Working as a Cloud App Developer at{" "}
        <GothicLink href="https://aws.amazon.com/" target="_blank">
          AWS
        </GothicLink>{" "}
        (2023)
        <br />
        <br />- Worked as a Full-Stack Developer at{" "}
        <GothicLink href="https://www.glidian.com" target="_blank">
          Glidian
        </GothicLink>{" "}
        (2022)
        <br />
        <br />- Worked as a Software Engineer at{" "}
        <GothicLink href="https://www.availity.com" target="_blank">
          Availity
        </GothicLink>{" "}
        (2020-2022)
        <br />
      </SectionText>
      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={index === TOTAL_CAROUSEL_COUNT - 1}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>
                  {`${item.year}`}
                  <CarouselItemImg
                    width="208"
                    height="6"
                    viewBox="0 0 208 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M2.5 5.5C3.88071 5.5 5 4.38071 5 3V3.5L208 3.50002V2.50002L5 2.5V3C5 1.61929 3.88071 0.5 2.5 0.5C1.11929 0.5 0 1.61929 0 3C0 4.38071 1.11929 5.5 2.5 5.5Z"
                      fill="url(#paint0_linear)"
                      fillOpacity="0.33"
                    />
                    <defs>
                      <linearGradient
                        id="paint0_linear"
                        x1="-4.30412e-10"
                        y1="0.5"
                        x2="208"
                        y2="0.500295"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="white" />
                        <stop
                          offset="0.79478"
                          stopColor="white"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>
                  </CarouselItemImg>
                </CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => {
          return (
            <CarouselButton
              key={index}
              index={index}
              active={activeItem}
              onClick={(e) => handleClick(e, index)}
              type="button"
            >
              <CarouselButtonDot active={activeItem} />
            </CarouselButton>
          );
        })}
      </CarouselButtons> */}
    </Section>
  );
};

export default Timeline;
