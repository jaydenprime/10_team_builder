const Intern = require("../lib/Intern");

describe("Intern", () => {
    let intern;
  
    beforeEach(() => {
      intern = new Intern("Squirtle", 1, "test@test.com", "UCI");
    });
  
    test("Can set school via constructor", () => {
      expect(intern.school).toBe("UCI");
    });
  
    test("getRole() should return \"Intern\"", () => {
      expect(intern.getRole()).toBe("Intern");
    });
  
    test("Can get school via getSchool()", () => {
      expect(intern.getSchool()).toBe("UCI");
    });
  });