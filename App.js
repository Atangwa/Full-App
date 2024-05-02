 
import './App.css';
import { WheatherApp } from './componnent/WheatherApp/WheatherApp';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import LoginPage from './componnent/LoginPage/LoginPage'


function App() {
  return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<LoginPage/>} />
            <Route path="/WeatherApp" element={<WheatherApp/>} />
          </Routes>
        </div>
      </Router>
  );
}

export default App;
