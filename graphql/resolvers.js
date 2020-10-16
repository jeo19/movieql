const Person = [
    {
        name: 'King Kong',
        age: 20,
        gender: 'female',
    },
    {
        name: 'tenet',
        age: 15,
        gender: 'male',
    },
    {
        name: 'Jhon work',
        age: 10,
        gender: 'female',
    },
    {
        name: 'Dulacular',
        age: 20,
        gender: 'male',
    },
    {
        name: 'Big shark',
        age: 17,
        gender: 'female',
    },
];
const resolvers = {
    Query: {
        people: () => Person,
    },
};
export default resolvers;
