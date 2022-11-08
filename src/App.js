import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Cta from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";

const App = () => {
	return (
		<>
			<Header />
			<main>
				<Features />
				<Cta />
			</main>
			<Footer />
		</>
	);
};

export default App;
