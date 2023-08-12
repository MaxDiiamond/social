let state = {


    profilePage: {
        postData: [
            { text: "Hey Guys!", id: 1, likes: 3 },
            { text: "Walking...", id: 2, likes: 5 },
            { text: "On a run", id: 3, likes: 7 },
            { text: "Relaxing", id: 4, likes: 13 },
        ],

        users: [
            {firstName: "Elon", lastName: "Musk", id: 1},
        ]
    },


    dialougePage: {
        messages: [
            { name: "Ivan Ivanov", message: "How is your day?", id: 1 },
            { name: "Elon Musk", message: "Let's go to space!", id: 2 },
            { name: "Bill Gates", message: "What are you doing today?", id: 3 },
            { name: "Jon Jones", message: "Hello?", id: 4 },
        ]
    }
}

export default state 