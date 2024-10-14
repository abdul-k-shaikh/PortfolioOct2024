import Header from "./components/Header/Header";
import css from './styles/app.module.scss'
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Works from "./components/Works/works";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

const App = () => <div className={`bg-primary ${css.container}`}>
  <Header />
  <Hero />
  <Experties />
  <Works />
  {/* Commenting below component as of now, in future i can enable */}
  {/* <Portfolio/> */}
  <Footer />
</div>;
export default App;
