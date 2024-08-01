import React from 'react'

function Links({github,linkedin}) {
    return (
        <div>
            <h3>Links</h3>
            {linkedin && <a href={linkedin}>{linkedin}</a>}
            {github && <a href= {github}>{github}</a>}

            
        </div>
    )
}

export default Links