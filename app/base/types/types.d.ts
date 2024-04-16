import { NextFunction, Request, Response } from "express";
import statusCode from "../statusCode";
export type Req = Request;
export type Res = Response;
export type Next = NextFunction;
export type StatusLists = typeof statusCode[number];
export type StatusNames = StatusLists['name'];
export type StatusCodes = StatusLists['code'];
export type StatusNamesCodes = StatusNames | StatusCodes;
export type AnyObject<T> = { [key in T | number]: any }

type CreateObject<Keys, Value> = {
    [Key in Keys]: Value;
};

