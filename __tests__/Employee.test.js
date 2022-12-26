const Employee = require("../lib/Employee");

describe("Employee", () => {
  let employee;

  beforeEach(() => {
    employee = new Employee("Mithers", 1, "test@test.com");
  });

  test("Can instantiate Employee instance", () => {
    expect(employee).toBeInstanceOf(Employee);
  });

  test("Can set name via constructor arguments", () => {
    expect(employee.name).toBe("Mithers");
  });

  test("Can set id via constructor argument", () => {
    expect(employee.id).toBe(1);
  });

  test("Can set email via constructor argument", () => {
    expect(employee.email).toBe("test@test.com");
  });

  test("Can get name via getName()", () => {
    expect(employee.getName()).toBe("Mithers");
  });

  test("Can get id via getId()", () => {
    expect(employee.getId()).toBe(1);
  });

  test("Can get email via getEmail()", () => {
    expect(employee.getEmail()).toBe("test@test.com");
  });

  test("getRole() should return \"Employee\"", () => {
    expect(employee.getRole()).toBe("Employee");
  });
});