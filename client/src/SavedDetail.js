import React from 'react'

import { withSearchContext } from './SearchProvider'

import './styles/saveDetail.css'
function SavedDetail({ description, bill_item_id, price, hospital, delSaved, compareId }) {

    return (
        <div className="procedure-container">
            <div className="rest-div">
                <p className="description saved">Description: {description}</p>
                <p className="bill saved">Bill Item ID: {bill_item_id}</p>
                <p className="hospital saved">Hospital: {hospital}</p>
            </div>
            <div className="x-div">
                <p className="price-saved">Price: ${price}</p>
                <button className="del" onClick={() => delSaved(compareId)}>x</button>
            </div>
            
        </div>
    )
}

export default withSearchContext(SavedDetail)
