import { User } from "../../entities/User";

export interface IUserRepository{
    save(id: number, user: User): void;
    findById(id: number): User | undefined;
    findAll(): User[];
}