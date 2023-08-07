import React from 'react'
import SearchResult from './SearchResult';

function SearchResultList(props) {
    //console.log("result - ", props.searchResult);
    const results = props.searchResult;
    return (
        <div className='ui celled list'>
            {
                results?.map((result, id) => {
                    return <SearchResult result={result} key={id}></SearchResult>

                })
            }
        </div>
    )
}
export default SearchResultList
