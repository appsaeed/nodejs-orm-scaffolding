import Model from "../app/base/Model";

export class User extends Model {

    table = 'users';

    fillable = [];

    static boot(data: any) {
        data.uid = Date.now();
        return data;
    }
}