import Home from './component/Home';

// About--
import About from './component/About';
// Contact--
import Contact from './component/Contact';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Header from './component/include/Header';
import Header2 from './component/include/Header2';
import Footer from './component/include/Footer';
import Lastfooter from './component/include/Lastfooter';

function App() {
  return (

    <BrowserRouter>
      <div>
        <Header />
        <Header2 />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
        <Lastfooter />
      </div>
    </BrowserRouter>

  );
}

export default App;
