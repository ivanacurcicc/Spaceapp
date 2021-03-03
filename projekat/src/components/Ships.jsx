import { useEffect, useState } from "react"
import { getShips } from "../service";
import { StyledDivCont, StyledDivItem, StyledSearch } from "./styledComponents"

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
            <StyledDivCont>
                <StyledSearch placeholder="Search here..." type="search" onChange={(e) => setSearch(e.target.value)} />
                <StyledDivItem>
                    {ships.map(({ name, active, image }) => (
                        <div>
                            <p>Name: {name}</p>
                            <p>Active: {active.toString()}</p>
                            <img src={image ? image : "https://via.placeholder.com/200"} style={{ width: '320px', height: '200px' }} />
                            <hr />
                        </div>
                    ))}
                </StyledDivItem>
            </StyledDivCont>
        </>
    )

}

export default Ships