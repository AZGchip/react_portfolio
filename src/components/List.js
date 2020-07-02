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
        deployed: "https://azgchip.github.io/Ales-and-Trales/",
        collaborators: [
            {
                name: "Andrew Zinski",
                github: "https://github.com/AZGchip",
                role: "javascript/API"
            },
            {
                name: "Emilia Hartline",
                github: "https://github.com/emijoha",
                role: "HTML/CSS"
            },
            {
                name: "Paul Houser",
                github: "https://github.com/paul-houser3333",
                role: "HTML/CSS"
            },
            {
                name: "Daniel Abell",
                github: "https://github.com/dmabell693",
                role: "javascript/API"
            },
        ]
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
function collabList(data) {
    let collab;
    if (data.collaborators) {
        collab = data.collaborators.map(person => (
            <span><a href={person.github}>{person.name}</a>: {person.role}  <span className="text-secondary">|</span> </span>
        ))
    }
    else {
        collab = "By Andrew Zinski"
    }
    return collab
}
function List() {

    let listCards = listData.map(list => (
        <div className="card mt-3">
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={list.image} className="img-fluid " style={{ height: 300 }} alt=""></img>
                </div>
                <div className="col">
                    <div className="card-block px-2">
                        <h4 className="card-title">{list.title}</h4>
                        <p className="card-text">{list.summary}</p>
                        <a href={list.github} className="btn btn-primary">Github</a>
                        <a href={list.deployed} className="btn btn-primary">Deployed</a>
                    </div>
                </div>
            </div>
            <div className="card-footer w-100 ">
                {collabList(list)}
            </div>
        </div>
    ))
    return <div className="container bg-light ">
        <div className="row"><div className="col-md-12 mt-5 pt-5"><h1 >Portfolio</h1></div></div>
        <div className="row">
            <div className=" col-md-10">
                {listCards}
            </div>
            <div className="col-md-2 mt-3">
                <div className="row ">

                    <a href="https://www.deviantart.com/azgchip/gallery/"><img className="icons mx-auto"
                        src="../assets/images/Deviantart-icon.png" alt="Deviantart icon"></img></a>
                    <a href="https://soundcloud.com/azgchip"><img className="icons mx-auto"
                        src="assets/images/soundcloud.png" alt="sound cloud icon"></img></a>
                    <a href="https://www.youtube.com/channel/UC42pkrN7h_DRmxSRpjuEsxw?"><img className="icons mx-auto"
                        src="../assets/images/Media-youtube-icon.png" alt="Youtube icon"></img></a>
                    <a href="https://github.com/AZGchip"><img className="icons mx-auto" src="assets/images/git.png"
                        alt="github icon"></img></a>
                    <a href="https://www.linkedin.com/in/andrew-zinski-9761751a1/"><img className="icons mx-auto"
                        src="assets/images/linked.png" alt="linked in icon"></img></a>
                </div>
            </div>
        </div>
    </div>
}

export default List