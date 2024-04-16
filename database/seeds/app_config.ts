import { Knex } from "knex";
import config from "../../config/config";
import cors from "../../config/cors";
import filesconfig from "../../config/filesconfig";
import mail from "../../config/mail";
import Config from "../../models/Config";
import database from "../knex";

function getVlaues(items: any, prefix: string = '') {
    const data = [];
    for (const key in items) {
        data.push({
            setting: `${prefix}_${key}`,
            value: items[key]
        })
    }
    return data;
}

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    //seed:run --specific=/database/seeds/app_config.ts
    await Config.query().del();
    const data = [
        ...getVlaues(config),
        ...getVlaues(database),
        ...getVlaues(database.connection, 'db'),
        ...getVlaues(database.migrations, 'db'),
        ...getVlaues(database.seeds, 'db'),
        ...getVlaues(config.session.express, 'session'),
        ...getVlaues(mail, 'mail'),
        ...getVlaues(mail.from, 'mail_from'),
        ...getVlaues(mail.mailers.smtp, 'mail_smtp'),
        ...getVlaues(mail.mailers.sendmail, 'mail_sendmail'),
        ...getVlaues(cors, 'cors'),
        ...getVlaues(filesconfig, 'filesystem'),
    ];



    // Inserts seed entries
    await Config.insert([

    ]);
};
