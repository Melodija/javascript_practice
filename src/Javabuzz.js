var Javabuzz = function() {};

Javabuzz.prototype.isDivisibleByThree = function(number) {
  return number % 3 === 0;
};

Javabuzz.prototype.isDivisibleByFive = function(number) {
  return number % 5 === 0;
};

Javabuzz.prototype.isDivisibleByFifteen = function(number) {
  return number % 15 === 0;
};

Javabuzz.prototype.say = function(number) {
  if(this.isDivisibleByThree(number)) {
    return 'Fizz';
  } else if (this.isDivisibleByFive(number)) {
    return 'Buzz';
  };
};
