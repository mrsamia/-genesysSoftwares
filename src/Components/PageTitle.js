import React from 'react';

function PageTitle(props) {
    return (
        <div>
            <p className='page-title'>{props.name}</p>
        </div>
    );
}

export default PageTitle;