import React from 'react';
import './App.css';
import Main from './components/Main'
import Login from './components/Login'
import Video from './components/Video'
import User from './components/User'
<<<<<<< HEAD
import NewUser from './components/NewUser'
import NewVideoForm from './components/NewVideoForm'
=======
import EditVideo from './components/EditVideo'
>>>>>>> new
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  const videos = [
    { title: "Javascript", language: "Javascript" },
    { title: "Javascript", language: "Javascript" },
    { title: "Ruby", language: "Ruby" },
    { title: "Ruby", language: "Ruby" },
    { title: "Rails", language: "Rails" },
    { title: "Rails", language: "Rails" },
    { title: "React", language: "React" },
    { title: "React", language: "React" }
  ];

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login}/>
          <Route path="/new" component={NewUser} />
          <Route exact path="/" render={() => <Main videos={videos}/>}/>
          <Route path="/video" component={Video}/>
<<<<<<< HEAD
          <Route path="/add-video" component={NewVideoForm}/>
          <Route path="/user" render={() => <User videos={videos}/>} />
          {/* <Route path={`/user/${user.id}/edit}`} component={EditUser} */}
=======
          <Route path="/user" component={User}/>
          <Route path="/edit-video/:id" component={EditVideo} />
>>>>>>> new
        </Switch>
      </div>
    </Router>
  );
}

export default App;
