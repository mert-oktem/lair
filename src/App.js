import React from 'react';
import './App.css';
import Home from './components/classComponents/home/Home'
import Discovery from "./components/classComponents/discovery/Discovery";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import Header from "./components/classComponents/header/Header";
import Footer from "./components/classComponents/footer/Footer";
import AboutUs from "./components/classComponents/aboutUs/AboutUs";
import Articles from "./components/classComponents/articles/Articles";
import Contact from "./components/classComponents/contact/Contact";
import Donate from "./components/classComponents/donate/Donate";
import DiscDetails from "./components/classComponents/discoveryDetails/DiscDetails";
import ScrollToTop from "./components/classComponents/ScrollToTop";
import NotFound from "./components/classComponents/NotFound";


function App() {
  return (
    <Router>
        <ScrollToTop />
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/discovery" exact component={Discovery} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/articles" component={Articles} />
                <Route path="/contact" component={Contact} />
                <Route path="/donate" component={Donate} />
                <Route path="/discovery/:id" exact component={DiscDetails} />
                <Route path="" component={NotFound} />
                <Route path="*" component={NotFound} />
                <Route component={NotFound} />
            </Switch>
            <Footer />
        </div>
    </Router>
  );
}

export default App;