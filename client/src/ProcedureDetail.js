import React from 'react'

function ProcedureDetail({ description, bill_item_id, price, hospital }) {


    return (
        <div>
            <div>
                <h5>Description: {description}</h5>
                <p >Bill Item ID: {bill_item_id}</p>
                <p>Price: ${price}</p>
                <p>Flight Number: {hospital}</p>
            </div>
        </div>
    )
}

export default ProcedureDetail