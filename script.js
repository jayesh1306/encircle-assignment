// Jayesh Prajapati 
// Software Developer Position

// ------------- Sample Input -----------------------------
// > node script.js "(multiply (add (multiply 3 3) 3) 3)" |
// --------------------------------------------------------

class calculator {
    old = {};
  
    calc(input) {
      while (input.indexOf(")") !== -1) {
        if (input in this.old) {
          return this.old[input];
        }
  
        const right = input.indexOf(")");
        const left = input.substring(0, right).lastIndexOf("(");
  
        const value = this.singleExp(
          input.substring(left + 1, right)
        );
  
        if (left === 0) {
          return value;
        }
  
        else {
          input = input.substring(0, left) + value + input.substring(right + 1);
        }
      }
      return parseInt(input);
    }
  
    singleExp(input) {
        var answer;
      if (input in this.old) {
        return this.old[input];
      }
  
      const pieces = input.split(" ");
  
      if (pieces[0] === "add") {
        answer = parseInt(pieces[1]) + parseInt(pieces[2]);
  
      } else if (pieces[0] === "multiply") {
        answer = parseInt(pieces[1]) * parseInt(pieces[2]);
  
      } else {
        answer = parseInt(input);
      }
  
      this.old[input] = answer;
      return answer;
    }
  }
  
  console.log(new calculator().calc(process.argv[2]));
  