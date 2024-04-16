import knex from "knex";
import database from "../../config/database";
import { filterObject } from "./helpers";
import { AnyObject } from "./types/types";

export default class Model {

    protected table?: string;

    protected fillable?: string[];

    protected static boot?: (data: any) => any;

    static getTable() {
        return new this().table || String(this.name).toLowerCase();
    }

    public getFillable() {
        return this.fillable || [];
    }

    static query() {
        return knex(database)(this.getTable())
    }

    static async insert<T>(data: Array<any> | AnyObject<T>) {
        const _data = this.boot ? this.boot(data) : data;
        const fillable = [... (new this().getFillable()), 'uid', 'uuid'];

        const getFillable = Array.isArray(data) ? data.map(item => filterObject(item, fillable)) : filterObject(data, fillable);

        return (await this.query().insert(getFillable))
    }
}
