import React, { useEffect, useState, useContext } from 'react'
import {SearchContext} from '../../Context/SearchContext'
import PopularUser from './PopularUser'

const PopularUsers = (props) => {
    const [popularUsers, setPopularUsers] = useState([]);
    useEffect(() => {
        const mostPopularUsers = async () => {
            fetch("https://api.github.com/search/users?q=repos:followers:%3C1000&language:javascript&page=1&per_page=10")
            .then(res => res.json())
            .then(data => setPopularUsers(data.items))
            .catch(err => {
                console.log(err);
            })
        }
        mostPopularUsers();
    }, [])
    
    const [showListView, setShowListView] = useState(true);

    const {setUser} = useContext(SearchContext);
    const directToDetailsPage = (user) => {
        setUser(user);
        setTimeout(() => {
            props.history.push(`/${user}`);
        }, 1500);
    }
    return(
        <>
            <button onClick={() => setShowListView(!showListView)}>{showListView ? "List View" : "Grid View"}</button>
            <h1>Most Popular Users</h1>
            <div className={showListView ? "popular-users-main-div" : "grid-view"}>
                { popularUsers.map((user) => {
                    return <PopularUser user={user} key={user.id} directToDetailsPage={directToDetailsPage} showListView={showListView}/>
                })}
            </div>
        </>
    )
}

export default PopularUsers