import React, { createContext, useContext, useEffect, useState } from 'react'
import styled from 'styled-components';
import { FaTrash } from "react-icons/fa";

const Context = createContext()

// const localStorageFunc = ()=>{
//     let get = (localStorage.getItem('iNotes'))
//     if(get === []){
//         return []
//     }
//     else{
//         return JSON.parse(get)
//     }
// }

const Notes = ({children}) => {
    
    const[state,setState] = useState({
        text : "",
        textarea : "",
    })
    let len = state.text
    console.log(len);


    const[array,setArray] = useState([])
    // const[array,setArray] = useState(localStorageFunc())
    console.log(array);

    // input function 
    const inputFunction = (event)=>{
        let value = event.target.value;
        let name = event.target.name;
        console.log(value , name)

        setState((prev)=>{
            return{
                ...prev,
                [name] : value,
            }
        })
    }

 
    
    // addButton 
    const addButton=()=>{

        // show alrt 
        if (state.text === undefined) {
            alert("Enter The Title..")
        }
        else if (state.textarea === undefined) {
            alert("Enter The Description..")
        }
        else{ setArray((prev)=>{
            return[
                ...prev,
                state,
            ]
            })
        }


            // setArray((prev)=>{
            // return[
            //     ...prev,
            //     state,
            // ]
            // })
    }

    // delete button 
    const deleteButton=(ind)=>{
        console.log(ind)
        let deleteInd = array.filter((curEl,id)=>{
            return ind!==id
        })
        setArray(deleteInd)
        return deleteInd
    }

    useEffect(()=>{
        localStorage.setItem("iNotes" , JSON.stringify(array))
    },[array])

  return (
    <div>
    <Context.Provider value={{...state , inputFunction , addButton}}> {children} </Context.Provider>
        <Wrapper >
            <div  className="mainCont">
            <div className="container">
        {array.map((curEl,ind)=>{

          return(
                    <div key={ind} >
                    <div className="data" >  
            <span className="indexShow"> {ind + 1} </span>
                        <div className="title"> {curEl.text}  </div>
                        <span  className="movingWidth"/>
                        <div className="description"> {curEl.textarea} </div>
                        <div className="button" onClick={()=>deleteButton(ind)} > <FaTrash /> </div>
                </div> 
            </div>


          )
        })}
      </div>
          </div>
    </Wrapper>
    </div>
  )
}


export const ExportContext = ()=>{
    return useContext(Context);
}

export default Notes


const Wrapper = styled.section`
.container{  margin: 1rem auto; display: flex; gap: 2rem; flex-wrap: wrap; display: contents; }
.data{position:relative; width:18rem; padding:1rem;  }
.data{ box-shadow:8px 9px 19px grey; border-radius:12px; font-size:12px;   }
.text{width:100%; padding:4px; margin: 12px 0px 12px 0px; border:none; font-size:italic;    }
.textarea{width:100%; padding:4px; margin: 0px 0px 12px 0px; border:none; font-size:italic;    }
.button{padding:12px; border-radius:50%; width:50px; height:50px; background-color:black; color:#fff; display:flex; align-items:center; justify-content:center; bottom:-15px; right:-15px; position:absolute;  cursor:pointer;}

.title{ width: 16rem; height: 1rem; padding:12px;  }
.description{ width: 16rem; height: 5rem; padding:12px;  }
.mainCont{display: flex;
    gap: 1.5rem;
    flex-wrap: wrap;
    padding:2.5rem;
}
.indexShow{ padding: .7rem; position:absolute;  top: -1rem; left:-1rem; border-radius: 50%; background:black; color:white; font-size:15px; content: ""; width: 13px; text-align: center; }

.button:hover{ background:white; color:red; font-size:2rem; transition: .4s ease; }

.movingWidth{animation: borderAnimation 3s linear infinite;
    width: 0% ;
    height:.2rem;
    ${'' /* border: .1rem solid grey; */}
    display:flex;
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
	background-size: 400% 400%;
    ${'' /* border: .3rem radial-gradient(ellipse at var(--gradX) var(--gradY), var(--c1), var(--c1) 10%, var(--c2) 40%) 30;} */}
${'' /* animations keyframes  */}
}
@keyframes borderAnimation{
    0%{
        width:0% ;
    }
    50%{
        width:17%;
    }
    100%{
        width:35%
    }
}

${'' /* responsive  */}

@media only screen and (max-width: 890px) {
.content{gap:0px; }
}
`;