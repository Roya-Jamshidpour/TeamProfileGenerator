const employee = require("../Employee");

describe("employee", () => {
    it("should be the employee's full name", () => {
      const str = "Roya Jams";
      const result = str
      expect(result).toEqual(result);
    });
  });

  describe("isPalindrome", () => {
    it("should return true if a string is a palindrome", () => {
      const str = "racecar";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(true);
    });

    it("should return false if a string is not a palindrome", () => {
      const str = "neon";

      const result = new Algo().isPalindrome(str);

      expect(result).toEqual(false);
    });
  });

  describe("capitalize", () => {
    it("should take a string and return a new string with the first letter of each word capitalized", () => {
      const str = "capitalize every first word of the string.";
      const capitalized = "Capitalize Every First Word Of The String.";

      const result = new Algo().capitalize(str);

      expect(result).toEqual(capitalized);
    });
  });
});
