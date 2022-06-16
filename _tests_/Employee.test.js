const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object containing a 'name' property when called with the 'new' keyword", () => {
            
            const name = 'Paul';

            const obj = new Employee(name);

            expect(obj.name).toEqual(name);
        });

        it("should create an object containing an 'Id' property when called with the 'new' keyword", () => {
            
            const name = 'Paul';
            
            const Id = '1';

            const obj = new Employee(name, Id);

            expect(obj.Id).toEqual(Id)
        });

        it("should create an object containing an 'email' property when called with the 'new' keyword", () => {
            
            const name = 'Paul';
            
            const Id = '1';

            const email = 'elia@gmail.com'

            const obj = new Employee(name, Id, email);

            expect(obj.email).toEqual(email)
        });
    })
});
