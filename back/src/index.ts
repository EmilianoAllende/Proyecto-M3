import "reflect-metadata";
import server from "./server";
import { PORT } from "./config/envs";
import { AppDataSource } from "./config/appDataSource";
import { preloadData } from "./helpers/preloadData";


    AppDataSource.initialize()
    .then(() => {
        console.log("Data Source has been initialized!")
        preloadData()
            .then(res => {
                server.listen(PORT, () => {
                    console.log(`Server listening on port ${PORT}`);
            });
        });
    })
    .catch((err) => {
        console.error("Error during Data Source initialization", err);
    });