import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../constants";
import { FaArrowLeft } from "react-icons/fa";

const ProjectDetail = () => {
	const { id } = useParams();
	const navigate = useNavigate();
	const project = projects[id];

	if (!project)
		return (
			<div className="flex items-center justify-center min-h-screen bg-primary text-white">
				<h1 className="text-3xl font-bold">Project not found</h1>
			</div>
		);

	return (
		<div className="min-h-screen bg-tertiary text-secondary py-10 px-6 lg:px-20">
			{/* Back Button */}
			<button
				onClick={() => navigate(-1)}
				className="flex items-center text-lg text-secondary hover:text-[#915EFF] transition mb-6"
			>
				<FaArrowLeft className="mr-2" /> Back
			</button>

			<h1 className="text-4xl font-bold lg:text-left">{project.name}</h1>

			<img
				src={project.image}
				alt={project.name}
				className="w-full h-96 object-cover mt-6 rounded-lg shadow-md"
			/>

			<div className="mt-10 max-w-5xl mx-auto">
				<p className="text-lg leading-8 text-secondary">
					{project.description}
				</p>

				{/* Additional details */}
				<div className="mt-6 space-y-4">
					{/* <h2 className="text-3xl font-semibold">Key Features</h2> */}

					<ul className="list-disc list-inside text-gray-300">
						{project.features?.map((feature, index) => (
							<li key={index} className="text-lg">
								{feature}
							</li>
						))}
					</ul>
				</div>
				{project.demos && project.demos.length > 0 && (
					<div className="mt-10">
						<h2 className="text-3xl font-semibold">Demos</h2>
						<div className="grid grid-cols-1 gap-6">
							{project.demos.map((item, index) =>
								item.type === "image" ? (
									<img
										key={index}
										src={item.url}
										alt={`Demo ${index + 1}`}
										className="w-full h-96 object-cover rounded-lg shadow-md"
									/>
								) : (
									<video
										key={index}
										controls
										className="w-full h-96 rounded-lg shadow-md"
									>
										<source src={item.url} type="video/mp4" />
										Your browser does not support the video tag.
									</video>
								)
							)}
						</div>
					</div>
				)}
				{project.technologies_used && project.technologies_used.length > 0 && (
					<div className="mt-10">
						<h2 className="text-3xl font-semibold">Technologies Used</h2>
						<ul className="list-disc list-inside text-secondary">
							{project.technologies_used.map((tech, index) => (
								<li key={index} className="text-lg">
									{tech}
								</li>
							))}
						</ul>
					</div>
				)}

				{/* Call to action */}
				{project.link && (
					<div className="mt-10">
						<a
							href={project.link}
							target="_blank"
							rel="noopener noreferrer"
							className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition"
						>
							View Project
						</a>
					</div>
				)}
			</div>
		</div>
	);
};

export default ProjectDetail;
