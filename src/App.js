import "./App.css";
import Lister from "./components/Lister";
import Questions from "./components/Questions";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Link, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";
function App() {

  const [mode, setmode] = useState("light")

  const [Checked12, setChecked12] = useState([]);
  const [Checked1, setChecked1] = useState([]);
  const [Checked2, setChecked2] = useState([]);
  const [Checked3, setChecked3] = useState([]);
  const [Checked4, setChecked4] = useState([]);
  const [Checked5, setChecked5] = useState([]);
  const [Checked6, setChecked6] = useState([]);
  const [Checked7, setChecked7] = useState([]);
  const [Checked8, setChecked8] = useState([]);
  const [Checked9, setChecked9] = useState([]);
  const [Checked10, setChecked10] = useState([]);
  const [Checked11, setChecked11] = useState([]);
  const [progress, setprogress] = useState(0);



  return (
    <>

      <Router>
        <Navbar mode={mode} setmode={setmode} />
        <Routes>
          <Route
            exact
            path=""
            element={
              <Lister
                setprogress={setprogress}
                progress={progress}
                Checked12={Checked12}
                Checked1={Checked1}
                Checked2={Checked2}
                Checked3={Checked3}
                Checked4={Checked4}
                Checked5={Checked5}
                Checked6={Checked6}
                Checked7={Checked7}
                Checked8={Checked8}
                Checked9={Checked9}
                Checked10={Checked10}
                Checked11={Checked11}
                // Checked10={Checked5}

                name="Array"
                mode={mode}
              />
            }
          ></Route>


        </Routes>
      </Router>
    </>
  );
}

export default App;
