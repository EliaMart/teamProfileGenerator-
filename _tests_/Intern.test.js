const Intern = require('../lib/Intern');

describe("Intern", () => {
    describe("Initialization", () => {
        it("should create an object containing a 'name' property when called with the 'new' keyword", () => {
            
            const name = 'Sarah';

            const obj = new Intern(name);

            expect(obj.name).toEqual(name);
        });

        it("should create an object containing an 'Id' property when called with the 'new' keyword", () => {
            
            const name = 'Sarah';
            
            const Id = '4';

            const obj = new Intern(name, Id);

            expect(obj.Id).toEqual(Id)
        });

        it("should create an object containing an 'email' property when called with the 'new' keyword", () => {
            
            const name = 'Sarah';
            
            const Id = '4';

            const email = 'sarah@gmail.com';

            const obj = new Intern(name, Id, email);

            expect(obj.email).toEqual(email)
        });

        it("should return an object containing a 'school' property when called with the 'new' keyword", () => {
            const name = 'Sarah';

            const Id = '4';

            const email = 'sarah@gmail.com';

            const school = 'northwestern';

            const obj = new Intern( name, Id, email, school);

            expect(obj.school).toEqual(school)

        });
    })
});