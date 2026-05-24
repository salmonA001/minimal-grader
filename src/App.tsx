import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Problemset from './pages/Problemset';
import Submissions from './pages/Submissions';
import Classes from './pages/Classes';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="problemset" element={<Problemset />} />
          <Route path="submissions" element={<Submissions />} />
          <Route path="classes" element={<Classes />} />
          <Route path="login" element={<Login />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
