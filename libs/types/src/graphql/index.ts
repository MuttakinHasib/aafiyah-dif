
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateProductInput {
    exampleField: number;
}

export interface CreateUserInput {
    email: string;
    name: string;
    password: string;
    role?: Nullable<string>;
}

export interface LoginInput {
    email: string;
    password: string;
}

export interface UpdateProductInput {
    exampleField?: Nullable<number>;
    id: number;
}

export interface UpdateUserInput {
    email?: Nullable<string>;
    id: number;
    name?: Nullable<string>;
    password?: Nullable<string>;
    role?: Nullable<string>;
}

export interface LoginResponse {
    message: string;
    user: UserWithoutPassword;
}

export interface IMutation {
    createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;
    createUser(createUserInput: CreateUserInput): string | Promise<string>;
    login(loginInput: LoginInput): LoginResponse | Promise<LoginResponse>;
    removeProduct(id: number): Product | Promise<Product>;
    removeUser(id: number): User | Promise<User>;
    updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export interface Product {
    exampleField: number;
}

export interface IQuery {
    logout(): string | Promise<string>;
    product(id: number): Product | Promise<Product>;
    products(): Product[] | Promise<Product[]>;
    user(id: number): User | Promise<User>;
    users(): User[] | Promise<User[]>;
    whoAmI(): UserWithoutPassword | Promise<UserWithoutPassword>;
}

export interface User {
    avatar: string;
    created_at: DateTime;
    email: string;
    id: string;
    name: string;
    password: string;
    role?: Nullable<string>;
    updated_at: DateTime;
}

export interface UserWithoutPassword {
    avatar: string;
    created_at: DateTime;
    email: string;
    id: string;
    name: string;
    role?: Nullable<string>;
    updated_at: DateTime;
}

export type DateTime = any;
type Nullable<T> = T | null;
