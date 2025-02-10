import {
	mobile,
	backend,
	creator,
	web,
	javascript,
	typescript,
	html,
	css,
	reactjs,
	redux,
	tailwind,
	nodejs,
	mongodb,
	git,
	figma,
	docker,
	meta,
	starbucks,
	tesla,
	shopify,
	carrent,
	jobit,
	tripguide,
	threejs,
	plane_1,
	nozzle,
	delivery_drone,
	sailplane,
	edu_profile,
	amanuel,
	drone_video,
	drone_des1,
	drone_des2,
	drone_des3,
} from "../assets";

export const navLinks = [
	{
		id: "about",
		title: "About",
	},
	{
		id: "work",
		title: "Work",
	},
	{
		id: "contact",
		title: "Contact",
	},
];

// const services = [
//   {
//     title: "Web Developer",
//     icon: web,
//   },
//   {
//     title: "React Native Developer",
//     icon: mobile,
//   },
//   {
//     title: "Backend Developer",
//     icon: backend,
//   },
//   {
//     title: "Content Creator",
//     icon: creator,
//   },
// ];

const technologies = [
	{
		name: "HTML 5",
		icon: html,
	},
	{
		name: "CSS 3",
		icon: css,
	},
	{
		name: "JavaScript",
		icon: javascript,
	},
	{
		name: "TypeScript",
		icon: typescript,
	},
	{
		name: "React JS",
		icon: reactjs,
	},
	{
		name: "Redux Toolkit",
		icon: redux,
	},
	{
		name: "Tailwind CSS",
		icon: tailwind,
	},
	{
		name: "Node JS",
		icon: nodejs,
	},
	{
		name: "MongoDB",
		icon: mongodb,
	},
	{
		name: "Three JS",
		icon: threejs,
	},
	{
		name: "git",
		icon: git,
	},
	{
		name: "figma",
		icon: figma,
	},
	{
		name: "docker",
		icon: docker,
	},
];

const experiences = [
	{
		title: "R&D Engineer, Co-op",
		company_name: "Schaeffler, Canada",
		icon: starbucks,
		iconBg: "#804dee",
		date: "Nov. 2024 - Present",
		points: [
			"Designed fixtures using CATIA to support manufacturing and assembly processes.",
			"Collaborated with cross-functional teams to support product development and validation processes.",
		],
	},
	{
		title: "R&D Engineering Student, Co-op",
		company_name: "Vitesco Technologies",
		icon: starbucks,
		iconBg: "#804dee",
		date: "Sep. 2024 - Nov. 2024",
		points: [
			"Coordinate and analyze performance and durability testing on products.",
			"Write reports and present information on test results, product analysis, and advanced technology studies.",
		],
	},
	{
		title: "AutoCAD Intern",
		company_name: "Verzo",
		icon: starbucks,
		iconBg: "#804dee",
		date: "Feb. 2022 - Apr. 2022",
		points: [
			"Utilized AutoCAD to implement industry standards, ensuring precision and compliance in designs.",
			"Worked closely with the design team to conceptualize and create engineering plans and layouts, contributing to collaborative project development.",
		],
	},
	{
		title: "Academic Assistant",
		company_name: "Growth Central VC",
		icon: starbucks,
		iconBg: "#804dee",
		date: "Jun. 2021 - Feb. 2022",
		points: [
			"Provided comprehensive instruction in Mathematics and Physics to secondary school students, employing various teaching methodologies to enhance learning outcomes.",
			"Enhanced the quality of online learning materials through the generation of insightful content and the refinement of existing resources.",
		],
	},
	{
		title: "Research Assistant",
		company_name: "Jain University",
		icon: starbucks,
		iconBg: "#804dee",
		date: "Aug. 2021 - Sep. 2021",
		points: [
			"Conducted Computational Fluid Dynamics (CFD) analysis on CAD models of various components to study streamlined aerodynamics.",
			"Served as an assistant researcher, working alongside my supervisor on the design of a sailplane using CATIA.",
		],
	},
];

const education = [
	{
		title: "B.Tech in Aerospace Engineering",
		company_name: "Jain University",
		icon: starbucks, // Replace with the appropriate icon
		iconBg: "#804dee",
		date: "Sep. 2019 – Jun. 2023",
		points: [
			"Full scholarship by Study In India government worth $13,500",
			"Valedictorian (9.1/10)",
		],
	},
	{
		title: "MEng in Mechanical Engineering (CO-OP)",
		company_name: "University of Ottawa",
		icon: starbucks, // Replace with the appropriate icon
		iconBg: "#804dee",
		date: "Sep. 2023 – Present",
		points: [
			"Expected graduation date: 2025",
			"Course Overview: Advanced Topics in Advanced Material and Manufacturing, Nanomaterials, Industrial Organization, Communication and Influence for Engineers, Surface Coating, Professional Skills & Responsibility, Manufacturing System Analysis",
		],
	},
];

