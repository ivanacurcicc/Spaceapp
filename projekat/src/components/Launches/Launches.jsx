import { StyledDivCont, StyledDivItem } from '../styledComponents'
import Launch from './Launch'

const Launches = ({ launches }) => {
    return (
        <>
            <StyledDivCont>
                <StyledDivItem>
                    {launches.map(launch => <Launch key={launch.id} launch={launch} />)}
                </StyledDivItem>
            </StyledDivCont>
        </>
    )
}
export default Launches