import { Book } from "../../entities/Book";

export interface IBookRepository{
    save(id: number, book: Book): void;
    findById(id: number): Book | undefined;
    findAll(): Book[];
}
