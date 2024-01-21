import React from "react";
const users = [
    {
        id: 1,
        name: "Supphitan",
        email: "supphitan.p@kkumail.com",
    },
    {
        id: 2,
        name: "Pimnapa",
        email: "pimnapa.s@kkumail.com",
    }
]

const groups = [
    {
        id: 1,
        name: "Group 1",
        users: [1, 2],
    },
    {
        id: 2,
        name: "Group 2",
        users: [1, 2],
    }
]

export { users, groups };