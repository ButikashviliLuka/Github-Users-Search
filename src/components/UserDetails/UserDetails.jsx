import React, {useContext } from 'react'
import {SearchContext} from '../../Context/SearchContext'
import UserDetailedInfo from './UserDetailedInfo'
const UserDetails = () => {
    const {userData} = useContext(SearchContext);


    return(
        <>
            {userData.message 
            ?  
            <div className="centered">
                <h1>User not Found</h1>
                <h1 className="go-back">Go Back to Landing Page</h1>
            </div>
            
            : 
                <UserDetailedInfo />
            }
        </>
    )
}

export default UserDetails