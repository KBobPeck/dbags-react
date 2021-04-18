import logo from './logo.svg';
import './styles/style.css';
import Sidebar from './Components/Sidebar/Sidebar'
import Navbar from './Components/Main/Navbar'
import About from './Components/Main/About'
import Dashboard from './Components/Main/Dashboard';
import { MemoryRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <MemoryRouter>
      <div className="siteContainer">
        <Sidebar />
        <div className="main">
          <Navbar />
            {/* Changes the page to the current tab */}
            <Switch>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/">
              <Dashboard />
            </Route>
          </Switch>
        </div>
      </div>
    </MemoryRouter>
  );
}

export default App;
