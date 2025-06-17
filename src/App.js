import MainLayout from './layout/MainLayout';
import Home from './pages/Home/Home';

function App() {
  return (
    <MainLayout>
      <Home />
    </MainLayout>
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