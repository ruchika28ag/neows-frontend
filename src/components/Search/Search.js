import React from 'react';
import './search.css';

const Search =() =>{
    return(
        <div className="searchDiv" >
            <h1 className="siteHead">Neo</h1>
            <form className="searchForm">
                <input type="text" name="id" placeholder="Enter ID" className="searchInput" />
                <button className="searchbtn">Search</button>
            </form>
        </div>
    )
}

export default Search;