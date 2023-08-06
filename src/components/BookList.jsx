import React, {useContext, useState } from 'react';
import { BookContext } from '../contexts/Bookcontext';
import BookDetails from './BookDetails';


const BookList = () => {
    const { books } = useContext(BookContext);

    return books.length ? ( 

        <div className="book-list">
            <ul>
                {books.map(book=>{
                    return(
                        <BookDetails book={book} key={book.id}/>
                    );
                })}
            </ul>
        </div>
     ) : (
        <div className="empty">
            No books to read. Do something! Its so boring without books!
        </div>
     );
}
 
export default BookList;