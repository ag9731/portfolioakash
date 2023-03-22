import React from 'react'
import { useNavigate } from 'react-router-dom';

function ProjectItem({image,name,id,skills}) {
    const navigate = useNavigate();
  return (
    <div className='projectItem' onClick={()=>{navigate("/project/"+id);}}>
        <div style={{ backgroundImage: `url(${image})` }} className='bgImage' />
            <h1>{name}</h1>
            <h5>{skills}</h5>
        
    </div>
  );
}

export default ProjectItem 
