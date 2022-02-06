params = new URLSearchParams(window.location.search)
desired_url=params.get('to') ? params.get('to') : ''

const custom = {
  'instagram': `don't do it. your life will not improve watching someone's insta story, and you know it. plus you'll derail your beeminder goal.`,
  'tweetdeck': `it is good to tweet interesting things. it is bad to scroll aimlessly through other people's tweets. don't do it.`,
  'mfc': `come on, Domonic. these women live in the computer! they are the same amount of 'real' as Crash Bandicoot! don't be horny for people who don't even exist!`
}
var str = "Domonic, going to this website will not improve your life. you learn nothing, you gain nothing, and you lose money because you derail your beeminder goal."
if (desired_url.includes('instagram.com')) {
  str = custom['instagram']
} else if (desired_url.includes('tweetdeck')) {
  str = custom['tweetdeck']
} else if (desired_url.includes('myfreecams')) {
  str = custom['mfc']
}

document.getElementById('content').innerText = str
