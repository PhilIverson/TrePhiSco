import React from 'react'
import { withSearchContext } from './SearchProvider';
import "../src/styles/procedureDetail.css"

function ProcedureDetail({ _id, description, bill_item_id, price, hospital, saveProcedure }) {
    return (
        <div className="search-container"onClick={e => saveProcedure(_id)}>
            <div className="rest-div">
                <p className="description search">Description: {description}</p>
                <p className="bill search">Bill Item ID: {bill_item_id}</p>
                <p className="hospital search">Hospital: {hospital}</p>
            </div>
            <div className="price-div">
                <p className="price-saved">Price: ${price}</p>
            </div>
        </div>
    )
}

export default withSearchContext(ProcedureDetail)