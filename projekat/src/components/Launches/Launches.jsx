import Launch from './Launch'

const Launches = ({launches}) => {
    return (
        <>
            {launches.map(launch => <Launch key={launch.id} launch={launch} />)}
        </>
    )
}
export default Launches