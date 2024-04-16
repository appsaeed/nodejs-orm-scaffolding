import knex from "knex";
import database from "../../config/database";
import { filterObject } from "./helpers";

type Fillable<T extends string> = {
    [key in T]: any
}

export default class Model {

    protected table?: string;

    protected fillable?: string[];

    static boot?: (data: any) => any;

    static getTable() {
        return new this().table || this.name;
    }

    getFillable() {
        return this.fillable || [];
    }

    static query() {
        return knex(database)(this.getTable())
    }

    static insert(data: Array<any> | { key: string, value: any }) {
        const _data = this.boot ? this.boot(data) : data;
        const fillable = filterObject(_data, (new this().getFillable()));
        return this.query().insert(fillable)
    }
}
