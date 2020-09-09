import React, { useState, useEffect } from 'react';
import Axios from 'axios';

const Search = () => {
    const [term, setTerm] = useState('programming');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [results, setResults] = useState ([]);

    useEffect(()=>{
        const search = async () => {
            const {data} = await Axios.get('https://en.wikipedia.org/w/api.php',{
                params: {
                    action: 'query',
                    list: 'search',
                    origin: '*',
                    format: 'json',
                    srsearch: debouncedTerm
                }
            });
            setResults(data.query.search);
        };
        search();
    },[debouncedTerm]);
    
    useEffect(() => {
        const timerId = setTimeout(()=>{
            if(term) {
                setDebouncedTerm(term);
            }     
        }, 1000);

        //Clean Up part of the useEffect Hook , the only thing permited to return inside an useEffect
        return () => {
            clearTimeout(timerId);
        };        
    },[term]); //Second argument controls when the effect is going to take place, [] = initial render , nothing = initial render and after re render, [data] initialr ender , after every rerender and if data changes

    const renderResults = results.map((result) =>{
        return (
            <div key={result.pageid} className="item">
                <div className="right floated content">
                    <a className="ui button" href={`https://en.wikipedia.org/?curid=${result.pageid}`}>Go</a>
                </div>
                <div className="content">
                    <div className="header">
                        {result.title}
                    </div>
                    <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
                </div>
            </div>
        )
    });

    return ( 
        <div>
            <div className="ui form">           
                <div className="field">
                    <label>Enter Search Term</label>   
                    <input className="input" type="text" value={term} onChange={e => setTerm(e.target.value)} />
                </div>
            </div>
            <div className="ui celled list">
                {renderResults}
            </div>            
        </div>
    )
}

export default Search;