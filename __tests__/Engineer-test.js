const Engineer = require('../lib/enginner');

test('creates an engineer object', () => {
    const engineer = new Engineer('Austin', 40 ,'austin.stancil@yahoo', 'AustinS86');
    expect(engineer.github).toEqual(expect.any(String));
});

test('creates an engineer github value', () => {
    const engineer = new Engineer('Austin', 40 ,'austin.stancil@yahoo', 'AustinS86');
    expect(engineer.getGithub()).toEqual(expect.stringContaining(engineer.github.toString()));
});

test('creates the role of employee', () => {
    const engineer = new Engineer('Austin', 40 ,'austin.stancil@yahoo.com', 'AustinS86');
    expect(engineer.getRole()).toEqual("Engineer");
});

