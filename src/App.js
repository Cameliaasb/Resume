import React        from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Bio          from './pages/Bio';
import Projects     from './pages/Projects';
import Resume       from './pages/Resume';
import Contact      from './pages/Contact';


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/"           element={<Bio       />}> </Route>
          <Route path="*"           element={<Bio       />}> </Route>
          <Route path="/bio"        element={<Bio       />}> </Route>
          <Route path="/projects"   element={<Projects  />}> </Route>
          <Route path="/resume"     element={<Resume    />}> </Route>
          <Route path="/contact"    element={<Contact   />}> </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
