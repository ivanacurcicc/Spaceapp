const Launch = ({ launch }) => {
    return (
        <div>
            <img src={launch.links.patch.small ? launch.links.patch.small : "https://via.placeholder.com/200"} width="300px"
               height="250px" />
            <p>Name: {launch.name}</p>
                <details>
                    <summary>Show details</summary>
                    <p>Description: {launch.details}</p>
                    <p>Rocket: {launch.rocket}</p>
                    <p>Flight: {launch.flight_number}</p>
                </details>
                <br />
                <hr />
        </div>
    )
}

export default Launch