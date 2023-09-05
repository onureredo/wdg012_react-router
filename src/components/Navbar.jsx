import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
  let navigate = useNavigate();

  function handleLogin() {
    setTimeout(() => {
      navigate('welcome');
    }, 2000);
  }

  function handleLogout() {
    navigate('goodbye');
  }

  return (
    <nav>
      <ul>
        <li>
          <NavLink to='' activeClassName='active'>
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink to='about' activeClassName='active'>
            ABOUT US
          </NavLink>
        </li>
        <li>
          <NavLink to='dashboard' activeClassName='active'>
            DASHBOARD
          </NavLink>
        </li>
        <li>
          <NavLink to='dashboard/profil' activeClassName='active'>
            PROFIL
          </NavLink>
        </li>
        <li>
          <NavLink to='dashboard/settings' activeClassName='active'>
            SETTINGS
          </NavLink>
        </li>
        <li>
          <NavLink to='products' activeClassName='active'>
            STORE
          </NavLink>
        </li>
        <button onClick={handleLogin}>LOGIN</button>
        <button onClick={handleLogout}>LOGOUT</button>
      </ul>
    </nav>
  );
}

export default Navbar;
