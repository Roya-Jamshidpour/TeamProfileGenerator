const Algo = require("../lib/Employee");

// first test to get employee information 

// name
// getName() method
describe("Algo", () => {

describe("getName", () => {
    it("should be the employee's full name", () => {
        const str = "Roya Jams";
        const name = str

        const result = new Algo().getName(str);
        expect(result).toEqual(name);
    });
});
// ID number
// getId() method
describe("getId", () => {
    it("should be the employee's ID number", () => {
        const str = "2";
        const id = str;
        const result = new Algo().getId(str);
        expect(result).toEqual(id);
    });
});
// email
// getEmail() method
describe("getEmail", () => {
    it("should be the employee's email", () => {
        const str = "roya.jamshidpour@gmail.com";
        const email = str;
        const result = new Algo().getEmail(str);
        expect(result).toEqual(email);
    });
});
});


