import mongoose from 'mongoose';
import {mongodb} from './keys';

mongoose.connect(mongodb.URI) // una vez este conectado ejecute este then
    .then( db => console.log('db is conneted'))
    .catch(err => console.log(err))