const Engineer = require("../lib/engineer");

describe("Engineer", () => {
    it("should create an engineer object", () => {
        const engineer = new Engineer ("Zach",  1, "zsmith4331@gmail.com", "zsmith4331");
        expect(engineer.name).toBe ("Zach");
        expect(engineer.id).toBe (1);
        expect(engineer.email).toBe ("zsmith4331@gmail.com");
        expect(engineer.github).toBe ("zsmith4331");
    });
    test("should return the value for each method of the object", () => {
        const addEngineer = new Engineer ("Zach", 1, "zsmith4331@gmail.com", "zsmith4331");
        expect(addEngineer.getName()).toBe (addEngineer.name);
        expect(addEngineer.getId()).toBe (addEngineer.id);
        expect(addEngineer.getEmail()).toBe (addEngineer.email);
        expect(addEngineer.getGithub()).toBe (addEngineer.github);
        expect(addEngineer.getRole()).toBe ("Engineer");
    });
});