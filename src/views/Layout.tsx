// Layout.js
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Navbar';
import Banner from './Banner';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Experience from './Experience';
import Contact from './Contact';

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Banner} />
        <Route path="/about" component={About} />
        <Route path="/skills" component={Skills} />
        <Route path="/projects" component={Projects} />
        <Route path="/experience" component={Experience} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  );
};

export default Layout;
