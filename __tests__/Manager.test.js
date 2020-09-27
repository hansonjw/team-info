const Manager = require('../lib/Manager.js');


test ('confirms istantiation of new Engineer is working properly...', () => {
    const testSubject = new Manager();

    expect(testSubject.name).toBe('');
    expect(testSubject.email).toBe('');
    expect(testSubject.id).toBe('');
    expect(testSubject.office).toBe('');
    expect(testSubject.getRole()).toBe('Manager');
})
