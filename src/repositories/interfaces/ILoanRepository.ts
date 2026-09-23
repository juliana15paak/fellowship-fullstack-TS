import { Loan } from "../../entities/Loan";

export interface ILoanRepository{
    save(userId: number, bookId: number): void;
    remove(userId: number, bookId: number): void;
    findAll(): Loan[];
}