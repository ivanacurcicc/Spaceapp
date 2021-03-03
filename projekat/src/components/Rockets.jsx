import { useEffect, useState } from "react"
import { getRockets } from "../service";

const Rockets = () => {
    const [rockets, setRockets] = useState([])
    const [search, setSearch] = useState('')

    useEffect(() => {
        getRockets().then(res => {
            setRockets(res.data)
        })
    }, [])

    return (
        <>
            <input type="search" onChange={(e) => setSearch(e.target.value)} />
            {rockets.map(({ name, active, description, type, company }) => (
                <div>
                    <p>Name: {name}</p>
                    <p>Active: {active.toString()}</p>
                    <p>Description: {description}</p>
                    <details>
                        <summary>Show details</summary>
                        <p>Type: {type}</p>
                        <p>Company: {company}</p>
                    </details>
                </div>
            ))}

        </>
    )

}

export default Rockets