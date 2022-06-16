const Engineer = require ('../lib/Engineer');

describe("Engineer", () => {
    describe("Initialization", () => {
        it("should create an object containing a 'name' property when called with the 'new' keyword", () => {
            
            const name = 'Ellen';

            const obj = new Engineer(name);

            expect(obj.name).toEqual(name);
        });

        it("should create an object containing an 'Id' property when called with the 'new' keyword", () => {
            
            const name = 'Ellen';
            
            const Id = '3';

            const obj = new Engineer(name, Id);

            expect(obj.Id).toEqual(Id)
        });

        it("should create an object containing an 'email' property when called with the 'new' keyword", () => {
            
            const name = 'Ellen';
            
            const Id = '3';

            const email = 'ellengmail.com'

            const obj = new Engineer(name, Id, email);

            expect(obj.email).toEqual(email)
        });

        it("should create an object containing a 'github' property when called with the 'new' keyword", () => {
            
            const name = 'Ellen';
            
            const Id = '3';

            const email = 'ellen@gmail.com'

            const github = 'ellengithub'

            const obj = new Engineer(name, Id, email, github);

            expect(obj.github).toEqual(github)
        });
    })
});
