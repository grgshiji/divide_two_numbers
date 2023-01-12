const divide_two_numbers = async (req, res) => {
  // health check
  if (req.params["health"] === "health") {
    res.write(JSON.stringify({ success: true, msg: "Health check success" }));
    res.end();
  }

  let divValue = 0;
  const numStr = req.url.split("?")[1];
  if (numStr) {
    const nums = numStr.split("&").map((num) => parseInt(num.split("=")[1]));
    if (nums[1] <= 0) {
      res.write(
        JSON.stringify({ success: false, msg: `Divide by 0 is not allowed` })
      );
      res.end();

      return;
    }
    divValue = nums[0] / nums[1];
  }

  // Add your code here
  res.write(
    JSON.stringify({
      success: true,
      msg: `Divided successfully`,
      data: divValue,
    })
  );
  res.end();
};

export default divide_two_numbers;
