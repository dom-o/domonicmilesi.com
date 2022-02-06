params = new URLSearchParams(window.location.search)
desired_url=params.get('to') ? params.get('to') : ''

const custom = {
  'instagram': {
    'str': `Don't do it. Your life will not improve watching someone's insta story, and you know it.`,
    'link': 'https://www.beeminder.com/mdomonic/no_instaweb'
  },
  'tweetdeck': {
    'str': `It is good to tweet interesting things. It is bad to scroll aimlessly through other people's tweets. Don't do it.`,
    'link': 'https://www.beeminder.com/mdomonic/no_tweetdeck'
  },
  'mfc': {
    'str': `Come on, Domonic. These women live in the computer! they are the same amount of 'real' as Crash Bandicoot! Don't be horny for people who don't even exist!`,
    'link': 'https://www.beeminder.com/mdomonic/no_mfc'
  },
}
var str = "Domonic, going to this website will not improve your life. You learn nothing, you gain nothing, and you lose money because you derail your beeminder goal."
var link = "#"
if (desired_url.includes('instagram.com')) {
  str = custom['instagram'].str
  link = custom['instagram'].link
} else if (desired_url.includes('tweetdeck')) {
  str = custom['tweetdeck'].str
  link = custom['tweetdeck'].link
} else if (desired_url.includes('myfreecams')) {
  str = custom['mfc'].str
  link = custom['mfc'].link
}

document.getElementById('content').innerText = str
document.getElementById('goal-link').href = link
