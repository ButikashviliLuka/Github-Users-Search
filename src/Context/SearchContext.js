import axios from 'axios';
import React, {createContext, useState, useEffect} from 'react'

const SearchContext = createContext();

const SearchContextProvider = (props) => {
    // input value after submit button was clicked
    const [user, setUser] = useState(''); 
    // fetch data
    const [userData, setUserData] = useState([]);
    const [userOrganisation, setUserOrganisation] = useState([]);
    useEffect(() => {
        const fetchUserInfo = async () => {
            fetch(`https://api.github.com/users/${user}`)
            .then(r => r.json())
            .then(result => setUserData(result))
        }
        const fetchUserOrganisation = async() => {
            axios.get(`https://api.github.com/users/${user}/orgs`)
            .then(result => result.data.map((item) => {
                return ({
                    login: `${item.login}`,
                    avatar: `${item.avatar_url}`
                })
            }))
            .then(res => setUserOrganisation(res))
        }
        if(user) {
            fetchUserInfo();
            fetchUserOrganisation();
        }
              
    }, [user])

    const [localStorageItems, setLocalStorageItems] = useState([]);
    const setItemToLocalStorage = (value) => {
        if(localStorage.length > 0) {
            let localStoragedata = localStorage.getItem("SearchedData");
            let newData = [localStoragedata, value];
            localStorage.setItem("SearchedData", newData);
        } else {
            localStorage.setItem("SearchedData", value);
        }
    }
    useEffect(() => {
        let storageData = localStorage.getItem("SearchedData");
        if(storageData){
            //create array from strings
            let newArray = storageData.split(",");
            let reversedArray = [];
            //reverse array
            for(let i = newArray.length - 1; i >= 0; i--) {
                reversedArray.push(newArray[i]);
            }
            //if array length is more than 3, then set useState value only first 3 elements of array
            if(newArray.length > 3) {
                let newArray2 = reversedArray.slice(0, 3);
                setLocalStorageItems(newArray2);
            } else {
                setLocalStorageItems(reversedArray);
            }
        } 
    }, [user])

    return(
        <SearchContext.Provider value={{
            setUser,
            userData,
            userOrganisation,
            setItemToLocalStorage,
            localStorageItems
        }}>
            {props.children}
        </SearchContext.Provider>
    )
}

export {SearchContext, SearchContextProvider}
