const Employee = require('../lib/Employee.js');

test('Creates a new instantiation of member and tests attributes for correct types...', () => {
    
    //instatiate new array with dummy array
    const testSubject = new Employee();

    //review properties and ensure they are the right type
    expect(testSubject.name).toBe('');
    expect(testSubject.email).toBe('');
    expect(testSubject.id).toBe('');
    expect(testSubject.basicQuestionsArr).toBeDefined();
    expect(testSubject.getRole()).toBe('Employee');
});