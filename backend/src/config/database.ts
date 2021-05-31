import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

const dbOptions: ConnectOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
}

mongoose.connect('mongodb+srv://David10ehb:oNDSUWjqgWKeETIl@cluster0.8n0yq.mongodb.net/ripley-test?retryWrites=true&w=majority', dbOptions);

const connection = mongoose.connection;

connection.once('open', () => {
    console.log('mongodb connection stablished');
});

connection.on('error', err => {
    console.log('error: ', err);
    process.exit(1);
})

