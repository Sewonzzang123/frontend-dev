// 4. default parameter

const print = function (strs, e = "\n") {
  console.log(strs.join(e));
};

print(["Always", "with", "me"]);
print(["Always", "with", "me"], " ");
