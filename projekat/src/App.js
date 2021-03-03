import { useState } from "react"
import Home from "./components/Home"
import Login from "./components/Login"
import Register from "./components/Register"
import Ships from "./components/Ships"
import Rockets from "./components/Rockets"
import Auth from "./components/Auth";
import LaunchApp from "./components/Launches/LaunchApp"
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

const App = () => {
    const [user, setUser] = useState(null)
    const [error, setError] = useState('')

    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <Auth />
                </Route>
                <Route exact path="/home">
                    <Home user={user} />
                </Route>
                <Route exact path="/login">
                    <Login setUser={setUser} error={error} setError={setError} />
                </Route>
                <Route exact path="/register">
                    <Register user={user} setUser={setUser} error={error} setError={setError} />
                </Route>
                <Route exact path="/launches">
                    <LaunchApp></LaunchApp>
                </Route>
                <Route exact path="/ships">
                    <Ships></Ships>
                </Route>
                <Route exact path="/rockets">
                    <Rockets></Rockets>
                </Route>
            </Switch>
        </Router>
    )
}
export default App