import { AppDataSource, userModel } from "../config/appDataSource";

const user1 = {
    name: "Fernanda",
    email: "fercha@mail.com",
    birthdate: "25/04/1996",
    nDni: 38805051,
}

const user2 = {
    name: "Emiliano",
    email: "emil@mail.com",
    birthdate: "26/11/1997",
    nDni: 38905151,
}

const user3 = {
    name: "Rosario",
    email: "rma@mail.com",
    birthdate: "22/10/1997",
    nDni: 39955351,
}

export const preloadData = async () => {
    await AppDataSource.manager.transaction(async (transactionalEntityManager) => {

        const users = await userModel.find();

        if (users.length) return console.log("Data preload not executed because of preexistent data.");
        
        const newUser1 = await userModel.create(user1);
        const newUser2 = await userModel.create(user2);
        const newUser3 = await userModel.create(user3);

        await transactionalEntityManager.save(newUser1);
        await transactionalEntityManager.save(newUser2);
        await transactionalEntityManager.save(newUser3);

        console.log("Data preload was successful.");
})};

