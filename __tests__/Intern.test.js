const Intern = require("../lib/Intern");
describe("Employee", () => {
  describe("Initialization", () => {
    test("Can initialize an intern object", () => {
      const e = new Intern();
      expect(typeof e).toBe("object");
    });
    test("Can set name attribute with constructor", () => {
      const name = "Clark";
      const e = new Intern(name);
      expect(e.name).toBe(name);
    });
    test("Can set id attribute with constructor", () => {
      const id = 77;
      const e = new Intern("Nick", id);
      expect(e.id).toBe(id);
    });
    test("Can set email attribute with constructor", () => {
      const email = "tbeauchamp@2u.com";
      const e = new Intern("Nick", 77, email);
      expect(e.email).toBe(email);
    });
  });
  describe("getters", () => {
    test("Can get name via getName() method", () => {
      const name = "Nick";
      const e = new Intern(name, 77, "tbeauchamp@gmail.com", "Harvard");
      expect(e.getName()).toBe(name);
    });
    test("Can get id via getId() method", () => {
      const id = 77;
      const e = new Intern("Nick", id, "tbeauchamp@gmail.com", "Harvard");
      expect(e.getId()).toBe(id);
    });
    test("Can get email via getEmail() method", () => {
      const email = "tbeauchamp@gmail.com";
      const e = new Intern("Nick", 77, email, "Harvard");
      expect(e.getEmail()).toBe(email);
    });
    test("Can get school via getSchool() method", () => {
        const school = "Harvard";
        const e = new Intern("Nick", 77, "tbeauchamp@gmail.com", school);
        expect(e.getSchool()).toBe(school);
      });
    test("Can get role via getRole() method", () => {
      const e = new Intern("Nick", 77, "tbeauchamp@gmail.com", "Harvard");
      expect(e.getRole()).toBe("Intern");
    });
  });
});