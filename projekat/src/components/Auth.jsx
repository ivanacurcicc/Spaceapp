import { Link } from 'react-router-dom'
import { StyledLink } from "./styledComponents"

const Auth = () => {
    return (

        <>
            <div>
                <StyledLink style={{ padding: 5 }} to="/login">Login</StyledLink>
            </div>
            <br />
            <br />
            <br />
            <br />
            <div>
                <StyledLink style={{ padding: 5 }} to="/register">Register</StyledLink>
            </div>
        </>
    )
}

export default Auth