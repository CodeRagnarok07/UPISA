import React from 'react'

export default function dropdown({ title, children }) {



    return (
        <div class="dropdown">
            <div >
                {title}
            </div>

            {children}
            
        </div>
    )
}
