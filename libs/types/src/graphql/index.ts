
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export interface CreateAuthInput {
    exampleField: number;
}

export interface CreateProductInput {
    exampleField: number;
}

export interface CreateUserInput {
    email: string;
    name: string;
    password: string;
    role?: Nullable<string>;
}

export interface UpdateAuthInput {
    exampleField?: Nullable<number>;
    id: number;
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

export interface Auth {
    exampleField: number;
}

export interface IMutation {
    createAuth(createAuthInput: CreateAuthInput): Auth | Promise<Auth>;
    createProduct(createProductInput: CreateProductInput): Product | Promise<Product>;
    createUser(createUserInput: CreateUserInput): string | Promise<string>;
    removeAuth(id: number): Auth | Promise<Auth>;
    removeProduct(id: number): Product | Promise<Product>;
    removeUser(id: number): User | Promise<User>;
    updateAuth(updateAuthInput: UpdateAuthInput): Auth | Promise<Auth>;
    updateProduct(updateProductInput: UpdateProductInput): Product | Promise<Product>;
    updateUser(updateUserInput: UpdateUserInput): User | Promise<User>;
}

export interface Product {
    exampleField: number;
}

export interface IQuery {
    auth(id: number): Auth | Promise<Auth>;
    product(id: number): Product | Promise<Product>;
    products(): Product[] | Promise<Product[]>;
    user(id: number): User | Promise<User>;
    users(): User[] | Promise<User[]>;
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

export type DateTime = any;
type Nullable<T> = T | null;
