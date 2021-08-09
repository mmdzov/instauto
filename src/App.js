import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import Instauto from "./containers/Instauto";
import 'antd/dist/antd.css';

function App() {
  return (
    <Router>
      <Instauto />
    </Router>
  );
}

export default App;
