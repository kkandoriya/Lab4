const makeSquarer = function() { /* closure factory */
  let meta = { createdAt: Date.now() };
  return function(n) { return n * n; };
};
const squarer = makeSquarer();
document.getElementById("sqBtn").addEventListener("click", ()=>{
  const n = Number(document.getElementById("num").value);
  if(Number.isNaN(n)){
    document.getElementById("result").textContent = "Please enter a number";
    return;
  }
  document.getElementById("result").textContent = `The square of ${n} is ${squarer(n)}`;
});