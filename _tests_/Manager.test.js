const Manager = require('../lib/Manager')

describe("Manager", () => {
    describe("Initialization", () => {
        it("should create an object containing a 'name' property when called with the 'new' keyword", () => {
            
            const name = 'John';

            const obj = new Manager(name);

            expect(obj.name).toEqual(name);
        });

        it("should create an object containing an 'Id' property when called with the 'new' keyword", () => {
            
            const name = 'John';
            
            const Id = '2';

            const obj = new Manager(name, Id);

            expect(obj.Id).toEqual(Id)
        });

        it("should create an object containing an 'email' property when called with the 'new' keyword", () => {
            
            const name = 'John';
            
            const Id = '2';

            const email = 'john@gmail.com'

            const obj = new Manager(name, Id, email);

            expect(obj.email).toEqual(email)
        });

        it("should create an object containing a 'office number' property when called with the 'new' keyword", () => {
            
            const name = 'John';
            
            const Id = '2';

            const email = 'john@gmail.com'

            const officeNumber = '1234'

            const obj = new Manager(name, Id, email, officeNumber);

            expect(obj.officeNumber).toEqual(officeNumber)
        });
    })
});
