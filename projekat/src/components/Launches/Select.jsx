const Select = ({ launches, setSelect }) => {

    let selectYear = [...new Set(launches.map(launch => launch.date_utc.slice(0, 4)))]

    return (
        <select onChange={(e) => {
            setSelect(e.target.value);
        }}>
            <option value=''>All launches</option>
            {selectYear.map(year => <option id="option" key={year} value={year} >{year}</option>)}
        </select>
    )
}
export default Select