import logo from './logo.svg'
// import marvelLogo from './marvelLogo.svg'
// import googlePlay from './googlePlay.svg'
// import appStore from './appStore.svg'
// import screenImage from './screenImage.svg'
// import profile from './profile.png'

export const assets = {
    logo,
    // marvelLogo,
    // googlePlay,
    // appStore,
    // screenImage,
    // profile
}

export const dummyTrailers = [
    {
        image: "https://img.youtube.com/vi/l275FrBatio/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=l275FrBatio' // Odum Kuthira Chadum Kuthira
    },
    {
        image: "https://img.youtube.com/vi/B4-Xhaajyok/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=B4-Xhaajyok' // Hridayapoorvam
    },
    {
        image: "https://img.youtube.com/vi/BdSgJv7nsTE/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=BdSgJv7nsTE' // Sumathi Valavu
    },
    {
        image: "https://img.youtube.com/vi/UttccYQXpTM/maxresdefault.jpg",
        videoUrl: 'https://www.youtube.com/watch?v=UttccYQXpTM' // Aavesham
    },
]

export const dummyCastsData = [
    { "name": "Fahadh Faasil", "profile_path": "https://image.tmdb.org/t/p/original/m9EtP1Yrzv6v7dMaC9mRaGhd1um.jpg", },
    { "name": "Hipzster", "profile_path": "https://image.tmdb.org/t/p/original/usWnHCzbADijULREZYSJ0qfM00y.jpg", },
    { "name": "Mithun Jai Sankar", "profile_path": "https://image.tmdb.org/t/p/original/snk6JiXOOoRjPtHU5VMoy6qbd32.jpg", },
    { "name": "Roshan Shanavas", "profile_path": "https://image.tmdb.org/t/p/original/zmznPrQ9GSZwcOIUT0c3GyETwrP.jpg", },
    { "name": "Sajin Gopu", "profile_path": "https://image.tmdb.org/t/p/original/nTSPtzWu6deZTJtWXHUpACVznY4.jpg", },
    { "name": "Pooja Mohanraj", "profile_path": "https://image.tmdb.org/t/p/original/mGAPQG2OKTgdKFkp9YpvCSqcbgY.jpg", },
    { "name": "Ashish Vidyarthi", "profile_path": "https://image.tmdb.org/t/p/original/lJm89neuiVlYISEqNpGZA5kTAnP.jpg", },
    { "name": "Pranav Raj", "profile_path": "https://image.tmdb.org/t/p/original/hLN0Ca09KwQOFLZLPIEzgTIbqqg.jpg", },
    { "name": "Midhun Muraleedharan", "profile_path": "https://image.tmdb.org/t/p/original/qY4W0zfGBYzlCyCC0QDJS1Muoa0.jpg", },
    { "name": "Mansoor Ali Khan", "profile_path": "https://image.tmdb.org/t/p/original/6Ksb8ANhhoWWGnlM6O1qrySd7e1.jpg", },
    { "name": "Thangam Mohan", "profile_path": "https://image.tmdb.org/t/p/original/yhI4MK5atavKBD9wiJtaO1say1p.jpg", },
    { "name": "Prem Kumar", "profile_path": "https://image.tmdb.org/t/p/original/uPq4xUPiJIMW5rXF9AT0GrRqgJY.jpg", },
]

