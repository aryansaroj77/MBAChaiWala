import React from 'react';
import "../styles/section.scss";
import { motion } from "framer-motion"

const Section = ({ h3, text, hasbtn = true, btntxt, imgSrc, imgSize = "70%", backgroundColor, headingColor, textColor, btnBgColor, btnColor }) => { // Fixed the component name to start with a capital letter
  const headingOption = {
    initial: {
      y: "-100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    }
  };

  const textOption = {
    ...headingOption,
    Transition: {
      delay: 0.3,
    }
  }
  const buttonOption = {
    initial: {
      y: "100%",
      opacity: 0,
    },
    whileInView: {
      y: 0,
      opacity: 1,
    },
    Transition: {
      delay: 0.3,
      ease:"easeIn"
    }
  }
  const imgOption = {
    initial: {
      scale:0.1,
      opacity: 0,
    },
    whileInView: {
      scale:1 ,
      opacity: 1,
    },
    Transition: {
      delay: 0.3,
    },
  };

  return (
    <section style={{ backgroundColor }} className='section'>
      <div>

        <motion.h3 data-cursorpointer=
          {true}
          style={{ color: headingColor }}
          {...headingOption}
        >
          {h3}

        </motion.h3>

        <motion.p data-cursorpointer=
          {true}
          style={{ color: textColor }}
          {...textOption}
          >{text}
        </motion.p>

        {hasbtn && <motion.button data-cursorpointer=
          {true}
          {...buttonOption}
          style={{ color: btnColor, backgroundColor: btnBgColor }}>
          {btntxt}</motion.button>}
        <motion.div {...imgOption}>

          <img src={imgSrc} alt="Imgsrc" style={{ width: imgSize }} />

        </motion.div>
      </div>
    </section>
  );
}

export default Section; // Fixed the component name to start with a capital letter
