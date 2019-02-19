import React from 'react'
import { withSearchContext } from './SearchProvider';

function ProcedureDetail({ _id, description, bill_item_id, price, hospital, saveProcedure }) {
    // let savedProcedure = {
    //     description,
    //     bill_item_id,
    //     price,
    //     hospital
    // };

    return (
        <div onClick={e => saveProcedure(_id)}>
            <p>Description: {description}</p>
            <p>Bill Item ID: {bill_item_id}</p>
            <p>Price: ${price}</p>
            <p>Hospital: {hospital}</p>
        </div>
    )
}

export default withSearchContext(ProcedureDetail)