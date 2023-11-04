import logo from './logo.svg';
import './App.css';
import './Root.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Hero_Section from './components/Hero_Section';
import Section_2 from './components/Section_2';
import Section_3 from './components/Section_3';
import Section_4 from './components/Section_4';
import Section_5 from './components/Section_5';
import Section_6 from './components/Section_6';
import Section_7 from './components/Section_7';
import Section_8 from './components/Section_8';
import Section_9 from './components/Section_9';
import Section_10 from './components/Section_10';
import Footer_Section from './components/Footer_Section';

function App() {
  return (
    <div className="App overflow-hidden">
      <Hero_Section />
      <Section_2 />
      <Section_3 />
      <Section_4 />
      <Section_5 />
      <Section_6 />
      <Section_7 />
      <Section_8/>
      <Section_9 />
      <Section_10 />
      <Footer_Section/>
    </div>
  );
}

export default App;
