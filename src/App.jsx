import { useState } from "react";
import BookContextProvider from "./contexts/Bookcontext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
      </BookContextProvider>
    </div>
  );
}

export default App;
