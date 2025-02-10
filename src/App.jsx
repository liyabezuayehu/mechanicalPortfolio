import { BrowserRouter, Routes, Route } from "react-router-dom";
import {
	About,
	Contact,
	Education,
	Experience,
	Feedbacks,
	Hero,
	Navbar,
	Works,
	ProjectDetail,
	ScrollToTop
} from "./components";

import { FaEnvelope, FaLink } from "react-icons/fa";

// Layout Component for Main Pages
const Layout = () => {
	return (
		<div className="relative z-0 bg-primary">
			<div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
				<Navbar />
				<Hero />
			</div>
			<About />
			<Education />
			<Experience />
			<Works />
			<Feedbacks />
			<Contact />

			{/* Footer */}
			<footer className="bg-secondary text-white py-6 mt-10 text-center">
				<p className="text-md font-semibold">Developer Contact</p>
				<div className="flex justify-center gap-6 mt-3">
					<a
						href="mailto:samrawitguangulb@gmail.com"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaEnvelope className="text-2xl hover:text-gray-400" />
					</a>
					<a
						href="https://linktr.ee/Samrawit_Guangul"
						target="_blank"
						rel="noopener noreferrer"
					>
						<FaLink className="text-2xl hover:text-gray-400" />
					</a>
				</div>
			</footer>
		</div>
	);
};

const App = () => {
	return (
		<BrowserRouter>
			<div className="relative z-0 bg-primary">
				<ScrollToTop></ScrollToTop>
				<Layout></Layout>
				{/* <Routes> */}
					{/* <Route path="/" element={<Layout />} />{" "} */}
					{/* Home Page with Full Layout */}
					{/* <Route path="/project/:id" element={<ProjectDetail />} />{" "} */}
					{/* Detail Page (Standalone) */}
				{/* </Routes> */}
			</div>
		</BrowserRouter>
	);
};

export default App;
