import React from 'react'
import { withSearchContext } from './SearchProvider';
import SearchContainer from './SearchContainer';

function SearchForm(props) {
    const resultList = 
    return (
        <SearchContainer submit={(inputs) => props.updateSearch(inputs.searchTerm)}
            inputs={{
                searchTerm: ''
            }}>
            {({ handleSubmit, handleChange, inputs }) => (
                <form onSubmit={handleSubmit}>
                    <input value={inputs.searchTerm} onChange={handleChange} type='text' name='searchTerm' placeholder='Search' />
                    <button>Go</button>
                </form>
            )}
        </SearchContainer>
        <ul>
            <li>
                
            </li>
        </ul>
    )
}

export default withSearchContext(SearchForm)