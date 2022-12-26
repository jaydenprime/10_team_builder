const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  let engineer;

  beforeEach(() => {
    engineer = new Engineer("Bulbasaur", 1, "test@test.com", "GitHubUser");
  });

  test("Can set GitHUb account via constructor", () => {
    expect(engineer.github).toBe("GitHubUser");
  });

  test("getRole() should return \"Engineer\"", () => {
    expect(engineer.getRole()).toBe("Engineer");
  });

  test("Can get GitHub username via getGithub()", () => {
    expect(engineer.getGithub()).toBe("GitHubUser");
  });
});