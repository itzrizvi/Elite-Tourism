import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import AuthProvider from './context/AuthProvider';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import Home from './Pages/Home/Home/Home';
import PackageDetails from './Pages/Home/PackageDetails/PackageDetails';
import Login from './Pages/Login/Login';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

// Main APP Component and Router Setup
function App() {
  return (
    <>
      {/* Routing With Auth Provider */}
      <AuthProvider>
        <BrowserRouter>

          <Header></Header>

          <Switch>

            <Route exact path='/'>
              <Home></Home>
            </Route>
            <Route path='/home'>
              <Home></Home>
            </Route>

            <Route path='/about'>
              <About></About>
            </Route>

            <Route path='/contact'>
              <Contact></Contact>
            </Route>

            {/* Private Rout */}
            <PrivateRoute path="/packagedetails/:packageID">
              <PackageDetails></PackageDetails>
            </PrivateRoute>

            <Route path='/login'>
              <Login></Login>
            </Route>

          </Switch>

          <Footer></Footer>

        </BrowserRouter>
      </AuthProvider>
    </>
  );
}

export default App;
