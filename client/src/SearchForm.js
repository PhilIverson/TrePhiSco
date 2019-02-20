import React from 'react'
import { withSearchContext } from './SearchProvider';
import SearchContainer from './SearchContainer';
import ProcedureList from './ProcedureList';

function SearchForm(props) {
    // console.log(props.savedProcedures)
    return (
        <div>
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
        <ProcedureList results={props.results}/>
        </div>
    )

}

export default withSearchContext(SearchForm)