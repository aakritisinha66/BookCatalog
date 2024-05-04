# Book Catalog Application

The Book Catalog Application is a web-based platform that allows users to browse and search for books. Users can view detailed information about each book, update book details, add new books, and manage their wishlist.

## Features

- **Browse Books**: Users can view a list of available books on the home page.
- **Update Book**: Admin users can update book details such as title, author, genre, and description.
- **Add New Book**: Admin users can add new books to the catalog.
- **Wishlist**: Users can manage their wishlist, including viewing recently added items and viewing all wishlist items stored in the database.
<img width="1280" alt="image" src="https://github.com/aakritisinha66/BookCatalog/assets/38459180/bfdbf6d8-9d82-4643-9b78-aefdddcd7fca">
<img width="1280" alt="image" src="https://github.com/aakritisinha66/BookCatalog/assets/38459180/ef331595-cedd-4358-91e8-76844e6e4ffb">
<img width="1280" alt="image" src="https://github.com/aakritisinha66/BookCatalog/assets/38459180/ae0e1fc0-963d-46a8-b25f-e171bb09dcfd">
<img width="1280" alt="image" src="https://github.com/aakritisinha66/BookCatalog/assets/38459180/e2d58051-ed85-414c-b174-ad82ecfa7545">

## Technologies Used

- **Frontend**: Angular framework is used for building the frontend of the application. It provides a rich user interface and interacts with the backend APIs.
- **Backend**: A mock server is used as the backend for the application. It provides simulated RESTful APIs for CRUD operations on books and wishlist management. Start the mock server for the backend by running the following command: json-server --watch db.json
- **State Management**: Ngrx/store is used for state management in the Angular frontend. It helps manage application state in a reactive and predictable way.

## Usage

Once the application is running, users can perform the following actions:

- Browse books on the home page.
- Update book details by navigating to the "Update Book" page.
- Add new books by navigating to the "Add New Book" page.
- Manage wishlist: View recently added wishlist items on the home page. View all wishlist items by navigating to the "Wishlist" page.
