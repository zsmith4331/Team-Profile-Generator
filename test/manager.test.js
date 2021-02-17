const Manager = require("../lib/manager")

describe("Manager", () => {
    it("should create a manager object", () => {
        const officeNumber = 555;
        const manager = new Manager("Zach",  1, "zsmith4331@gmail.com", officeNumber);
        expect(manager.name).toBe("Zach");
        expect(manager.id).toBe(1);
        expect(manager.email).toBe("zsmith4331@gmail.com");
        // expect(manager.officeNumber).toBe(555);
    });
    test("should return the value for each method of the object", () => {
        const officeNumber = 555;
        const addManager = new Manager ("Zach", 1, "zsmith4331@gmail.com", officeNumber);
        expect(addManager.getName()).toBe(addManager.name);
        expect(addManager.getId()).toBe(addManager.id);
        expect(addManager.getEmail()).toBe(addManager.email);
        expect(addManager.getOfficeNumber()).toBe(555);
        expect(addManager.getRole()).toBe("Manager");
    });
});