const employee = require("../Employee");

// first test to get employee information 

// name
describe("name", () => {
    it("should be the employee's full name", () => {
      const str = "Roya Jams";
      const name = str
      expect(name).toEqual(true);
    });
  });
// ID number
  describe("id", () => {
    it("should be the employee's ID number", () => {
      const str = "2";
      const id = str;

      expect(id).toEqual(true);
    });
  });
//   email
  describe("email", () => {
    it("should be the employee's email", () => {
      const str = "roya.jamshidpour@gmail.com";
      const email = str;

      expect(email).toEqual(true);
    });
  });
//   getName method
  describe("getName()", () => {
    it("should return the employee's name", () => {
      const str = "roya.jamshidpour@gmail.com";
      const email = str;

      expect(email).toEqual(true);
    });
  });