export const dummyShowsData = [
    {
        "_id": "324544",
        "id": 324544,
        "title": "Odum Kuthira Chadum Kuthira",
        "overview": "Aby, a cheerful groom, has his life turned upside down by his bride's words. He later meets a stern girl who reluctantly seeks his help. As they mend their broken paths, his ex-fiance reappears, finally understanding Aby's deepest dream. Amidst the rekindled past and new connections, Aby reveals a secret that ultimately brings him peace.",
        "poster_path": "https://image.tmdb.org/t/p/original/dDlfjR7gllmr8HTeN6rfrYhTdwX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/op3qmNhvwEvyT7UFyPbIfQmKriB.jpg",
        "genres": [
            { "id": 35, "name": "Comedy" },
            { "id": 18, "name": "Drama" },
            { "id": 10749, "name": "Romance" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-08-29",
        "original_language": "ml",
        "tagline": "Run like a horse, jump like a horse.",
        "vote_average": 6.8,
        "vote_count": 17000,
        "runtime": 140, // Estimated runtime
    },
    {
        "_id": "1232546",
        "id": 1232546,
        "title": "Hridayapoorvam",
        "overview": "Sandeep Balakrishnan, a heart transplant recipient, visits Pune to meet the family of his late heart donor, a spirited Colonel. When circumstances force him to stay with the family, he becomes entwined in their lives.",
        "poster_path": "https://image.tmdb.org/t/p/original/juA4IWO52Fecx8lhAsxmDgy3M3.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/icFWIk1KfkWLZnugZAJEDauNZ94.jpg",
        "genres": [
            { "id": 10749, "name": "Romance" },
            { "id": 18, "name": "Drama" },
            { "id": 35, "name": "Comedy" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-08-28",
        "original_language": "ml",
        "tagline": "Wholeheartedly.",
        "vote_average": 6.9,
        "vote_count": 21000,
        "runtime": 151,
    },
    {
        "_id": "552524",
        "id": 552524,
        "title": "Sumathi Valavu",
        "overview": "A haunted curve in Kerala, named after Sumathi's tragic death, draws various people into supernatural encounters. As they experience strange events, the mystery of Sumathi and the road's dark history begins to unfold.",
        "poster_path": "https://image.tmdb.org/t/p/original/mKKqV23MQ0uakJS8OCE2TfV5jNS.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/7Zx3wDG5bBtcfk8lcnCWDOLM4Y4.jpg",
        "genres": [
            { "id": 27, "name": "Horror" },
            { "id": 9648, "name": "Mystery" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-07-28",
        "original_language": "ml",
        "tagline": "The curve no one dares cross.",
        "vote_average": 7.1,
        "vote_count": 15500,
        "runtime": 135, // Estimated runtime
    },
    {
        "_id": "668489",
        "id": 668489,
        "title": "Aavesham",
        "overview": "Three youngsters in Bengaluru befriend a local gangster named 'Rangan' to help them take revenge on their college bully. However, their interactions with Rangan lead to unexpected twists and turns, shaping the narrative into a compelling blend of humor, drama, and action.",
        "poster_path": "https://image.tmdb.org/t/p/original/ubP2OsF3GlfqYPvXyLw9d78djGX.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/65MVgDa6YjSdqzh7YOA04mYkioo.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 35, "name": "Comedy" },
            { "id": 12, "name": "Adventure" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-04-11",
        "original_language": "ml",
        "tagline": "A rollercoaster of excitement.",
        "vote_average": 8.0,
        "vote_count": 45000,
        "runtime": 140, // Estimated runtime
    },
    {
        "_id": "950387",
        "id": 950387,
        "title": "Manjummel Boys",
        "overview": "Based on a real-life incident that happened in Guna Caves in 2006, the film follows a group of friends who travel to Kodaikanal. Their vacation is affected when one of them becomes trapped in a deep hole in the Guna Caves, prompting a dangerous rescue effort.",
        "poster_path": "https://image.tmdb.org/t/p/original/yFHHfHcUgGAxziP1C3lLt0q2T4s.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/2Nti3gYAX513wvhp8IiLL6ZDyOm.jpg",
        "genres": [
            { "id": 12, "name": "Adventure" },
            { "id": 53, "name": "Thriller" },
            { "id": 18, "name": "Drama" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-02-22",
        "original_language": "ml",
        "tagline": "One life. One friend.",
        "vote_average": 8.2,
        "vote_count": 55000,
        "runtime": 135, // Estimated runtime
    },
    {
        "_id": "575265",
        "id": 575265,
        "title": "L2: Empuraan",
        "overview": "The film explores the journey and rise of Khureshi Ab'raam / Stephen Nedumpally, a powerful figure in the criminal and political underworld, continuing the events from 'Lucifer'.",
        "poster_path": "https://image.tmdb.org/t/p/original/z53D72EAOxGRqdr7KXXWp9dJiDe.jpg",
        "backdrop_path": "https://image.tmdb.org/t/p/original/1p5aI299YBnqrEEvVGJERk2MXXb.jpg",
        "genres": [
            { "id": 28, "name": "Action" },
            { "id": 53, "name": "Thriller" },
            { "id": 80, "name": "Crime" }
        ],
        "casts": dummyCastsData,
        "release_date": "2025-03-27",
        "original_language": "ml",
        "tagline": "The Empire Strikes Back.",
        "vote_average": 7.5,
        "vote_count": 35000,
        "runtime": 175, // Estimated runtime
    },
]

export const dummyDateTimeData = {
    "2025-07-24": [
        { "time": "2025-07-24T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd1" },
        { "time": "2025-07-24T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd2" },
        { "time": "2025-07-24T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd3" }
    ],
    "2025-07-25": [
        { "time": "2025-07-25T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd4" },
        { "time": "2025-07-25T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd5" },
        { "time": "2025-07-25T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd6" }
    ],
    "2025-07-26": [
        { "time": "2025-07-26T01:00:00.000Z", "showId": "68395b407f6329be2bb45bd7" },
        { "time": "2025-07-26T03:00:00.000Z", "showId": "68395b407f6329be2bb45bd8" },
        { "time": "2025-07-26T05:00:00.000Z", "showId": "68395b407f6329be2bb45bd9" }
    ],
    "2025-07-27": [
        { "time": "2025-07-27T01:00:00.000Z", "showId": "68395b407f6329be2bb45bda" },
        { "time": "2025-07-27T03:00:00.000Z", "showId": "68395b407f6329be2bb45bdb" },
        { "time": "2025-07-27T05:00:00.000Z", "showId": "68395b407f6329be2bb45bdc" }
    ]
}

export const dummyDashboardData = {
    "totalBookings": 14,
    "totalRevenue": 1517,
    "totalUser": 5,
    "activeShows": [
        {
            "_id": "68352363e96d99513e4221a4",
            "movie": dummyShowsData[0], // Odum Kuthira Chadum Kuthira
            "showDateTime": "2025-06-30T02:30:00.000Z",
            "showPrice": 59,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "C1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "6835238fe96d99513e4221a8",
            "movie": dummyShowsData[1], // Hridayapoorvam
            "showDateTime": "2025-06-30T15:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221a9",
            "movie": dummyShowsData[2], // Sumathi Valavu
            "showDateTime": "2025-06-30T03:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {},
        },
        {
            "_id": "6835238fe96d99513e4221aa",
            "movie": dummyShowsData[3], // Aavesham
            "showDateTime": "2025-07-15T16:30:00.000Z",
            "showPrice": 81,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A4": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
        },
        {
            "_id": "683682072b5989c29fc6dc0d",
            "movie": dummyShowsData[4], // Manjummel Boys
            "showDateTime": "2025-06-05T15:30:00.000Z",
            "showPrice": 49,
            "occupiedSeats": {
                "A1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "A3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B1": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B2": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok",
                "B3": "user_2xO4XPCgWWwWq9EHuQxc5UWqIok"
            },
            "__v": 0
        },
        {
            "_id": "68380044686d454f2116b39a",
            "movie": dummyShowsData[5], // L2: Empuraan
            "showDateTime": "2025-06-20T16:00:00.000Z",
            "showPrice": 79,
            "occupiedSeats": {
                "A1": "user_2xl7eCSUHddibk5lRxfOtw9RMwX",
                "A2": "user_2xl7eCSUHddibk5lRxfOtw9RMwX"
            }
        }
    ]
}


export const dummyBookingData = [
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0], // Odum Kuthira Chadum Kuthira
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 98,
        "bookedSeats": ["D1", "D2"],
        "isPaid": false,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0], // Odum Kuthira Chadum Kuthira
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 49,
        "bookedSeats": ["A1"],
        "isPaid": true,
    },
    {
        "_id": "68396334fb83252d82e17295",
        "user": { "name": "GreatStack", },
        "show": {
            _id: "68352363e96d99513e4221a4",
            movie: dummyShowsData[0], // Odum Kuthira Chadum Kuthira
            showDateTime: "2025-06-30T02:30:00.000Z",
            showPrice: 59,
        },
        "amount": 147,
        "bookedSeats": ["A1", "A2","A3"],
        "isPaid": true,
    },
]