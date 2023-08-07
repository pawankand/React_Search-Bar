import React from 'react'

function SearchResult(props) {
    console.log("Search Result - ", props.result);
    const { id, name, email, phone, username } = props.result;
    return (
        <div className='item'>
            <div className='content'>
                <div className='header'>
                    {name}
                </div>
                <div>{username}</div>
                <div>{email}</div>
                <div>{phone}</div>

            </div>
        </div>
    )
}

export default SearchResult