import { useState } from "react"
import { useHistory } from "react-router"
import { getAllUsers } from "../service"
import { StyledLogin,StyledLoginBtn } from './styledComponents'

const Login = ({ setUser }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [error, setError] = useState('')

    const history = useHistory()

    const loginUser = async () => {
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
            <StyledLogin>
                <form onSubmit={loginUser}>
                    <div>
                    <h2>Login</h2>
                    <label>Username:</label>
                    <input type="text" placeholder="Enter your username" onChange={e => setUsername(e.target.value)} />
                    </div>
                    <label>Password: </label>
                    <input type="text" placeholder="Enter your password" onChange={e => setPassword(e.target.value)} />
                    <StyledLoginBtn type="submit" value="Login" />
                </form>
                <p className="error">{error}</p>
            </StyledLogin>
        </>
    )
}

export default Login