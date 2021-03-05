import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Works, Footer, About, Contact, NoMatch, Work } from '.';

export const App = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path='/'>
          <Works />
        </Route>
        <Route exact path='/works'>
          <Works />
        </Route>
        <Route exact path='/works/:id'>
          <Work />
        </Route>
        <Route exact path='/about'>
          <About />
        </Route>
        <Route exact path='/contact'>
          <Contact />
        </Route>
        <Route path='*'>
          <NoMatch />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
};
