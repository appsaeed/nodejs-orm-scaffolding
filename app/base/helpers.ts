import * as dotenv from 'dotenv';
import statusCode from "./statusCode";
import { Env } from './types/env';
import { Res, StatusCodes, StatusNamesCodes } from "./types/types";
dotenv.config({
    debug: false,
    path: __dirname.replace('app/base', '') + '.env'
});
/**
 * Get env variables by node process.env 
 * @param {Env} name environment variable name
 * @param defaultValue environment variable value default value
 */
export function env<E, D>(name: Env<E>, defaultValue?: D) {
    return process.env[String(name)] as E || defaultValue as D;
}
/**
 * create api response with append data and status code
 * @param {Res} res express response object
 * @param {any} data array, object to respond data and string only leave with message
 * @param {StatusNamesCodes} status status code or name
 * @returns {Res}
 */
export function apiSend(res: Res, data: any, status?: StatusNamesCodes): Res {

    const _status = getStatus(status) || statusCode[2];
    const success = isSuccess(_status.code);

    res.status(_status.code);

    if (data === 'status') {
        return res.json({
            status: _status.name,
            success,
            message: _status.message
        });
    } else if (isObjectLike(data) || Array.isArray(data)) {
        return res.json({
            success,
            data
        })
    }
    return res.json({
        status: _status.name,
        success,
        message: String(data)
    })
}
/**
 * create api response with append data and status code
 * @param {Res} res express response object
 * @param {any} data array, object to respond data and string only leave with message
 * @param {StatusNamesCodes} status status code or name
 */
export function view(res: Res, path: string, status?: StatusNamesCodes) {

    const _status = getStatus(status) || statusCode[2];

    res.status(_status.code);

    return res.render(path, {
        title: _status.name.replace(/_/g, ' '),
        error: String(_status.message)
    })
}


/**
 * Get status number code from status number or status code
 * @param status status number code or status string name
 * @returns
 */
export function getStatus(status: StatusNamesCodes = 200) {
    return statusCode.find(c => (c.code === Number(status) || c.name === String(status)));
}

/**
 * Get success true or fasle from status number or status code
 * @param status status number code or status string name
 * @returns {Boolean}
 */
export function isSuccess(status: StatusCodes): boolean {
    return [200].includes(status)
}

/**
 * Check is object or not a valid object
 * @param value any data which should check 
 * @returns {boolean}
 */
export function isObjectLike(value: any): boolean {
    return Object.prototype.toString.call(value) === "[object Object]";
}


/**
 * Check is object or not a valid object
 * @param value any data which should check 
 * @returns {boolean}
 */
export function isObject(obj: any): boolean {
    return obj?.constructor === Object;
}


/**
 * Check is class or not a valid class
 * @param value any data which should check 
 * @returns {boolean}
 */
export function isOppClass(obj: any): boolean {
    // Check if the object is a function
    if (typeof obj === 'function') {
        try {
            // Attempt to create a new instance of the object (to verify if it's a class)
            new obj();
            return true;
        } catch (error) {
            // If creating an instance throws an error, it's not a class
            return false;
        }
    }
    return false;
}

/**
 * filter the object and return by included keys 
 * @param obj object to filter out by keys
 * @param keys keys to filter the object
 */
export function filterObject<T extends Record<string, any>>(obj: T, keys: string[]) {
    const filtered: any = {};
    keys.forEach(key => {
        if (obj.hasOwnProperty(key)) {
            filtered[key] = obj[key];
        }
    });
    return filtered as T;
}