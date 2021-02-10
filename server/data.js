//Our in-memory database

const users = [
    {
        _id: 1587912698986,
        api_key: 'aszx',
        email: 'nisha@home.org',
        host: 'http://127.0.0.1:4200',
        usage: [{ date: '2021-02-08', count: 17 }],
    },
];

const cheeses = [
    { _id: 1, name: 'Cheddar' },
    { _id: 2, name: 'Mozzarella' },
];

module.exports = { users, cheeses };