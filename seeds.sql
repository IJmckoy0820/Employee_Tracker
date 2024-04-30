INSERT INTO department (name)
VALUES ("IT"),
       ("QA"),
       ("QC"),
       ("Manufacture");


INSERT INTO role (title, salary, department, department_id)
VALUES ("IT tech", 45000,"IT", 1),
       ("manager", 95000,"QA", 2),
       ("chem B", 75000,"QC", 3),
       ("head manager", 45000,"QA", 4);
       

 INSERT INTO employee (first_name, last_name, role_id, manager ,manager_id )
VALUES ("miles", "prowler", 001,"Rotor", 001 ),
       ("sonic", "hedgehog", 002, "Sally", 002 ),
       ("knuckles","echidna", 003,"Kintobor", 003 ),
       ("Amy", "rose", 004, "Sally",004 );  