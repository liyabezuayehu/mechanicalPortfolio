import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
// import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
//   <Tilt className='xs:w-[250px] w-full'>
//     <motion.div
//       variants={fadeIn("right", "spring", index * 0.5, 0.75)}
//       className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
//     >
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
    // </motion.div>
//   </Tilt>
);

const About = () => {
  return (
		<>
			{/* <motion.div variants={textVariant()}> */}
			<p className={styles.sectionSubText}>Introduction</p>
			<h2 className={styles.sectionHeadText}>Overview.</h2>
			{/* </motion.div> */}

			<p className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] text-justify">
				Hey there, and thanks for stopping by! I’ve always had fun with numbers,
				which is probably why I became an engineer. There’s something exciting
				about making things fly against gravity, creating models, and bringing
				them to life from scratch. I graduated as the valedictorian in my B.Tech
				Aerospace Engineering and went on to earn my M.Eng. in Mechanical
				Engineering at the University of Ottawa. Along the way, I picked up a
				few scholarships, tackled exciting projects, and honed my skills in CAD,
				CAE, and engineering analysis.
				<br />
				
			</p>

			{/* <div className="mt-20 flex flex-wrap gap-10">
				{services.map((service, index) => (
					<ServiceCard key={service.title} index={index} {...service} />
				))}
			</div> */}
		</>
	);
};

export default SectionWrapper(About, "about");
