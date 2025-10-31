import React from 'react';
import './App.css';
import Bienvenue from './bienvenue';
import Compteur from './compteur'; 
import Formulaire from  './formulaire';
import ListeCourses from './ListeCourses';
import TodoApp from './TodoApp';


function App() {
  return (
    <div className="App">
      <h1>
        <Bienvenue nom="Eya" />
      </h1>
      <div className="card">
        <Compteur />
      <div className="App">
      <h1>Formulaire</h1>
         <Formulaire />
      </div>  
      </div>
      <div >
      <h1>Bienvenue dans l'application Liste de Courses</h1>
          <ListeCourses />
      <div className="App"> <TodoApp /> </div>    
    </div>
    </div>
  );
}

export default App;


