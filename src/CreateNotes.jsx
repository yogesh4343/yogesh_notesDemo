import React from 'react'
import styled from 'styled-components';
import { ExportContext } from './Notes';

const CreateNotes = () => {
    const {inputFunction , addButton} = ExportContext()
  return (
    <div>
          <Wrapper>
      <div className="container">
        <input type="text" name="text" className="text"  placeholder="Enter The Title..." onChange={inputFunction}  />
        <div className="textareamain">
            <textarea name="textarea" id="textarea" className="textarea" cols="40" rows="10" placeholder="Enter The Note..." onChange={inputFunction} ></textarea>
        
        </div>

         {/* button   */}
         <div className="button" onClick={addButton}> ＋ </div> 
      </div>
    </Wrapper>
    </div>
  )
}

export default CreateNotes


const Wrapper = styled.section`
.container{ width:40%;  margin:4rem auto; gap:1rem; box-shadow:8px 9px 19px grey; border-radius: 12px; padding:12px; position:relative;  }
.text{width:96%; padding:7px; margin:0rem 0rem 1rem 0px; border:none; font-style:italic;   }
.textarea{ width:96%;  padding:6px; border:none; font-style:italic;  }
.button{padding:12px; border-radius:50%; width:60px; height:60px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom:-15px; right:-15px; position:absolute;  font-size:25px; cursor:pointer;  }

${'' /* responsive  */}

@media only screen and (max-width: 1100px) {
    .container{width:50%; }
}
@media only screen and (max-width: 900px) {
    .container{width:60%; }
}
@media only screen and (max-width: 750px) {
    .container{width:70%; }
}
@media only screen and (max-width: 690px) {
    .container{width:75%; }
}
`;