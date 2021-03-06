import Sidebar from "./Components/Sidebar";
import styled from "styled-components"
import {BrowserRouter as Router, Switch as Switching,Route} from "react-router-dom";
import Switch from '@material-ui/core/Switch';
import Brightness4Icon  from "@material-ui/icons/Brightness4";
import { useState,useEffect} from "react";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage";
import ResumePage from "./Pages/ResumePage";
import ContactPage from "./Pages/ContactPage";
import ProductPage from "./Pages/ProductPage";
import CartPage from "./Pages/CartPage";
import 'animate.css';
import rootReducer from "./redux/reducers/index";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import PortfolioPage from "./Pages/PortfolioPage";

 const store = createStore(rootReducer)
function App() {

  const [theme, setTheme] = useState('dark-theme')
  const [checked, setChecked] = useState(false)

  useEffect(() => {
    document.documentElement.className = theme
  },[theme])

  const themeToggler = () => {
    if(theme === 'light-theme'){
      setTheme('dark-theme')
      setChecked(false)
    } else{
      setTheme('light-theme')
      setChecked(true)
    }
  }

  return (
    <Provider store={store}>
    <div className="App">
      <Sidebar/>
      <MainContentStyle className="main-content">

          <div className="light-dark-mode">
              <div className="left-content">
                <Brightness4Icon/>
              </div>
              <div className="left-content">
                <Switch 
                value=""
                checked={checked}
                inputProps={{'arial-label':''}}
                size="medium"
                onClick={themeToggler}
                />
              </div>
          </div>

          <Switching>
            <Route path='/' exact><HomePage/></Route>
            <Route path='/about'><AboutPage/></Route>
            <Route path='/resume'><ResumePage/></Route>
            <Route path='/Port'><ContactPage/></Route>
            <Route path='/Portfolio'><PortfolioPage/></Route>
            <Route path='/Product'><ProductPage/></Route>
            <Route path='/Cart'><CartPage/></Route>
            <Route path='/Contact'><ContactPage/></Route>
          </Switching>  
      </MainContentStyle>
    </div>
    </Provider>
  );
}

const MainContentStyle = styled.main`
  position: relative ;
  margin-left: 16.3rem ;
  min-height: 100vh ;
  
`

export default App;
