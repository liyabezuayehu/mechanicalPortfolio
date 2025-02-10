import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { Link } from "react-router-dom";
import { FaLink, FaBook } from "react-icons/fa";

const ProjectCard = ({
	index,
	name,
	description,
	tags,
	image,
	source_code_link,
}) => {
	  const [isHovered, setIsHovered] = React.useState(false);

	return (
		<div className="bg-tertiary p-5 rounded-2xl sm:w-[320px] w-full">
			<div className="relative w-full h-[230px]">
				<img
					src={image}
					alt="project_image"
					className="w-full h-full object-contain rounded-2xl"
				/>
				{source_code_link && (
					<div className="absolute inset-0 flex justify-end m-3 card-img_hover">
						<div
                className="relative"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
              >
                {/* Tooltip */}
                {isHovered && (
                  <div className="absolute -top-10 right-0 bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
                    View Publication
                  </div>
                )}
						<div
							onClick={(e) => {
								e.stopPropagation(); // Prevent navigation
								window.open(source_code_link, "_blank");
							}}
							className="bg-[#915EFF] w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
						>
							<FaBook className="w-1/2 h-1/2 " />
						</div>
					</div>
					</div>
				)}
			</div>
			<Link to={`/project/${index}`} className="block">
				<div className="mt-5">
					<h3
						style={{ color: "#524f51" }}
						className="text-secondary text-white font-bold text-[24px]"
					>
						{name}
					</h3>
					<p className="mt-2 text-secondary text-[14px] text-justify">
						{description}
					</p>
				</div>

				<div className="mt-4 flex flex-wrap gap-2">
					{tags.map((tag) => (
						<p
							key={`${name}-${tag.name}`}
							className={`text-[14px] ${tag.color}`}
						>
							#{tag.name}
						</p>
					))}
				</div>
			</Link>
		</div>
	);
};

const Works = () => {
	return (
		<>
			<p className={`${styles.sectionSubText} `}>My work</p>
			<h2 className={`${styles.sectionHeadText}`}>
				Projects and Publications.
			</h2>

			<div className="w-full flex text-justify">
				Here are a couple of projects and publications that showcase my skills
				and experience through real-world examples of my work. Each project is
				briefly described including the technologies used.
			</div>

			<div className="mt-20 flex flex-wrap gap-7">
				{projects.map((project, index) => (
					<ProjectCard key={`project-${index}`} index={index} {...project} />
				))}
			</div>
		</>
	);
};

export default SectionWrapper(Works, "");
