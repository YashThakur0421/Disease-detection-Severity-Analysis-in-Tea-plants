import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FrontPage from "./Pages/FrontPage";
import Upload from "./Pages/Upload";
import Home from "./Pages/Home";
import Marketplace from "./Pages/Marketplace";
import Help from "./Pages/Help";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/home" element={<Home />} />
          <Route path="/upload" element={<Upload />} />
          <Route path="/marketplace" element={<Marketplace />} />
          {/* Add other routes as needed */}
          <Route path="/help" element={<Help/>}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;


// import React from "react";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import FrontPage from "./Pages/FrontPage";
// import Upload from "./Pages/Upload"; // New
// import Severity from "./Pages/Severity"; // New
// import Remedies from "./Pages/Remedies"; // New
// import History from "./Pages/History"; // New
// import About from "./Pages/About"; // New
// import Contact from "./Pages/Contact"; // New
// import Help from "./Pages/Help";
// import 'bootstrap/dist/css/bootstrap.min.css';

// function App() {
//   return (
//     <Router>
//       <div className="app">
//         <Routes>
//           <Route path="/" element={<FrontPage />} />
//           <Route path="/upload" element={<Upload />} />
//           <Route path="/severity" element={<Severity />} />
//           <Route path="/remedies" element={<Remedies />} />
//           <Route path="/history" element={<History />} />
//           <Route path="/about" element={<About />} />
//           <Route path="/contact" element={<Contact />} />
//           <Route path="/help" element={<Help />} />
//         </Routes>
//       </div>
//     </Router>
//   );
// }

// export default App;