const testimonials = [
	{
		testimonial:
			"Throughout our time together, I was particularly impressed by her proactive approach to learning and her unwavering determination to tackle challenges head-on. Liya is an effective communicator and a team player, making her a valuable collaborator in any engineering project. Her ability to lead and inspire others is a testament to her strong character.",
		name: "Amanuel Terefe",
		designation: "Associate Researcher",
		company: "Bio and Emerging Technology Institute - BETin",
		image: amanuel,
	},
	{
		testimonial:
			"I collaborated with Liya on a medical delivery drone project, where she brought a range of valuable skills to the team. As a space enthusiast, Liya is both ambitious and hardworking. Her graduation project on medical drones clearly reflects her innovative mindset and dedication.",
		name: "Eden Gebremeskel",
		designation: "Incoming Analyst",
		company: "Goldman Sachs",
		image: edu_profile,
	},
];

const projects = [
	{
		name: "Design of High-Performance Sailplane",
		description:
			"Contributed to the sailplane project as a member of the Aerodynamics and Geometry Group (AGG) at IIAEM Jain University. Developed an improved methodology for winglet design, utilizing CAD software for detailed modeling and analysis. Collaborated with the Weight Estimation group to establish the sailplane's weight distribution, considering various weights and the position of the center of gravity.",
		tags: [
			{
				name: "CAD",
				color: "blue-text-gradient",
			},
			{
				name: "Aerodynamics",
				color: "green-text-gradient",
			},
			{
				name: "Geometry Design",
				color: "pink-text-gradient",
			},
		],
		image: sailplane,
		// source_code_link: "https://github.com/",
		technologies_used: ["CAD Software - Winglet Design & Modeling"],
	},
	{
		// id: 1,
		name: "Design and Geometrical Optimization of Nozzle to Reduce Noise for Jet Engine",
		description:
			"Focused on the use of chevron nozzles as a potential solution for jet noise reduction. Conducted computational analysis by importing 3D models of chevron and convergent nozzles into ANSYS to evaluate their performance in reducing jet noise.",
		tags: [
			{
				name: "ANSYS",
				color: "blue-text-gradient",
			},
			{
				name: "Jet Noise Reduction",
				color: "green-text-gradient",
			},
			{
				name: "Publication",
				color: "pink-text-gradient",
			},
		],
		image: nozzle,
		source_code_link:
			"https://iopscience.iop.org/article/10.1149/10701.1529ecst/pdf",
		technologies_used: [
			"ANSYS - Computational Analysis for Jet Noise Reduction",
		],
	},
	{
		// id: 2,
		name: "Vertical Take-off and Landing Fixed Wing UAS",
		description:
			"Successfully integrated vertical take-off and landing (VTOL) capabilities with fixed-wing flight efficiency to meet project objectives. Utilized Fusion 360 and XFLR 5 for detailed design, ensuring aerodynamic performance and structural integrity. Conducted performance testing using MATLAB and eCALC, analyzing flight dynamics and efficiency to validate design efficiency.",
		tags: [
			{
				name: "Fusion 360",
				color: "blue-text-gradient",
			},
			{
				name: "XFLR 5",
				color: "green-text-gradient",
			},
			{
				name: "MATLAB",
				color: "pink-text-gradient",
			},
		],
		image: plane_1,
		// source_code_link: "https://github.com/",
		technologies_used: [
			"Fusion 360 - Conceptual Sketch & Modelling",
			"XFLR5 - Aerodynamic Performance Analysis",
		],
	},
	{
		// id: 3,
		name: "Medical Delivery Drone",
		description:
			"Designed a drone capable of vertical take-off and landing, operating efficiently in fixed-wing mode during the mission. The research analyzes various drone models, such as fixed-wing and rotary-wing drones, and proposes a hybrid design combining the advantages of both types.",
		tags: [
			{
				name: "Drone Design",
				color: "blue-text-gradient",
			},
			{
				name: "Hybrid Systems",
				color: "green-text-gradient",
			},
			{
				name: "Publication",
				color: "pink-text-gradient",
			},
		],
		image: drone_des1,
		source_code_link: "https://www.doi.org/10.56726/IRJMETS31972",
		technologies_used: [
			"XFLR5",
			"Fusion 360 - Conceptual Sketch & Modelling",
			"Ansys - Aerodynamics and Structural Analysis",
			"MATLAB",
		],
		demos: [
			{ type: "image", url: drone_des1 },
			{ type: "image", url: drone_des2 },
			{ type: "image", url: drone_des1 },
			{ type: "video", url: drone_video },
		],
	},
];

export { education, technologies, experiences, testimonials, projects };
