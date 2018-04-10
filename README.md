# File Joiner
### This was created during my time as a [Code Chrysalis](https://codechrysalis.io) Student

You have been hired to work at Amazonian, an online shop where users can buy and rate products.

They store their data in relational format in `.json` files:

* products
* users
* reviews

Each file represents a database table, with an `id` and data.

Your job is to "join" these three tables into the following format:

```js
{
    productName: product.name,
    username: user.username,
    text: review.text,
    rating: review.rating
}
```

## Objectives

* Gain more experience using Node's built-in modules
* Use the `fs` module to access your file system and perform actions
* Use callbacks to anticipate the order of completion

## Basic Requirements

1.  Install dependencies
1.  Pass the test using [`fs.readFileSync`](https://nodejs.org/api/fs.html#fs_fs_readfilesync_path_options)

## Medium Requirements

1.  Read about [blocking and non-blocking behavior](http://lmgtfy.com/?q=blocking+vs+nonblocking+javascript) in the JavaScript world. Is `fs.readFileSync` blocking?

## Advanced Requirements

1.  Use `fs.readFile` instead. Do you need to change the tests for it to work?
