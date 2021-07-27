import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import { createContext, useEffect, useState } from 'react';

export const ThemeContext = createContext();

function App() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className="App">
      <Router>
        <ThemeContext.Provider value={{ theme, setTheme }}>
          <Header />
          <Switch>
            <Route path="/" component={Home} />
          </Switch>
        </ThemeContext.Provider>
      </Router>
    </div>
  );
}

export default App;
