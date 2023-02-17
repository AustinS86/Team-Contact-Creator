const createManager = function (manager) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100" id="card">
      <div class="card-header bg-primary text-light">
        <h3>${manager.name}</h3>
        <h4><i class="fa-sharp fa-solid fa-user-tie"></i> Manager</h4>
      </div>

      <div class="card-body">
        <p class="id">ID: ${manager.id}</p>
        <p class="email">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
        <p class="office-number">Office Number: ${manager.officeNumber}</p>
      </div>
    </div>
  </div>
  `;
}

const createEngineer = function (engineer) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100"id="card">
      <div class="card-header bg-primary text-light">
        <h3>${engineer.name}</h3>
        <h4><i class="fa-solid fa-laptop-code"></i> Engineer</h4>
      </div>

      <div class="card-body">
        <p class="id">ID:${engineer.id}</p>
        <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
        <p class="github">GitHub: <a href="https://github.com/${engineer.github}">${engineer.github}</p>
      </div>
    </div>
  </div>
  `;
}

const createIntern = function (intern) {
  return `
  <div class="col-4 mt-4">
    <div class="card h-100"id="card">
      <div class="card-header bg-primary text-light">
        <h3>${intern.name}</h3>
        <h4><i class="fa-solid fa-school"></i> Intern</h4>
      </div>

      <div class="card-body">
        <p class="id">ID: ${intern.id}</p>
        <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
        <p class="school">School: ${intern.school}</p>
      </div>
    </div>
  </div>
  `
};

generateHTML = (data) => {

  contactArray = [];

  for (let i = 0; i < data.length; i++) {
    const employee = data[i];
    const role = employee.getRole();

    if (role === 'Manager') {
      const managerCard = createManager(employee);
      contactArray.push(managerCard);
    }

    if (role === 'Engineer') {
      const engineerCard = createEngineer(employee);
      contactArray.push(engineerCard);
    }

    if (role === 'Intern') {
      const internCard = createIntern(employee);
      contactArray.push(internCard);
    }

  }

  const employeeCards = contactArray.join('')

  const generateTeam = generateTeamPage(employeeCards);
  return generateTeam;

}

const generateTeamPage = function (employeeCards) {
  return `
  <!DOCTYPE html>
  <html lang="en">
  
  <head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/5561be08a2.js" crossorigin="anonymous"></script>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
      integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="style.css" />
    <title>Team Contact</title>
  </head>
  
  <body>
    <header>
      <nav class="navbar" id="navbar">
        <span class="navbar-brand mb-0 h1 w-100 text-center bg-success" id="navbar-text">Team Profile</span>
      </nav>
    </header>
    <main>
      <div class="container">
        <div class="row justify-content-center" id="team-cards">
        <!-- creates team cards-->
        ${employeeCards}
        </div>
    </div>
</main>

</body>
<script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.10.2/dist/umd/popper.min.js"
integrity="sha384-7+zCNj/IqJ95wo16oMtfsKbZ9ccEh31eOz1HGyDuCQ6wgnyJNSYdrPa03rtR1zdB"
crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.min.js"
integrity="sha384-QJHtvGhmr9XOIpI6YVutG+2QOK9T+ZnN4kzFN1RtK3zEFEIsxhlmWl5/YESvpZ13"
crossorigin="anonymous"></script>

</html>



`;
}

module.exports = generateHTML;