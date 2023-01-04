import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const Wrapper = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100vw;
	height: 100vh;
`;

const Box = styled(motion.div)`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	width: 200px;
	height: 200px;
	border-radius: 40px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: rgba(255, 255, 255, 0.2);
`;

const Circle = styled(motion.div)`
	width: 70px;
	height: 70px;
	border-radius: 35px;
	box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
	background-color: white;
	place-self: center;
`;

const boxVariants = {
	start: {
		opacity: 0,
		scale: 0.5,
	},
	end: {
		scale: 1,
		opacity: 1,
		transition: {
			type: "spring",
			duration: 0.5,
			bounce: 0.5,
			delayChildren: 0.5,
			staggerChildren: 0.2,
		},
	},
};

const circleVariants = {
	start: {
		opacity: 0,
		y: 10,
	},
	end: {
		opacity: 1,
		y: 0,
	},
};

function App() {
	return (
		<Wrapper>
			<Box variants={boxVariants} initial="start" animate="end">
				<Circle variants={circleVariants} />
				<Circle variants={circleVariants} />
				<Circle variants={circleVariants} />
				<Circle variants={circleVariants} />
			</Box>
		</Wrapper>
	);
}

export default App;
