package com.book.book_backend.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

import com.book.book_backend.dto.BookDTO;
import com.book.book_backend.entity.Book;
import com.book.book_backend.repository.BookRepository;

@Service
public class BookService {
    @Autowired BookRepository bookRepository;

    public List<Book> getAllBooks() {
        return bookRepository.findAll();
    }

    public Book getBookByID(String Id){
        Optional<Book> book = bookRepository.findById(Id);
        return book.orElse(null);
    }

    public Book createBook(BookDTO bookDTO){
        Book book = convertToEntity(bookDTO);
        return bookRepository.save(book);

    }

    public void deleteBook(String Id){
        bookRepository.deleteById(Id);
    }

    public Book updateBook(BookDTO bookDTO, String Id){
        Book book = getBookByID(Id);
        if(book == null){
            return null;
        }
        Book updatedBook = updateExistBook(book, bookDTO);
        return bookRepository.save(updatedBook);
    }

    private Book convertToEntity(BookDTO bookDTO){
        Book book = new Book();
        book.setTitle(bookDTO.getTitle());
        book.setAuthor(bookDTO.getAuthor());
        book.setAvatar(bookDTO.getAvatar());
        book.setDescription(bookDTO.getDescription());
        book.setImg(bookDTO.getImg());
        book.setGenre(bookDTO.getGenre());
        book.setToggle(bookDTO.isToggle());
        book.setFavorite(bookDTO.isFavorite());

        return book;

    }

    private Book updateExistBook(Book book, BookDTO bookDTO) {
        book.setTitle(bookDTO.getTitle());
        book.setAuthor(bookDTO.getAuthor());
        book.setAvatar(bookDTO.getAvatar());
        book.setDescription(bookDTO.getDescription());
        book.setImg(bookDTO.getImg());
        book.setGenre(bookDTO.getGenre());
        book.setToggle(bookDTO.isToggle());
        book.setFavorite(bookDTO.isFavorite());
        return book;
    }

    
    
}
