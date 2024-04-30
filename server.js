// used inquiere and connect to db using mySQL2
const inquirer = require('inquirer');

const mysql = require('mysql2');
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: 'root',
    password: 'trueblue1',
    port: '3306',
    database: 'employeeTracker_db',

  },

  console.log(`connected to employeeTracker database`)
);

// creat ted prompt for main menu

promptUser = () => {
  return inquirer.prompt([

    {
      type: 'list',
      name: 'Selected',
      message: ' what woul you like to do?',
      choices: ['view all departments', 'view all roles', 'view all employees', 'add a department', 'add a role', 'add an employee', 'update an employee role']
    },

  ])

};

// created different prompts ask user how to add  role, employee, and department data base
prompt2 = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'department',
      message: ' Add department name?',
    },

  ])

};

promptRole = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'title',
      message: 'provide a title name',
    },

    {
      type: 'input',
      name: 'salary',
      message: 'provide a salary amount',
    },
    {
      type: 'input',
      name: 'department',
      message: 'what department is this title under?',
    },


  ])

};

promptEmployee = () => {
  return inquirer.prompt([

    {
      type: 'input',
      name: 'firstname',
      message: 'Employee first name',
    },

    {
      type: 'input',
      name: 'lastname',
      message: 'Employee last name',
    },

    {
      type: 'input',
      name: 'role',
      message: 'Employee role',
    },

    {
      type: 'input',
      name: 'roleid',
      message: 'role_id:',
    },

    {
      type: 'input',
      name: 'manager',
      message: 'Who is emplyee manager?',
    },


  ])

};

 //crated prompts on criteria for update employee role
const promptUpdateRole = () => {
  return inquirer.prompt([

    {
      type: 'list',
      name: 'selected',
      message: 'select employee',
      choices: ['miles', 'sonic', 'Amy', 'knuckles']
    },


    {
      type: 'input',
      name: 'role',
      message: 'enter new role',
    },

    


  ])

};










const init = () => {
  promptUser()
    .then((data) => {
      let selection = data.Selected;

      if (selection === 'view all departments') {
        db.query('SELECT * FROM department;', function (err, results) {
          if (results) { console.table(results); init() };
          if (err) console.log(err);
        });
      }

      if (selection === 'view all roles') {
        db.query('SELECT DISTINCT * FROM role;', function (err, results) {
          if (results) { console.table(results); init() };
          if (err) console.log(err);
        });
      }
      if (selection === 'view all employees') {
        db.query('SELECT * FROM employee;', function (err, results) {
          if (results) { console.table(results); init() };
          if (err) console.log(err);
        });
      }

      if (selection === 'add a department') {
        prompt2()
          .then((data) => {
            let departname = data.department;
            db.query(`INSERT INTO department(name) Values ( '${departname}');`, function (err, results) {
              if (results) { console.log('data added sucessfully'); init() };
              if (err) console.log(err);
            });

          })
        }

        if (selection === 'add a role') {
          promptRole()
            .then((data) => {
              let title = data.title;
              let salary = data.salary;
              let departname = data.department;
              db.query(`INSERT INTO role(title, salary, department) Values ( '${title}', ${salary},'${departname}');`, function (err, results) {
                if (results) { console.log('data added sucessfully'); init() };
                if (err) console.log(err);
              });
  
            })
          }

          if (selection === 'add an employee') {
            promptEmployee()
              .then((data) => {
                let firstname = data.firstname;
                let lastname = data.lastname;
                let role = data.role;
                let id = data.roleid;
                let manager = data.manager;
                db.query(`INSERT INTO employee(first_name, last_name, role, role_id, manager) Values ('${firstname}', '${lastname}','${role}', ${id},'${manager}');`, function (err, results) {
                  if (results) { console.log('data added sucessfully'); init() };
                  if (err) console.log(err);
                });
    
              })
            }

            if (selection === 'update an employee role') {
              promptUpdateRole()
                .then((data) => {
                  let employee = data.selected;
                  let role = data.role;
                  db.query(`UPDATE employee SET role ='${role}' WHERE first_name = '${employee}';`, function (err, results) {
                    if (results) { console.log('data added sucessfully'); init() };
                    if (err) console.log(err);
                  });
      
                })
              }








    })

};

init();