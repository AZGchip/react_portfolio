import React from "react"

const listData = [
    {
        id: 1,
        image: "assets/images/trales_ales.bmp",
        alt: "Ales and Trails",
        title: "Trails & Ales (Collab) ",
        summary: "A site utilizing web APIs to display the location of trails and breweries around a searched location on an interactive map.",
        description: "In this application, a location given by the user is run through Nominatum, a search engine for OpenStreetMap. The returned json containing location data is then used to call both OpenBrewery and HikingProject's API to return trail and brewery locations around the given location. using the latitude and longitude of this returned data, pins are generated onto a Leaflet map. Each generated pin contains basic information about the trail or brewery it represents.",
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
        image: "assets/images/hikehire.png",
        alt: "hike hire image",
        title: "Hike Hire (Collab)",
        summary: "A full stack website created to connect hikers with trail guides.",
        description: " Users can use this website to search trail locations and find guides assosiated with with each listed trail. trail guides have profiles stored in the database that are joined with basic trail information when a guide adds a searched trail to his profile. if the trail is not stored in the database, it is added before the user is linked to the trail with a many to many join. This project uses jquery, MySQL,express,node,cloudinary, leaflet, nominatum, and bulma. ",
        github: "https://github.com/AZGchip/Trales-AlesV2",
        deployed: "https://shrouded-anchorage-20263.herokuapp.com/",
        collaborators: [
            {
                name: "Andrew Zinski",
                github: "https://github.com/AZGchip",
                role: "Javascript"
            },
            {
                name: "Emilia Hartline",
                github: "https://github.com/emijoha",
                role: "HTML/CSS"
            },
            {
                name: "Paul Houser",
                github: "https://github.com/paul-houser3333",
                role: "Javascript"
            },
            {
                name: "Daniel Abell",
                github: "https://github.com/dmabell693",
                role: "MySQL"
            },
            {
                name: "Deepak Gundavaram",
                github: "https://github.com/deepakgundavaram",
                role: "MySQL"
            }
        ]
    },
    {
        id: 3,
        image: "assets/images/forcast.bmp",
        alt: "Forcast_API",
        title: "Forcast_By_API",
        summary: " A website that displays weather information of a searched location using OpenWeather's API. Previous searches are stored in local storage.",
        description: "This Application Uses OpenWeather.org to request forcast information given by the user. The returned json object is then displayed on the page, showing the the current weather as well as a 5 day forcast. Using local storage, previously viewed locations are stored, allowing the user to quickly view a previous location's updated weather. ",
        github: "https://github.com/AZGchip/Forcast_By_Api",
        deployed: "https://azgchip.github.io/Forcast_By_Api/"
    },
    {
        id: 4,
        image: "assets/images/password.bmp",
        alt: "password photo",
        title: "Password_Generator",
        summary: "A website that creates a random password according to criteria provided by the user.",
        description: "Contains a function to re-generate a password automatically if password does not contain at least one of each selected character type.",
        github: "https://github.com/AZGchip/String_Password_Generator",
        deployed: "https://azgchip.github.io/String_Password_Generator/"
    },
    {
        id:5,
        image: "assets/images/schedule.bmp",
        alt: "schedule photo",
        title: "Schedule_Maker",
        summary: "A day planner website that allows for user input to be saved to local storage under a particular time.",
        description: " Each text box represents a time and will change from green to blue to red as the day progresses. A segmented bar in each time box will display how far along in the hour you are in 15 min segments.",
        github: "https://github.com/AZGchip/schedule_maker",
        deployed: "https://azgchip.github.io/schedule_maker/"
    },
    {
        id: 6,
        image: "assets/images/burger.bmp",
        alt: "burger photo",
        title: "Eat_Burger",
        summary: `A website that allows burger entries to be created, "eaten", and/or deleted, using a MySQL database to store information.`,
        description: ` A new "burger" can be added by anyone using the site, by filling in the input box and hitting "add burger". This will create a new data row in MySQL by utilizing an ORM , modles, and a controller to interact with the MySQL database. The server is currently deployed on heroku.`,
        github: "https://github.com/AZGchip/Eat_Burger",
        deployed: "https://desolate-everglades-68515.herokuapp.com/"
    },
]
// creates a list of collaborators using a given array of collaborator information.
function collabList(data) {
    let collab;
    if (data.collaborators) {
        collab = data.collaborators.map(person => (
            <small><a href={person.github}>{person.name}</a>: {person.role}  <span className="text-secondary">|</span> </small>
        ))
    }
    else {
        collab =<small>By Andrew Zinski</small> 
    }
    return collab
}
function List() {

    let listCards = listData.map(list => (
        <div className="card mt-3">
            <div className="row no-gutters">
                <div className="col-auto">
                    <img src={list.image} className="img-fluid " style={{ height: 300 }} alt=""></img><br></br>
                    <a href={list.github} className="btn btn-info m-1">Github</a>
                        <a href={list.deployed} className="btn btn-primary ml-2 m-1">Deployed</a>
                </div>
                <div className="col-md">
                    <div className="card-block px-2">
                        
                        <h2 className="card-title">{list.title}</h2>
                        <p className="card-text">{list.summary}</p><hr></hr>
                        <p className="card-text">{list.description} </p>
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