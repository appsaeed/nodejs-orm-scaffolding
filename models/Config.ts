import Model from "../app/base/Model";

export default class Config extends Model {

    protected table = 'app_config';

    protected fillable = ['setting', 'value'];

}