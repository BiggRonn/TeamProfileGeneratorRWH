const { test, expect } = require("@jest/globals");
const Employee = require("../lib/Employee");

test("Can return Employee name", () => {
    const employee = new Employee("Dan", 23352, "big@maily.com","GittyBig");
    expect(employee.getName()).toBe("Dan");
})

test("Can return Employee ID", () => {
    const employee = new Employee("Dan", 23352, "big@maily.com", "GittyBig");
    expect(employee.getId()).toBe(23352);
})

test("Can return Employee Email", () => {
    const employee = new Employee("Dan", 23352, "big@maily.com", "GittyBig");
    expect(employee.getEmail()).toBe("big@maily.com");
})

test("Can return Employee Github", () => {
    const employee = new Employee("Dan", 23352, "big@maily.com", "GittyBig");
    expect(employee.getEmail()).toBe("big@maily.com");
})

