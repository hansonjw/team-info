const Engineer = require('../lib/Engineer.js');


test ('confirms istantiation of new Engineer is working properly...', () => {
    const testSubject = new Engineer();

    expect(testSubject.name).toBe('');
    expect(testSubject.email).toBe('');
    expect(testSubject.id).toBe('');
    expect(testSubject.github).toBe('');
    expect(testSubject.getRole()).toBe('Engineer');
})