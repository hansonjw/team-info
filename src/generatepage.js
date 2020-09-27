 const generateTeam = teamArray => {
  return `
    <section class="my-3" id="portfolio">
      <div class="flex-row justify-space-between">
        ${teamArray.map((teamMember) => {
            let role = teamMember.getRole();
            if (role == "Manager"){
              otherItem = "Office";
              otherContent = teamMember.office;
            }else if(role == "Engineer"){
              otherItem = "Github";
              otherContent = "<a href='https://github.com/" + teamMember.github + "'>" + teamMember.github + "/a>";

            }else{
              otherItem = "School";
              otherContent = teamMember.school;
            }
            
            let emailTag = "<a href = 'mailto: " + teamMember.email + "'>" + teamMember.email + "</a>"
              
            return `
            <div class="col-12 mb-2 bg-dark text-light p-3">
              <h2 class="portfolio-item-title text-light">${teamMember.name}</h2>
              <h3 class="portfolio-item-title text-light">${role}</h3>
              <h5 class="portfolio-languages">
                ID : ${teamMember.id}
              </h5>
              <p>email : ${emailTag}</p>
              <p>${otherItem} : ${otherContent}</p>
            </div>
          `;
          }).join('')
        }
      </div>
    </section>
  `;
};
  
module.exports = teamData => {
  return `
  <!DOCTYPE html>
  <html lang="en">

  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Portfolio Demo</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
    <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css">
  </head>

  <body>
    <header>
      <div class="container flex-row justify-space-between align-center py-3">
        <h2>My Team<h2>
      </div>
    </header>
    <main class="container my-5">
          ${generateTeam(teamData)}
    </main>
  </body>
  </html>
  `;
};
  