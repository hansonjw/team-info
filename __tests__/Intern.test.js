const Intern = require('../lib/Intern.js');


test ('confirms istantiation of new Engineer is working properly...', () => {
    const testSubject = new Intern();

    expect(testSubject.name).toBe('');
    expect(testSubject.email).toBe('');
    expect(testSubject.id).toBe('');
    expect(testSubject.school).toBe('');
    expect(testSubject.getRole()).toBe('Intern');
})