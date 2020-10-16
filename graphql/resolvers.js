const human = {
    name: 'King Kong',
    age: 20,
    gender: 'female',
};
const resolvers = {
    Query: {
        person: () => human,
    },
};
export default resolvers;
