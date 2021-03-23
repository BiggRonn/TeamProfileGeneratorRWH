
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
                    <li class= "bg-info">Email ${email}: </li>
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
                    <li class= "bg-info">Email ${email}: </li>
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
                    <li class= "bg-info"><a href= "mailto:${email}">Email: ${email}: <a/></li>
                    <li class = "bg-info">School: ${school}</li>
                    
                </ul>
            </div>

        </div>
    `
}