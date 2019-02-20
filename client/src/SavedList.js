import React from 'react'
import {withSearchContext} from './SearchProvider'

import SavedDetail from './SavedDetail'

function SavedList(props) {
    let savedComponents = []
    if (props.savedProcedures) {
        savedComponents = props.savedProcedures.map((procedure, i) => (
            <SavedDetail key={i}{...procedure} />
        ))
    }
    return (
        <div>
            {savedComponents}
        </div>
    )
}

export default withSearchContext(SavedList)