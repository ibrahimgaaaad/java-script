const fn1 = (fn) => {
  console.log("ibrahim");
  fn();
};
const fn2 = (fn) => {
  setTimeout(() => {
    console.log("abdelrazek");
    fn();
  }, 2000);
};
const fn3 = (fn) => {
  console.log("gad");
};
fn1(() => {
  fn2(() => {
    fn3();
  });
});
const fn=(a)=>{

}
