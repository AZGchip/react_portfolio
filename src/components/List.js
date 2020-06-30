import React from "react"
const listData = [
    {
        id: 1,
        image: "../assets/images/trales_ales.bmp",
        alt: "Ales and Trails",
        title: "Trails & Ales (Collab) ",
        summary: "A site utilizing web APIs to display the location of trails and breweries around a searched location on an interactive map.",
        description: `<p>A collaboration with:
        <ul>
            <li><a href="https://github.com/emijoha">Emilia Hartline - HTML/CSS</a></li>
            <li><a href="https://github.com/paul-houser3333">Paul Houser - HTML/CSS</a></li>
            <li><a href="https://github.com/dmabell693">Daniel Abell - JavaScript</a></li>
         </ul>
         My role: JavaScript
        </p>`,
        github: "https://github.com/AZGchip/Ales-and-Trales",
        deployed: "https://azgchip.github.io/Ales-and-Trales/"
    },
    {
        id: 2,
        image: "../assets/images/forcast.bmp",
        alt: "Forcast_API",
        title: "Forcast_By_API",
        summary: " A website that displays weather information of a searched location using OpenWeather's API. Previous searches are stored in local storage.",
        description: "OpenWeather.org - API",
        github: "https://github.com/AZGchip/Forcast_By_Api",
        deployed: "https://azgchip.github.io/Forcast_By_Api/"
    },
    {
        id: 3,
        image: "../assets/images/password.bmp",
        alt: "password photo",
        title: "Password_Generator",
        summary: "A website that creates a random password according to criteria provided by the user.",
        description: "Contains a function to re-generate a password automatically if password does not contain at least one of each selected character type.",
        github: "https://github.com/AZGchip/String_Password_Generator",
        deployed: "https://azgchip.github.io/String_Password_Generator/"
    },
    {
        id: 4,
        image: "../assets/images/schedule.bmp",
        alt: "schedule photo",
        title: "Schedule_Maker",
        summary: "A day planner website that allows for user input to be saved to local storage under a particular time.",
        description: " Each text box represents a time and will change from green to blue to red as the day progresses. A segmented bar in each time box will display how far along in the hour you are in 15 min segments.",
        github: "https://github.com/AZGchip/schedule_maker",
        deployed: "https://azgchip.github.io/schedule_maker/"
    },
    {
        id: 5,
        image: "../assets/images/burger.bmp",
        alt: "burger photo",
        title: "Eat_Burger",
        summary: `A website that allows burger entries to be created, "eaten", and/or deleted, using a MySQL database to store information.`,
        description: ` A new "burger" can be added by anyone using the site, by filling in the input box and hitting "add burger". This will create a new data row in MySQL by utilizing an ORM , modles, and a controller to interact with the MySQL database. The server is currently deployed on heroku.`,
        github: "https://github.com/AZGchip/Eat_Burger",
        deployed: "https://desolate-everglades-68515.herokuapp.com/"
    },
]
function List() {
    let listCards = listData.map(list => (
        <div>
            <img src={list.image} alt={list.alt}></img>
            <h1>{list.title}</h1>
            <p>{list.summary}</p>
            <p>{list.description}</p>
            <button href={list.github}>Github</button>
            <button href={list.deployed}>deployed</button>
        </div>
    ))
    return <div className="container">
        {listCards}
    </div>
}

export default List