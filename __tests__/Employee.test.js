const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can return Employee name", () => {
    const employee = new Employee("Dan", 23352, "big@maily.com");
    expect(employee.getName()).toBe("Dan");
})
