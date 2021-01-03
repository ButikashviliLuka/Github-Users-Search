import React, { useState, useContext, useRef, useEffect } from 'react'
import {SearchContext} from '../../Context/SearchContext'
import image from '../../images/Search.png'
import ResearchedUsersList from './ResearchedUsersList'



const SearchInput = (props) => {
    const [inputValue, setInputValue] = useState("");
    const [showSearchedUsers, setShowSearchedUsers] = useState(false);
    const ref = useRef();
    useEffect(() => {
        window.addEventListener('click', (event) => {
            if(ref.current && ref.current.contains(event.target)) {
                return;
            }
            setShowSearchedUsers(false);
        })
    })
    //imported Context methods
    const {setUser, setItemToLocalStorage} = useContext(SearchContext);
    // onSubmit method
    const SearchValue = (e) => {
        e.preventDefault();

        // pass value to the SearchContext.js to fetch data and to save input value to local storage
        setUser(inputValue);
        setItemToLocalStorage(inputValue);
        //direct to the users detail page
        setTimeout(() => {
            props.history.push(`/${inputValue}`);
        }, 1500);

        setShowSearchedUsers(false);
        setInputValue("");
    }
    const ChangeInputValue = (value) => {
        setInputValue(value);
    }
    return(
        <div className="input-main-div" >
            <form onSubmit={(e) => SearchValue(e)} ref={ref} className={showSearchedUsers ? "new-border-radius" : ""}>
                <input 
                    className="img-input" 
                    type="image" 
                    src={image} 
                    alt="Submit" 
                />
                <input 
                    className="text-input" 
                    type="text" 
                    value={inputValue} placeholder="Search Github User" 
                    onChange={(e) => setInputValue(e.target.value)} 
                    onClick={() => setShowSearchedUsers(true)} 
                />
            </form>
            {showSearchedUsers ? <ResearchedUsersList ChangeInputValue={ChangeInputValue}/> : null}
        </div>
    )
}
export default SearchInput