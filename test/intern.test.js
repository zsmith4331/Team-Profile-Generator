const Intern = require("../lib/intern")

describe("Intern", () => {
    it("should create an intern object", () => {
        const intern = new Intern ("Zach",  1, "zsmith4331@gmail.com", "UNC Chapel Hill");
        expect(intern.name).toBe ("Zach");
        expect(intern.id).toBe (1);
        expect(intern.email).toBe ("zsmith4331@gmail.com");
        expect(intern.school).toBe ("UNC Chapel Hill");
    });
    test("should return the value for each method of the object", () => {
        const addIntern = new Intern ("Zach", 1, "zsmith4331@gmail.com", "UNC Chapel Hill");
        expect(addIntern.getName()).toBe (addIntern.name);
        expect(addIntern.getId()).toBe (addIntern.id);
        expect(addIntern.getEmail()).toBe (addIntern.email);
        expect(addIntern.getSchool()).toBe (addIntern.school);
        expect(addIntern.getRole()).toBe ("Intern");
    });
});