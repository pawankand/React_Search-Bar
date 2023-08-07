import React, { useState } from 'react'

function SearchBar({ setResult }) {

    const [input, setInput] = useState("");

    const fetchSearchData = (inputVal) => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then((response) => response.json()).then(json => {
                const searchResult = json.filter((user) => {
                    return inputVal &&
                        user &&
                        user.name &&
                        user.name.toLowerCase().includes(inputVal);
                });
                console.log(searchResult);
                setResult(searchResult);
            });
    };
    const handleChange = (inputVal) => {
        setInput(inputVal);
        fetchSearchData(inputVal);
    }

    return (
        <div class="ui search">
            <div class="ui icon input">
                <input class="prompt"
                    type="text"
                    placeholder="Search..."
                    value={input} onChange={(e) => handleChange(e.target.value)} />
                <i class="search icon"></i>
            </div>
        </div>
    )
}

export default SearchBar