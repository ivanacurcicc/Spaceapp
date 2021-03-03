const Launch = ({ launch }) => {
    return (
        <div>
            <img src={launch.links.patch.small}/>
            <p>{launch.name}</p>
        </div>
    )
}

export default Launch