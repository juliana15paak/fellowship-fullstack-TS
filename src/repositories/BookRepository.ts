import{IBookRepository} from './interfaces/IBookRepository';
import {Book} from '../entities/Book';

export class BookRepository implements IBookRepository{
    private books = new Map<number, Book>();

    save(id: number, book: Book){
        if(this.books.has(id)){
            throw new Error('Already exists a book with this Id saved.')
        } else {
            this.books.set(id, book);
        }
    }
    findById(id: number): Book | undefined {
        if(this.books.get(id) === undefined){
            throw new Error('Book do not founded.');
        } else {
            return this.books.get(id);
        }
    }
    findAll(): Book[]{
        if(this.books.size <= 0){
            throw new Error('Do not have books registered.')
        } else {
            return [...this.books.values()];
        }
    }
}