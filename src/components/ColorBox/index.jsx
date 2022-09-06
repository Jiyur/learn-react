import React, { useState } from 'react';


function ColorBox(props) {
    const [color, setColor]=useState('while')
    return (
        <div>
            {color}

            <button onClick={()=>setColor('black')}>Change to black</button>
            <button onClick={()=>setColor('white')}>Change to whie</button>
        </div>
    );
}

export default ColorBox;