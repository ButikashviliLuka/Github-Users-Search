import React, {useContext} from 'react'
import {SearchContext} from '../../Context/SearchContext'
import {Link} from 'react-router-dom'
import UserRepositories from '../PopularUsers/UserRepositories'

const UserDetailedInfo = () => {
    const {userData, userOrganisation} = useContext(SearchContext);

    return(
        <>
            <div className="details-main-div">
                <div className="user-main-info">
                    <div>
                        <img src={userData.avatar_url} alt="avatar"/>
                    </div>
                    <h1 className="details-username"><a href={`https://github.com/${userData.login}`}>{userData.login}</a></h1>
                    <h3>Type: {userData.type}</h3>
                </div>
                <div className="user-additional-info">
                    <div className="detailed-user-repositories">
                        <h1>3 Resent Repositories:</h1>
                        <UserRepositories user={userData}/>
                    </div>
                    <div className="user-organisation-div">
                        {userOrganisation.length > 0 
                        ? <>
                            <h1>Organisation:</h1>
                            <img src={userOrganisation[0].avatar} alt="avatar"/>
                            <h1>{userOrganisation[0].login}</h1> 
                         </> : <h4>{userData.bio}</h4>
                        }
                    </div>
                </div>
                
            </div>
            <Link to="/">
                <h1 className="go-back">Go Back to Landing Page</h1>
            </Link>
        </>
    )
}
export default UserDetailedInfo