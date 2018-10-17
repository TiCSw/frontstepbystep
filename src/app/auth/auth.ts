import { Book } from "../book/book";

/**
* This class represents an author of the BookStore. 
* It contains all the information relevant to the author.
*/
export class Auth {
    /**
    * The author's id
    */
    id: number;
    
    /**
    * The author's name
    */
    name: string;
    
    /**
    * The location of the author's profile picture
    */
    image: string;
    
    /**
    * The author's birthdate MM-DD-YYYY
    */
    birthdate: any;
    
    /**
    * A brief description of the author's life
    */
    description: string;
    
    /**
    * The list of books of the author
    */
    books: Book[];
}
