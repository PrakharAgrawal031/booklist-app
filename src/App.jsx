import { useState } from "react";
import BookContextProvider from "./contexts/Bookcontext";
import Navbar from "./components/Navbar";
import BookList from "./components/BookList";
import BookForm from "./components/BookForm";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <BookContextProvider>
        <Navbar/>
        <BookList/>
        <BookForm/>
      </BookContextProvider>
    </div>
  );
}

export default App;
