import { Book } from "../../entities/Book";

export interface ILoanRepository{
    save(): void;
    remove(): void;
    findAll(): Book;
}