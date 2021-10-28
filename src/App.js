import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Home from './Pages/Home/Home/Home';
import Footer from './Pages/Shared/Footer/Footer';
import Header from './Pages/Shared/Header/Header';

// Main APP Component and Router Setup
function App() {
  return (
    <>
      <BrowserRouter>

        <Header></Header>

        <Switch>

          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path='/home'>
            <Home></Home>
          </Route>

        </Switch>

        <Footer></Footer>

      </BrowserRouter>

    </>
  );
}

export default App;
