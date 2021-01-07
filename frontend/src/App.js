import React from "react"
import Header from "./components/Header"
import { BrowserRouter, Switch, Route} from "react-router-dom"
import Major from "./pages/Major"
import Home from "./pages/Home"
import Login from "./pages/Login"
import UserProfile from "./pages/UserProfile"
import CreateNote from "./pages/CreateNote"
import ListOfNotes from "./pages/ListOfNotes"
import './App.css';
import CreateMajor from "./pages/CreateMajor"
import SampleNote from "./pages/SampleNote"

function App() {
  return (
    <div>
        <BrowserRouter>
          <Header/>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/majors" exact component={Major}/>
            <Route path="/majors/:majorId" component={ListOfNotes} />
            <Route path="/profile" component={UserProfile}/>
            <Route path="/login" component={Login} />
            <Route path="/createNote" component = {CreateNote} />
            <Route path="/createNewMajor" component={CreateMajor} />
            <Route path="/sampleNote" component={SampleNote} />
          </Switch>
        </BrowserRouter>
    </div>
    
  );
}

export default App;
