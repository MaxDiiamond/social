let state = {

    profilePage: {
        postData: [
            {
                name: "Elon Musk",
                ava: "img/Emusk.jpg",
                ava_mini: "img/Emusk_mini.jpg",
                id: 0,
                posts: [
                    { text: "Hey Guys!", id: 1, likes: 3 },
                    { text: "Walking...", id: 2, likes: 5 },
                    { text: "On a run", id: 3, likes: 7 },
                    { text: "Relaxing", id: 4, likes: 13 },
                ]
            },

            {
                name: "Bill Gates",
                ava: "img/Bill.jpg",
                ava_mini: "img/Bill.jpg",
                id: 1,
                posts: [
                    { text: "Hey Guys!", id: 1, likes: 334 },
                    { text: "Relaxing", id: 2, likes: 133 },
                ]
            }
        ],
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