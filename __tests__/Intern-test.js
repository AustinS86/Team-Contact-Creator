const Intern = require('../lib/intern');

test('creates an intern object', () => {
    const intern = new Intern('Austin', 40 ,'austin.stancil@yahoo', 'Uconn');
    expect(intern.school).toEqual(expect.any(String));
});

test('gets school', () => {
    const intern = new Intern('Austin', 40 ,'austin.stancil@yahoo', 'Uconn');
    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school.toString()));
});

test('creates the role of employee', () => {
    const intern = new Intern('Austin', 40 ,'austin.stancil@yahoo.com', 'Uconn');
    expect(intern.getRole()).toEqual("Intern");
});