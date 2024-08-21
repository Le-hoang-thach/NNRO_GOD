import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Home from './pages/Home';
import Register from './pages/Register';
import Dowload from './pages/Dowload';
import Login from './pages/Login';
import { AudioProvider } from './components/AudioContext'; 

function App() {
  return (
    <AudioProvider> {/* Wrap the routes with AudioProvider */}
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dowload" element={<Dowload />} />
          <Route path="/" element={<Home />} /> {/* Default route */}
        </Routes>
      </BrowserRouter>
    </AudioProvider>
  );
}

export default App;
