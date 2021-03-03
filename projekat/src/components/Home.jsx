import { Link } from 'react-router-dom'
import { Redirect } from "react-router"
import { StyledLink } from './styledComponents'

const Home = ({ user }) => {
    return (

        <>
            {user ?
                <div>
                    <StyledLink style={{ padding: 5 }} to="/launches">Launches</StyledLink>
                    <br />
                    <br />
                    <StyledLink style={{ padding: 5 }} to="/ships">Ships</StyledLink>
                    <br />
                    <br />
                    <StyledLink style={{ padding: 5 }} to="/rockets">Rockets</StyledLink>
                </div>
                :
                <Redirect to='/login' />}
        </>
    )
}

export default Home