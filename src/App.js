
import './App.css';
import CreateNotes from './CreateNotes';
import Header from './Header';
// import Notes from './Notes';
import styled from 'styled-components';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}
        <Wrapper>

        <Header />
        <CreateNotes />

        {/* <div className="content"> */}
        {/* <Notes /> */}
    {/* </div> */}

        </Wrapper>
      {/* </header> */}
    </div>
  );
}

export default App;



const Wrapper = styled.section`
.content{display:flex; gap:1rem; flex-wrap:wrap; justify-content:flex-start;  padding:12px; 
 }`;