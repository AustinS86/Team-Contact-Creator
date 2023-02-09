const Employee = require('../lib/employee');

test('creates an employee', () =>{
    const employee  = new Employee('Austin', 40, 'austin.stanci@yahoo.com');
    expect(employee.name).toEqual(expect.any(String));
    expect(employee.id).toEqual(expect.any(Number));
    expect(employee.email).toEqual(expect.any(String));
});

test('gets employee name', () => {
    const employee = new Employee('Austin', 40, 'austin.stancil@yahoo.com');
    expect(employee.getName()).toEqual(expect.any(String));
});

test('gets employee ID', () => {
    const employee = new Employee('Austin', 40, 'austin.stancil@yahoo.com');
    expect(employee.getId()).toEqual(expect.any(Number));
});

test('gets employee email', () => {
    const employee = new Employee('Austin', 40, 'austin.stancil@yahoo.com');
    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email.toString()));
});

test('gets role of employee', () => {
    const employee = new Employee('Austin', 40, 'austin.stancil@yahoo.com');
    expect(employee.getRole()).toEqual("Employee");
});