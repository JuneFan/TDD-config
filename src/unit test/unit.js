import React from 'react';

const Unit = ({ unit }) => (
    <div>
        <h1>{unit.title}</h1>
        <h2>{unit.artists.join('-')}</h2>
    </div>
)

export default Unit