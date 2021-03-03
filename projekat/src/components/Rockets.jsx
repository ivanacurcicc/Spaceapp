import { useEffect, useState } from "react"
import { getRockets } from "../service";
import { StyledDivCont, StyledDivItem, StyledSearch } from "./styledComponents"

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
            <StyledDivCont>
                <StyledSearch type="search" placeholder="Search here..." onChange={(e) => setSearch(e.target.value)} />
                <StyledDivItem>
                {rockets.map(({ name, active, description, type, company, flickr_images }) => (
                    <div>
                        <img style={{width:400, height:300}} src={flickr_images[0]} alt=''></img>
                        <p>Name: {name}</p>
                        <p>Active: {active.toString()}</p>
                        <p>Description: {description}</p>
                        <details>
                            <summary>Show details</summary>
                            <p>Type: {type}</p>
                            <p>Company: {company}</p>
                        </details>
                        <hr />
                    </div>
                ))}
                </StyledDivItem>
            </StyledDivCont>
        </>
    )

}

export default Rockets