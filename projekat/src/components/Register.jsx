import { useState, useEffect } from "react"
import { useHistory } from "react-router-dom"
import { getAllUsers, postUser } from "../service"
import { StyledLogin, StyledLoginBtn } from './styledComponents' 

const Register = () => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [users, setUsers] = useState([])
    const [error, setError] = useState('')
    const history = useHistory()

    useEffect(() => {
        getAllUsers().then(res => setUsers(res.data))
    }, [])

    let regExEmail = /\S+@\S+\.\S+/

    const isValid = () => username.length >= 4
        &&
        password.length >= 6
        &&
        regExEmail.test(email)

    const displayError = () => {
        if (username.length < 4) { setError('Username must include 4 characters or more') }
        if (users.map(user => user.username).includes(username)) { setError('Username is already in use') }
        if (!regExEmail.test(email)) { setError('Email is invalid') }
        if (users.map(user => user.email).includes(email)) { setError('Email is already in use') }
        if (password.length < 6) { setError('Password must include 6 characters or more') }
    }
    return (
        <>
            <StyledLogin>
                <div>
                    <h2>Register</h2>
                    <div>
                        <label>Enter your username: </label>
                        <input value={username} type='text' placeholder="Enter your username here" onChange={(e) => setUsername(e.target.value)} />
                        <p className="error">{error}</p>
                    </div>
                    <div>
                        <label>Set your password: </label>
                        <input value={password} type='password' placeholder="Enter your password here" onChange={(e) => setPassword(e.target.value)} />
                        <p className="error">{error}</p>
                    </div>
                    <div>
                        <label>Enter your email: </label>
                        <input value={email} type='text' placeholder="Enter your email here" onChange={(e) => setEmail(e.target.value)} />
                        <p className="error">{error}</p>
                    </div>


                    <StyledLoginBtn onClick={(e) => {
                        e.preventDefault()
                        if (!isValid()) {
                            displayError()
                            return
                        }
                        getAllUsers().then(res => {
                            if (!res.data.some(user => user.username === username || user.email === email)) {
                                postUser(username, email, password).then(res => {
                                    history.push('/login')
                                })
                            }
                            else {
                                displayError()
                                setUsername('')
                                setEmail('')
                                setPassword('')
                                setError('')
                            }
                        })

                    }} value="Submit" />
                </div>
            </StyledLogin>
        </>
    )
}
export default Register
        //         <>
        //             <h1>Register</h1>
        //             <form onSubmit={(e) => {
        //                 e.preventDefault()

        //                 getAllUsers().then(res => {
        //                     setUsers(res.data)
        //                     if (isValid(res.data)) {
        //                         let user = {
        //                             id: uuidv1(),
        //                             username: username,
        //                             email: email,
        //                             password: password
        //                         }

        //                         postUser(user).then(res => {
        //                             setUsers(prev => [...prev, res.data])
        //                         })
        //                         history.push('/login')
        //                     }
        //                     else if (res.data.find(user => user.username === username || user.email === email)) {
        //                         setError('Username or email already exists')
        //                     }
        //                     else if (username.length < 4) {
        //                         setError('Username must include at least 4 characters')
        //                     }
        //                     else if (!email.includes('@' && '.')) {
        //                         setError('Email must be valid')
        //                     }
        //                     else if (password.length < 8) {
        //                         setError('Password must include 8 characters or more')
        //                     }
        //                 })
        //             }}>
        //                 <p>Enter your Username:  </p>
        //                 <input type="text" onChange={(e) => setUsername(e.target.value)} />
        //                 <p>Enter your Email:  </p>
        //                 <input type="email" onChange={(e) => setEmail(e.target.value)} />
        //                 <p>Set your Password:  </p>
        //                 <input type="password" onChange={(e) => setPassword(e.target.value)} />
        //                 <input type="submit" value="Register" />
        //             </form>
        //         </>
        //     )
        // }
        // export default Register