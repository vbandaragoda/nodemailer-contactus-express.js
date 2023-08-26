const signup = (req, res) => {
  res.status(201).json("Signup Succesfully!");
};

const getBill = (req, res) => {
  res.status(201).json("Getbill Succesfully!");
};

module.exports = {
  signup,
};
