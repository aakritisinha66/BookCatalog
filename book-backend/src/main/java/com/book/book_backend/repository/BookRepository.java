package com.book.book_backend.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.book.book_backend.entity.Book;

@Repository
public interface BookRepository extends JpaRepository<Book, String>{

    
}
