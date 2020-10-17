import { Person } from './db';
const resolvers = {
    Query: {
        people: () => Person,
    },
};
export default resolvers;
