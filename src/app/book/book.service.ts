import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/catch';

import { Book } from './book';
import { Author } from '../author/author';
import { Review } from './review';

import { environment } from '../../environments/environment';
const API_URL = environment.apiURL;
const books = '/books';
const authors = '/authors';
const reviews = '/reviews';

/**
* The service provider for everything related to books
*/
@Injectable()
export class BookService {

    /**
    * Constructor of the service
    * @param http The HttpClient - This is necessary in order to perform requests
    */
    constructor(private http: HttpClient) { }

    /**
    * Returns the Observable object containing the list of books retrieved from the API
    * @returns The list of books in real time
    */
    getBooks(): Observable<Book[]> {
        return this.http.get<Book[]>(API_URL + books).catch(err => this.handleError(err));
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getBook(bookId): Observable<Book> {
        return this.http.get<Book>(API_URL + books + '/' + bookId).catch(err => this.handleError(err));
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getBookAuthors(bookId): Observable<Author[]> {
        return this.http.get<Author[]>(API_URL + books + '/' + bookId + authors).catch(err => this.handleError(err));
    }

    /**
    * Returns the Observable object with the details of an author retrieved from the API
    * @returns The author details
    */
    getReviews(bookId): Observable<Review[]> {
        return this.http.get<Review[]>(API_URL + '/books/' + bookId + reviews).catch(err => this.handleError(err));
    }

    /**
    * The method which handles the errors generated by the requests
    * @param error The error which the API REST returned
    */
    private handleError(error: any) {
        return throwError(error.error.errorMessage);
    }
}
