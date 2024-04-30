DROP DATABASE IF EXISTS employeeTracker_db;

CREATE DATABASE employeeTracker_db;

-- Makes it so all of the following code will affect inventory_db --
USE employeeTracker_db;

-- Creates the table "produce" within inventory_db --
CREATE TABLE department (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  name VARCHAR(30) NOT NULL,

   PRIMARY KEY (id)
);

CREATE TABLE role (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  title VARCHAR(30) NOT NULL,
  Salary Decimal,
  department VARCHAR(30) NOT NULL,
  department_id INT,
  PRIMARY KEY (id),
  FOREIGN KEY (department_id)
  REFERENCES department(id)
);

CREATE TABLE employee (
  -- Creates a numeric column called "id" which will automatically increment its default value as we create new rows --
  id INT NOT NULL AUTO_INCREMENT,
  -- Makes a string column called "name" which cannot contain null --
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30),
  role VARCHAR(30),
  role_id INT,
  manager VARCHAR(30),
  manager_id INT,

  PRIMARY KEY (id),

  FOREIGN KEY (role_id)
  REFERENCES role(id),

  FOREIGN KEY (manager_id)
  REFERENCES employee(id)

);