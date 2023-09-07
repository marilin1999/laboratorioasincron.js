function getRandomNumber() {
    return new Promise((resolve, reject) => {
     let number =   Math.floor(Math.random() * 10)
      setTimeout(() => {resolve(number)},3000)
    })

}

module.exports = getRandomNumber;
