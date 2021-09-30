import React from 'react';
import Source from './Source';

const SourcesList = ({authorData}) => {
    return(
        <div>
        {authorData && authorData.q_results.map((author, index)=>(
           <Source
            number={index+1}  
            name={`${author.firstName} ${author.lastName}`}
            firstName= {author.firstName}
            lastName= {author.lastName}
            email= {author.email}
           /> 
        ))}
        </div>
    )
}
export default SourcesList;