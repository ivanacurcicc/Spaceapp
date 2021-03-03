import { useEffect, useState } from "react"
import { getShips } from "../service";

const Ships = () => {
    const [ships, setShips] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getShips().then(res => {
            setShips(res.data)
        })
    }, [])

    return (
        <>
            <input type="search" onChange={(e) => setSearch(e.target.value)} />
            {ships.map(({ name, active, image }) => (
                <div>
                    <p>Name: {name}</p>
                    <p>Active: {active.toString()}</p>
                    <img src={image} style={{ width: '150px' }} />
                </div>
            ))}

        </>
    )

}

export default Ships