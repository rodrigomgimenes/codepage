import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Codepage from "./components/Codepage";
// Webpages
import Home from "./components/pages/homepage/Home";
import EmployeeDirectory from "./components/pages/uoftemployeedirectory/EmployeeDirectory";


function App() {
  return (
    <Router>
      <div>
        <Codepage />
        <Route exact path="/" component={Home} />
        <Route exact path="/employee-directory" component={EmployeeDirectory} />
      </div>
    </Router>
  );
}

export default App;
