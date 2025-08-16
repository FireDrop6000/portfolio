import { Route, HashRouter as Router, Routes } from "react-router";
import MouseGlow from "./components/MouseGlow";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
	return (
		<Router>
			<MouseGlow />
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
		</Router>
	);
};

export default App;
