import { Link } from 'react-router-dom'
const Auth = () => {
    return (

        <>
            <Link style={{ padding: 5 }} to="/login">Login</Link>
            <Link style={{ padding: 5 }} to="/register">Register</Link>

        </>
    )
}

export default Auth