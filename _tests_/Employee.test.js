const Employee = require('../lib/Employee')

describe("Employee", () => {
    describe("Initialization", () => {
        it("should create an object containing a 'name' property when called with the 'new' keyword", () => {
            
            const name = 'Paul';

            const obj = new Employee(name)

            expect(obj.name).toEqual(name)
        });

        it("should ")
    })
});
