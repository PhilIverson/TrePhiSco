import React from 'react'

import ProcedureDetail from './ProcedureDetail';

function AllProcedureList({ results }) {
    const procedureComponents = results.map((procedure, i) => (
        <ProcedureDetail key={i}{...procedure} />
    ))
    console.log(results)

    return (
        <div className='procdedureList'>
            {procedureComponents}
        </div>
    )
}

export default AllProcedureList