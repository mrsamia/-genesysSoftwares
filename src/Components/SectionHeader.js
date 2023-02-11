import React from 'react';

function SectionHeader(props) {
    return (
        <div>
            <h1 className='section-header'>{props.name}</h1>
        </div>
    );
}

export default SectionHeader;