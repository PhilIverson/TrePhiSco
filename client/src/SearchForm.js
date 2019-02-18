import React from 'react'
import { withSearchContext } from './SearchProvider';
import SearchContainer from './SearchContainer';

function SearchForm({ getResults }) {
    return (
        <SearchContainer submit={getResults}
            inputs={{
                results: ''
            }}>
            {({ handleSubmit, handleChange, inputs }) => (
                <form>
                    <input value={inputs.results} onChange={handleChange} type='text' name='results' placeholder='Search' />

                </form>


            )}
        </SearchContainer>
    )
}


export default withSearchContext(SearchForm)