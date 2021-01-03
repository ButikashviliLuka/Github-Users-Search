import React, {useContext} from 'react'
import {SearchContext} from '../../Context/SearchContext'

const ResearchedUsersList = ({ChangeInputValue}) => {
    const {localStorageItems} = useContext(SearchContext);
    return (
        <div className="previous-reserches-main-div">
            <h5>Resent Researches:</h5>
            { localStorageItems.map(value => {
                return(
                    <div className="hover" key={value} onClick={() => ChangeInputValue(value)}>{value}</div>
                )
            })}
        </div>
    )
}
export default ResearchedUsersList;