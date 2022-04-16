import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express';

import AdminJSMongoose from '@adminjs/mongoose';
AdminJS.registerAdapter(AdminJSMongoose)


import express from 'express';


import mongoose from 'mongoose';
import { dbConnect, mongooseOptions } from './Config/Database/index.js';
await mongoose.connect(dbConnect, mongooseOptions);




import { adminJsOptions } from './Config/AdminJS/index.js'
const adminJS = new AdminJS(adminJsOptions)
const router = AdminJSExpress.buildRouter(adminJS)


import {port} from './Config/index.js'
const app = express();
app.use(adminJS.options.rootPath, router)
app.listen(port, () => console.log('AdminJS is under localhost:8080/admin'))