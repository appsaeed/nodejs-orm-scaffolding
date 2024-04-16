import Model from "../app/base/Model";

export class User extends Model {

    protected table = 'users';

    fillable = [];

    static boot(data: any) {
        return data;
    }
}