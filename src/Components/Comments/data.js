const data = [
  {
    id: "001",
    author: "albert",
    body: "Whats the status?",
    timestamp: Math.floor(Math.random() * 60),
    points: "2",
    replies: [
      {
        id: "003",
        author: "haren",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: Math.floor(Math.random() * 60),
        points: "3",
        replies: [
          {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: Math.floor(Math.random() * 60),
            points: "8",
            replies: [],
          },
        ],
      },
      {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: Math.floor(Math.random() * 60),
        points: "2",
        replies: [],
      },
    ],
  },
  {
    id: "002",
    author: "Harsh",
    body: "You will get a Job?",
    timestamp: Math.floor(Math.random() * 60),
    points: "2",
    replies: [
      {
        id: "003",
        author: "Random Person",
        body: "Wrote the test suites, waiting for approval?",
        timestamp: Math.floor(Math.random() * 60),
        points: "3",
        replies: [
          {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: Math.floor(Math.random() * 60),
            points: "8",
            replies: [
              {
                id: "004",
                author: "albert",
                body: "Thanks for the update!",
                timestamp: "Sun Aug 02 2020 18:15:45 GMT+0530",
                points: "8",
                replies: [],
              },
              {
                id: "004",
                author: "albert",
                body: "Thanks for the update!",
                timestamp: Math.floor(Math.random() * 60),
                points: "8",
                replies: [],
              },
              {
                id: "004",
                author: "albert",
                body: "Thanks for the update!",
                timestamp: Math.floor(Math.random() * 60),
                points: "8",
                replies: [],
              },
              {
                id: "004",
                author: "albert",
                body: "Thanks for the update!",
                timestamp: Math.floor(Math.random() * 60),
                points: "8",
                replies: [],
              },
            ],
          },
          {
            id: "004",
            author: "albert",
            body: "Thanks for the update!",
            timestamp: Math.floor(Math.random() * 60),
            points: "8",
            replies: [],
          },
        ],
      },
      {
        id: "002",
        author: "Nrupul",
        body: "looking forward for the demo!",
        timestamp: Math.floor(Math.random() * 60),
        points: "2",
        replies: [],
      },
    ],
  },
];

export default data;
