// ejemplo de closure
function test() {
  var e = 1;

  function test2() {
    console.log(e);
    e++;
  }

  return test2;
}

var test3 = test();
test3();

var test4 = test();
test4();

// ejemplo de class
class Test {
  constructor() {
    this.e = 1;
  }

  test2() {
    console.log(this.e);
    this.e++;
  }

}

var test5 = new Test();
test5.test2();

var test6 = new Test();
test6.test2();
