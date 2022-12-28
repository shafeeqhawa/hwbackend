const categorys = (req, res) => {
  res.send("This category page");
};

const createcategory = (req, res) => {
  const categoryname = req.body.newcategory;
  const categoryprice = req.body.price;
  if (categoryprice > 40) {
    return res.send({
      success: false,
      msg: "your pracie expencive",
    });
  }
  if (categoryname?.length < 4) {
    return res.send({
      success: false,
      msg: "explan more pleas",
    });
  } else {
    return res.send({
      success: true,
      msg: "afarin sana",
    });
  }
  
};

module.exports = {
  categorys,
  createcategory,
};
