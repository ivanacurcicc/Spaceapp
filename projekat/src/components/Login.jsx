import { useState } from "react"
import { useHistory } from "react-router"
import { getAllUsers } from "../service"

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    const loginUser = async () => {
        console.log("usao");
        getAllUsers().then(res => {
            debugger;
            let user = res.data.find(el => (el.username === username || el.email === username) && el.password === password)
            if (user) {
                setUser(user)
                history.push('/home')
            }
            else {
                setError('Wrong username or password!')
            }
        })
        history.push("/home");
    };

    return (
        <>
            <form onSubmit={loginUser}>
                <label>Username:</label>
                <input type="text" placeholder="username" onChange={e => setUsername(e.target.value)} />
                <label>Password: </label>
                <input type="text" placeholder="password" onChange={e => setPassword(e.target.value)} />
                <input type="submit" value="LoginTest" />
            </form>
            <p className="error">{error}</p>
        </>
    )
}

export default Login