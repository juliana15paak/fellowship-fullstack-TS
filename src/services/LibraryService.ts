import { Book } from "../entities/Book";
import { User } from "../entities/User";
import {IBookRepository} from '../repositories/interfaces/IBookRepository'
import {IUserRepository} from '../repositories/interfaces/IUserRepository'
import {ILoanRepository} from '../repositories/interfaces/ILoanRepository'

export class LibraryService{
    constructor(
        protected books: IBookRepository,
        protected users: IUserRepository,
        protected loans: ILoanRepository
    ){}
    registerBook(booksList: Book[]): void{
        try{
            for(let book of booksList){
                this.books.save(book);
            }
        }catch(e){
            console.log(e);
        }
    }
    registerUser(usersList: User[]): void{
        try{
            for(let user of usersList){
                this.users.save(user);
            }
        }catch(e){
            console.log(e);
        }
    }
    loanBook(): void{
        try{
            
        }catch(e){
            console.log(e);
        }
    }
    giveBackBook(): void{
        try{

        }catch(e){
            console.log(e);
        }
    }
    search(){
        try{

        }catch(e){
            console.log(e);
        }
    }
} 