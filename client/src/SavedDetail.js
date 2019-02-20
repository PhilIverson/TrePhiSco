import React from 'react'

import { withSearchContext } from './SearchProvider'

function SavedDetail({ description, bill_item_id, price, hospital, delSaved, compareId }) {

    return (
        <div>
        <div>
            <p>Description: {description}</p>
            <p>Bill Item ID: {bill_item_id}</p>
            <p>Price: ${price}</p>
            <p>Hospital: {hospital}</p>
        </div>
        <button onClick={() => delSaved(compareId)}>x</button>
        </div>
    )
}

export default withSearchContext(SavedDetail)
