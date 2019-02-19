import React from 'react'

import ProcedureDetail from './ProcedureDetail';

function ProcedureList(props) {
    let procedureComponents = []
    if (props.results.procedures){
    procedureComponents = props.results.procedures.map((procedure, i) => (
        <ProcedureDetail key={i}{...procedure} />
    ))
    }
   
    return (
        <div className='procdedureList' >
            {procedureComponents}
        </div>
    )
}

export default ProcedureList