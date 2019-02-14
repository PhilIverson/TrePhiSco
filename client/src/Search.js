import React from 'react'

function Search() {
    const procedures = props.procedures.map(procedure => {
        return (
            <Procedure
                key={procedure._id}
                procedure={procedure}
                savedProcedure={props.savedProcedure}
            />
        )
    })
    return (
        <div>
            {procedures}
        </div>
    )
}

export default Search

