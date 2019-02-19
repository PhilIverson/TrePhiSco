import React from 'react'

function ProcedureDetail({ description, bill_item_id, price, hospital }) {
    return (
        
            <div>
                <p>Description: {description}</p>
                <p >Bill Item ID: {bill_item_id}</p>
                <p>Price: ${price}</p>
                <p>Hospital: {hospital}</p>
            </div>
        
    )
}

export default ProcedureDetail