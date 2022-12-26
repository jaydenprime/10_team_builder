const Manager = require("../lib/Manager");

describe("Manager", () => {
  let manager;

  beforeEach(() => {
    manager = new Manager("Charmander", 1, "test@test.com", 100);
  });

  test("Can set office number via constructor argument", () => {
    expect(manager.officeNumber).toBe(100);
  });

  test("getRole() should return \"Manager\"", () => {
    expect(manager.getRole()).toBe("Manager");
  });

  test("Can get office number via getOffice()", () => {
    expect(manager.getOfficeNumber()).toBe(100);
  });
});