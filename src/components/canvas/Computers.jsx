// import React, { Suspense, useEffect, useState } from "react";
// import { Canvas, useFrame } from "@react-three/fiber";
// import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

// import CanvasLoader from "../Loader";

// const Computers = ({ isMobile }) => {
// 	const computer = useGLTF("./gears/scene.gltf");

// 	// Ref for parent mesh to control rotation
// 	const ref = React.useRef();

// 	// Rotate the parent mesh
// 	useFrame(() => {
// 		if (ref.current) {
// 			ref.current.rotation.y += 0.01; // Adjust speed as needed
// 		}
// 	});

// 	return (
// 		<mesh ref={ref}>
// 			<hemisphereLight intensity={0.15} groundColor="black" />
// 			<spotLight
// 				position={[-20, 50, 10]}
// 				angle={0.12}
// 				penumbra={1}
// 				intensity={1}
// 				castShadow
// 				shadow-mapSize={1024}
// 			/>
// 			<pointLight intensity={1} />
// 			<primitive
// 				object={computer.scene}
// 				scale={isMobile ? 0.0007 : 0.009}
// 				position={isMobile ? [0, -3, -2.2] : [0, -2.25, -5.5]} // Keep position here
// 			/>
// 		</mesh>
// 	);
// };

// const ComputersCanvas = () => {
// 	const [isMobile, setIsMobile] = useState(false);

// 	useEffect(() => {
// 		const mediaQuery = window.matchMedia("(max-width: 500px)");
// 		setIsMobile(mediaQuery.matches);

// 		const handleMediaQueryChange = (event) => {
// 			setIsMobile(event.matches);
// 		};

// 		mediaQuery.addEventListener("change", handleMediaQueryChange);

// 		return () => {
// 			mediaQuery.removeEventListener("change", handleMediaQueryChange);
// 		};
// 	}, []);

// 	return (
// 		<Canvas
// 			frameloop="demand"
// 			shadows
// 			dpr={[1, 2]}
// 			camera={{ position: [20, 3, 5], fov: 25 }}
// 			gl={{ preserveDrawingBuffer: true }}
// 		>
// 			<Suspense fallback={<CanvasLoader />}>
// 				<OrbitControls
// 					enableZoom={false}
// 					maxPolarAngle={Math.PI / 2}
// 					minPolarAngle={Math.PI / 2}
// 				/>
// 				<Computers isMobile={isMobile} />
// 			</Suspense>

// 			<Preload all />
// 		</Canvas>
// 	);
// };

// export default ComputersCanvas;

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from "../Loader";

const Earth = () => {
	const earth = useGLTF("./mech_gears/scene.gltf");

	return (
		<mesh>
			<hemisphereLight intensity={0.15} groundColor="black" />
			<spotLight
				position={[-20, 50, 10]}
				angle={0.12}
				penumbra={1}
				intensity={1}
				castShadow
				shadow-mapSize={1024}
			/>
			<pointLight intensity={1} />
			<primitive
				object={earth.scene}
				scale={0.02}
				position={[0, -3, -5]}
				rotation-y={0}
			/>
		</mesh>
	);
};

const ComputerCanvas = () => {
	return (
		<Canvas
			shadows
			frameloop="demand"
			dpr={[1, 2]}
			gl={{ preserveDrawingBuffer: true }}
			camera={{
				fov: 45,
				near: 0.1,
				far: 200,
				position: [-4, 3, -6],
			}}
		>
			<Suspense fallback={<CanvasLoader />}>
				<OrbitControls
					autoRotate
					enableZoom={false}
					maxPolarAngle={Math.PI / 2}
					minPolarAngle={Math.PI / 2}
				/>
				<Earth />

				<Preload all />
			</Suspense>
		</Canvas>
	);
};

export default ComputerCanvas;

