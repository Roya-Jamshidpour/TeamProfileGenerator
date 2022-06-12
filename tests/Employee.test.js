const employee = require("../Employee");

// first test to get employee information 

// name
// getName() method
describe("name", () => {
    it("should be the employee's full name", () => {
      const str = "Roya Jams";
      const name = str
      expect(name).toEqual(true);
    });
  });
// ID number
// getId() method
  describe("id", () => {
    it("should be the employee's ID number", () => {
      const str = "2";
      const id = str;
      expect(id).toEqual(true);
    });
  });
//   email
// getEmail() method
  describe("email", () => {
    it("should be the employee's email", () => {
      const str = "roya.jamshidpour@gmail.com";
      const email = str;
      expect(email).toEqual(true);
    });
  });


