import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Navbar from './components/Navbar';
import Dashboard from './components/NestedRoutes/Dashboard';
import Profil from './components/NestedRoutes/Profil';
import Settings from './components/NestedRoutes/Settings';
import Overview from './components/NestedRoutes/Overview';
import Welcome from './components/Navigate/Welcome';
import Goodbye from './components/Navigate/Goodybe';
import ProductList from './components/DynamicRouting/ProductList';
import Products from './components/DynamicRouting/Products';

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='welcome' element={<Welcome />} />
        <Route path='goodbye' element={<Goodbye />} />

        {/* NESTED ROUTING */}
        <Route path='dashboard' element={<Dashboard />}>
          <Route index element={<Overview />} />
          <Route path='profil' element={<Profil />} />
          <Route path='settings' element={<Settings />} />
        </Route>

        {/* DYNAMIC ROUTING */}
        <Route path='products' element={<ProductList />} />
        <Route path='products/:productId' element={<Products />} />
      </Routes>
    </>
  );
}

export default App;
