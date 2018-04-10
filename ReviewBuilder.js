const fs = require("fs");

class ReviewBuilder {
  buildReviewsSync() {
    const reviews = JSON.parse(fs.readFileSync("./data/reviews.json", "utf8"));
    const products = JSON.parse(
      fs.readFileSync("./data/products.json", "utf8")
    );
    const users = JSON.parse(fs.readFileSync("./data/users.json", "utf8"));

    return reviews.map((review) => {
      return {
        productName: products.find(
          (product) => product.id === review["productId"]
        ).name,
        username: users.find((user) => user.id === review["userId"]).username,
        text: review["text"],
        rating: review["rating"],
      };
    });
  }
}

module.exports = ReviewBuilder;
