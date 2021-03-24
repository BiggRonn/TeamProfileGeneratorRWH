
function generateManager({name, id, email, officeNumber }){
    return `
    <div class="card m-3" style="width: 18rem;">

            <div class="card-body bg-secondary rounded ">
                <div class="bg-primary ">
                    <h5 id = "empname"class="card-title bg-primary text-light m-2">${name}</h5>
                    <h6 id = "emptitle"class="card-title bg-primary text-light m-2">&#x1F451 Manager</h6>
                </div>
                <ul id= "cardlist">
                    <li class = "bg-info">ID: ${id}</li>
                    <li class= "bg-info"><a href= "mailto:${email}">Email: ${email}: </a></li>
                    <li class = "bg-info">Office #: ${officeNumber}</li>
                    
                </ul>
            </div>

        </div>
    `
}

function generateEngineer({name, id, email, github }){
    return `
    <div class="card m-3" style="width: 18rem;">

            <div class="card-body bg-secondary rounded ">
                <div class="bg-primary ">
                    <h5 id = "empname"class="card-title bg-primary text-light m-2">${name}</h5>
                    <h6 id = "emptitle"class="card-title bg-primary text-light m-2">&#x1F453 Engineer</h6>
                </div>
                <ul id= "cardlist">
                    <li class = "bg-info">ID: ${id}</li>
                    <li class= "bg-info"><a href= "mailto:${email}">Email: ${email}: </a></li>
                    <li class = "bg-info"><a href= "https://github.com/${github}" >GitHub: ${github}</a></li>
                    
                </ul>
            </div>

        </div>
    `
}

function generateIntern({name, id, email, school }){
    return `
    <div class="card m-3" style="width: 18rem;">

            <div class="card-body bg-secondary rounded ">
                <div class="bg-primary ">
                    <h5 id = "empname"class="card-title bg-primary text-light m-2">${name}</h5>
                    <h6 id = "emptitle"class="card-title bg-primary text-light m-2">&#x1F393 Intern</h6>
                </div>
                <ul id= "cardlist">
                    <li class = "bg-info">ID: ${id}</li>
                    <li class= "bg-info"><a href= "mailto:${email}">Email: ${email}: </a></li>
                    <li class = "bg-info">School: ${school}</li>
                    
                </ul>
            </div>

        </div>
    `
}

function generateTop(){
    return `
    <!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-BmbxuPwQa2lc/FVzBcNJ7UAyJxM6wuqIj61tLrc4wSX0szH/Ev+nYRRuWlolflfl" crossorigin="anonymous">
    <link rel="stylesheet" type="text/css" href="./dist/style.css">
    <title>My Team Profile RWH</title>
</head>

<body>
    <header class="page-header text-center text-light p-4 ">
        <h1>My Team</h1>
    </header>

    <div id="maincontainer" class="container">`
}
function generateBottom(){
    return `
    </div>

     
<footer>Ronald Wesley Howard II 2021</footer>

</body>

</html>`

}

module.exports = {
    generateManager,
    generateEngineer,
    generateIntern,
    generateTop,
    generateBottom,
}