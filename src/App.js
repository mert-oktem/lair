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
import ArticlesDet from "./components/classComponents/articlesDetails/ArticlesDet";
import TestConnection from "./components/functionComponents/TestConnection";

function App() {
  return (


    <Router>
        <div className="App">
            <Header />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/discovery" exact component={Discovery} />
                <Route path="/aboutUs" component={AboutUs} />
                <Route path="/articles" component={Articles} />
                <Route path="/contact" component={Contact} />
                <Route path="/donate" component={Donate} />
                <Route path="/discDetails" component={DiscDetails} />
                <Route path="/articlesDetails" component={ArticlesDet} />
                <Route path="/discovery/:id" component={TestConnection} />
            </Switch>
            <Footer />

        </div>
    </Router>
  );
}

export default App;