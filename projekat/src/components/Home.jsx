import { Link } from 'react-router-dom'
const Home = () => {
    return (

        <>
            <Link style={{ padding: 5 }} to="/launches">Launches</Link>
            <Link style={{ padding: 5 }} to="/ships">Ships</Link>
            <Link style={{ padding: 5 }} to="/rockets">Rockets</Link>

        </>
    )
}

export default Home