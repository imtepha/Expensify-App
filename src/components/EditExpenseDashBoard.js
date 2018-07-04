import React from 'react';

const EditExpenseDashBoard = (props) => {
    console.log(props);
    return (
        <div>
            edit page with id {props.match.params.id} 
        </div>
    );
}

export default EditExpenseDashBoard;

/* <div>
edit page with id {props.match.params.id} 
</div>*/
// the {props.match.params.id} will dump the page number