import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import AddIcon from '@mui/icons-material/Add';
import { Button } from '@mui/material'

const fileTypes = ["JPG", "PNG", "GIF"];

function DragDrop() {
    const [file, setFile] = useState(null);
    const handleChange = (file) => {
        setFile(file);
    };
    return (
        <div className="drapAndDrop-Main-Div" >
            <div>
            <FileUploader onDrop={(file)=>{console.log('my files',file)}} handleChange={handleChange} name="file" types={fileTypes} className='dragAndDrop'>
                <AddIcon sx={{ color: 'white' }} />
                <h5 style={{ color: 'white',fontSize:'larger' }}>Drag And Drop or Click to upload files here</h5>
                <Button variant="outlined" className='uploadFilesBtn'>Upload or Drop your Files</Button>
            </FileUploader>
            </div>
            <Button variant='contained' className='create-project'>Create Project</Button>
            {
            file!==null?
                console.log('file====>',file)
            // file.map((myimg,index)=>{
            //     return(
            //         <img src={myimg.name} key={index}/>    
            //     )
                
            // })
            :
            ""
        }
        </div>
    );
}

export default DragDrop;
