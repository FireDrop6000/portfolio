import { Route, HashRouter as Router, Routes } from "react-router";
import MouseGlow from "./components/MouseGlow";
import NavBar from "./components/NavBar";
import ScrollToTop from "./components/ScrollToTop";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

const App = () => {
	return (
		<Router>
			<ScrollToTop />
			<MouseGlow />
			<NavBar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/projects" element={<Projects />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</Router>
	);
};

export default App;
