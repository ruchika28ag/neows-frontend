import React, { useState } from 'react';
import {ReactComponent as ExpLogo} from '../../assets/explore.svg';
import {ReactComponent as SearchLogo} from '../../assets/search.svg';
import './search.css';
import ExploreInput from '../ExploreInput/ExploreInput';
import SearchInput from '../SearchInput/SearchInput';

const Search =() =>{
    const [tab, setTab] = useState('explore');

    // const [value, setValue] = useState('');

    // const handleChange = event => {
    //     setValue(event.target.value);
    // }

    // const searchAst = event => {
    //     event.preventDefault();
    //     if(value){
    //         const id= value;
    //         setValue('');
    //         fetch(`https://api.nasa.gov/neo/rest/v1/neo/${id}?api_key=DEMO_KEY`)
    //         .then(res => res.json())
    //         .then((aster) => console.log(aster));
    //     }
    // }
    return(
        <div className="searchDiv" >
            <div className="tabs">
                <button className= {`explore ${tab === 'explore' && 'active'}`}  onClick={()=>setTab('explore')}>
                    <ExpLogo className="expLogo" />
                    <span className="exploreTitle">Explore</span>
                </button>
                <button className= {`search ${tab === 'search' && 'active'}`} onClick={()=>setTab('search')}>
                    <SearchLogo className="searLogo"/>
                    <span className="searchTitle">Search</span>
                </button>
            </div>
            <div className="inputContainer">
                {tab==='explore' && <ExploreInput />}
                {tab==='search' && <SearchInput />}
            </div>
        </div>
    )
}

export default Search;