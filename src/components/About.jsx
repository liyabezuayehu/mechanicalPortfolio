import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='xs:w-[250px] w-full'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='web-development'
          className='w-16 h-16 object-contain'
        />

        <h3 className='text-white text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
		<>
			<motion.div variants={textVariant()}>
				<p className={styles.sectionSubText}>Introduction</p>
				<h2 className={styles.sectionHeadText}>Overview.</h2>
			</motion.div>

			<motion.p
				variants={fadeIn("", "", 0.1, 1)}
				className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
			>
				Hello, and welcome to my portfolio website! I’m a dedicated engineering
				professional with an M.Eng. in Mechanical Engineering from the
				University of Ottawa. I graduated as the valedictorian, securing 1st
				rank in B.Tech Aerospace Engineering. I was also honored with the
				Erasmus Mundus STRAINS scholarship and a full SII scholarship for my
				academic performance.
				<br />
				<br />I have strong skills in CAD and CAE tools like AutoCAD, CATIA V5,
				and Ansys Fluent, along with a problem-solving mindset developed through
				hands-on engineering projects. My experience spans engineering,
				marketing, and operations, where I've honed my organization,
				communication, and teaching abilities. I'm passionate about simplifying
				complex ideas and making learning engaging.
				<br />
				<br />
				Feel free to explore my work and get in touch!
			</motion.p>

			{/* <div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div> */}
		</>
	);
};

export default SectionWrapper(About, "about");
