const Employee = require("../lib/employee");

describe("Employee", () => {
    it("should create an employee object", () => {
        const employee = new Employee ("Zach",  1, "zsmith4331@gmail.com");
        expect(employee.name).toBe ("Zach");
        expect(employee.id).toBe (1);
        expect(employee.email).toBe ("zsmith4331@gmail.com");
    });
    test("should return the value for each method of the object", () => {
        const addEmployee = new Employee ("Zach", 1, "zsmith4331@gmail.com");
        expect(addEmployee.getName()).toBe (addEmployee.name);
        expect(addEmployee.getId()).toBe (addEmployee.id);
        expect(addEmployee.getEmail()).toBe (addEmployee.email);
    });
});