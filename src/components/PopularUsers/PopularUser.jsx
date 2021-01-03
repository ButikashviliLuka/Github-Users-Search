import React from 'react'
import UserRepositories from './UserRepositories'

const PopularUser = ({user, directToDetailsPage, showListView}) => {
    return (
        <div className={showListView ? "user-info-div" : ""}>
            <div className={showListView ? "list-view-main-info-div" : ""}>
                <div className={showListView ? "img-div" : "grid-img-div"}>
                    <img src={user.avatar_url} alt="avatar"/>
                </div>
                <div className={showListView ? "list-view-username-div" : "gird-view-username-div"}>
                    <h1 onClick={() => directToDetailsPage(user.login)}>{user.login}</h1>
                     <h2>Type: {user.type}</h2>
                </div>
            </div>
            <div className={showListView ? "list-repositories" : "grid-view-repository-div"}>
                <h1>Resent 3 Repositories:</h1>
                <UserRepositories user={user} />
            </div>
        </div>
    )
}

export default PopularUser