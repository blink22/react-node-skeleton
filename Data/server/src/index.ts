import "reflect-metadata";
import {createConnection} from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import {Request, Response} from "express";
import {Routes} from "./routes";
import { User } from "./entity/User";

createConnection().then(async connection => {

    // create express app
    const app = express();
    app.use(bodyParser.json());
    // register express routes from defined application routes
    const cors = require('cors')
    app.use(cors());
    Routes.forEach(route => {
        (app as any)[route.method](route.route, (req: Request, res: Response, next: Function) => {
            const result = (new (route.controller as any))[route.action](req, res, next);
            if (result instanceof Promise) {
                result.then(result => result !== null && result !== undefined ? res.send(result) : undefined);

            } else if (result !== null && result !== undefined) {
                res.json(result);
            }
        });
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3001);

    // insert new users for test
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Ashraf",
    //     lastName: "Hofny",
    //     userName: "amhofny",
    //     email: "ashraf.hofny@blink22.com",
    //     age: 28
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Phantom",
    //     lastName: "Assassin",
    //     age: 24
    // }));

    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Timber 22",
    //     lastName: "Saw 22",
    //     age: 26
    // }));
    // await connection.manager.save(connection.manager.create(User, {
    //     firstName: "Phantom 33",
    //     lastName: "Assassin 33",
    //     age: 25
    // }));

    console.log("Express server has started on port 3001. Open http://localhost:3001/users to see results");

}).catch(error => console.log(error));
