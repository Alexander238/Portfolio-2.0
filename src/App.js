import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';
import ProjectDetail from './pages/ProjectDetail/ProjectDetail';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects/:id" element={<ProjectDetail />} />
        </Routes>
      </MainLayout>
    </Router>
  );
}

export default App;


// Example of how to add an admin route
/*
  <Route path="/admin" element={
    <AdminLayout>
      <AdminDashboard />
    </AdminLayout>
  } />
*/