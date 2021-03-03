import { useEffect, useState } from "react";
import { getCompanyInfo, getAllLaunches } from "../../service";
import Launches from './Launches'

const LaunchApp = () => {

    const [launches, setLaunches] = useState([]);
    const [year, setYear] = useState('');
    const [company, setCompany] = useState('');
    let selectYear = [...new Set(launches.map(launch => launch.date_utc.slice(0, 4)))]

    useEffect(() => {
        getAllLaunches().then(res => {
            setLaunches(res.data);
        })
        getCompanyInfo().then(res => {
            setCompany(res.data.name)
        })
    }, [])
    return (
        <div>
            <h3>{company}</h3>
            <select onChange={(e) => {
                setYear(e.target.value);
                console.log("year", year)
            }}>
                <option value=''>All launches</option>
                {selectYear.map(year => <option id="option" key={year} value={year} >{year}</option>)}
            </select>
            <Launches launches={launches.filter(launch => launch.date_utc.startsWith(year))} />
        </div>
    )
}

export default LaunchApp;