import{IBookRepository} from '../repositories/interfaces/IBookRepository';
import {Book} from '../entities/Book';

export class BookRepository implements IBookRepository{
    private livros = new Map<number, Book>();

    save(id: number, book: Book){
        if(this.livros.has(id)){
            throw new Error('Already exists a book with this Id saved.')
        } else {
            this.livros.set(id, book);
        }
    }
    findById(id: number): Book | undefined {
        if(this.livros.get(id) === undefined){
            throw new Error('Book do not founded.');
        } else {
            return this.livros.get(id);
        }
    }
}