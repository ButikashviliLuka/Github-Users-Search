import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UserRepositories = ({user}) => {
    const [popularUserRepositories, setPopularUserRepositories] = useState([]);
    useEffect(() => {
        const fetchUserRepositories = async() => {
            axios.get(`https://api.github.com/users/${user.login}/repos`)
             .then(r => r.data.map(repository => {
                 return[
                    repository.name
                 ]
             }).slice(-3))
            .then(response => setPopularUserRepositories(response));
        }
        fetchUserRepositories();
    }, [user.login])
    return(
        <ul>
            { popularUserRepositories 
                ? popularUserRepositories.map(repository => {
                    return(
                        <li key={repository}>{repository}</li>
                    )
                })
                : <h3>User do not have any Repositories</h3>
            }
        </ul>
    )
}
export default UserRepositories