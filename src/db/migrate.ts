import {drizzle} from "drizzle-orm/neon-http";
import {migrate} from "drizzle-orm/neon-http/migrator";
import {neon} from "@neondatabase/serverless";
import * as dotenv from 'dotenv';

dotenv.config();

const dbUrl = process.env.DB_URL as string;
const sql = neon(dbUrl);

const db = drizzle(sql);

const main = async () => {
    try {
        await migrate(db, {
            migrationsFolder: "src/db/migrations"
        });
        console.log("migration ok");
    } catch(error) {
        console.log(error);
        process.exit(1);
    }
};

main();