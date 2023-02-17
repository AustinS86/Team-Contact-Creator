const Manager = require('../lib/manager');

test('creates an manager object', () => {
    const manager = new Manager('Austin', 40 ,'austin.stancil@yahoo', 10);
   // console.log(manager.officeNumber)
   // console.log(typeof manager.officeNumber)
    expect(manager.officeNumber).toEqual(expect.any(Number));
});

test('creates the role of employee', () => {
    const manager = new Manager('Austin', 40 ,'austin.stancil@yahoo.com', '10');
    expect(manager.getRole()).toEqual("Manager");
});