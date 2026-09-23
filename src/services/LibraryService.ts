import { Book } from "../entities/Book";
import {IBookRepository} from '../repositories/interfaces/IBookRepository'
import {IUserRepository} from '../repositories/interfaces/IUserRepository'
import {ILoanRepository} from '../repositories/interfaces/ILoanRepository'

export class LibraryService{
    constructor(
        protected books: IBookRepository,
        protected users: IUserRepository,
        protected loans: ILoanRepository
    ){}
    registerBook(): void{
        try{

        }catch(e){
            console.log(e);
        }
    }
    registerUser(): void{
        try{

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