

import React from 'react'
import styled from 'styled-components'

const Header = () => {
  return (
    <div>
          <Wrapper>
        <div className="nav">
            <nav id="navIcon" className="  navbar navbar-dark bg-dark">
                {/* <img src="./Images/Logo.png" width="30" height="30" className="d-inline-block align-top" alt="img"  /> */}
                <img src='https://cdn-icons-png.flaticon.com/512/564/564445.png' width="30" height="30" className="d-inline-block align-top" alt="img"  />
                {/* <p>yOUr </p> */}
            <h4>iNotes</h4>
            </nav>
        </div>
    </Wrapper>
    </div>
  )
}

export default Header


const Wrapper = styled.section`
.nav{display:flex; font-size: 20px; width:100%;   }
#navIcon{display:flex; gap:1rem; align-items:center; color:white; background-color:black;  width:100%; padding:12px 3rem;  }
`;