import React, { createContext, useReducer, useEffect } from 'react';
import uuid from 'react-uuid';
import { bookReducer } from '../Reducers/BookReducer';


export const BookContext = createContext();


const BookContextProvider = (props) => {
    /*  const [books, setBooks] = useState([
        {title:'Name of the wind', author: 'Patrick Rothfuss', id:1},
        {title:'The Final Empire', author: 'Brandon Sanderson', id:2},
    ]);  
   
    const addBook = (title, author) => {
        setBooks([...books, {title, author, id: uuid()}])
    };

    const removeBook = (id) => {
        setBooks(books.filter(book=> book.id !== id));
    };  */

    const [books, dispatch] = useReducer(bookReducer, [], ()=>{
        const localData = localStorage.getItem('books');
        return localData ? JSON.parse(localData) : [];
    });

    useEffect(()=>{
        localStorage.setItem('books', JSON.stringify(books))
    }, [books])
    
    return(
        <BookContext.Provider value={{books, dispatch}}>
            {props.children}
        </BookContext.Provider>
    )
}

export default BookContextProvider;