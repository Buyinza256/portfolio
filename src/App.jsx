import Banner from './components/Banner';
import NavBar from './components/NavBar';
import './index.css';
import Skills from './components/Skills'

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Skills />
      <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    </div>
  );
}

export default App;
