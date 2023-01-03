import { useState } from "react";
import { Header } from "./components/Header";
import StyledApp from "./styles/StyledApp";

const App = () => {

  const [userInput, setUserInput] = useState<string>("")

  return (
    <StyledApp>,
      <div className='header'>
          <Header setUserInput={setUserInput} />
        </div>
      
    </StyledApp>
  );
}

export default App