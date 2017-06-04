const tweetsButton = document.getElementById('tweets-button')
const tweets = document.getElementById('tweets')

let clicks = 0

tweetsButton.addEventListener('click', (event) => {
  clicks += 1
  if (clicks % 2 === 0) {
    tweetsButton.textContent = '+'
    tweets.classList.add('invisible')
  }
  else {
    tweetsButton.textContent = '-'
    tweets.classList.remove('invisible')
  }
})
