params = new URLSearchParams(window.location.search)
desired_url=params.get('to') ? params.get('to') : ''

const custom = {
  'instagram': {
    'str': `Your life will not improve watching someone's instagram story. What do you gain from watching your friends and acquaintances post themselves doing interesting things? Go and live your life.`,
    'link': 'https://www.beeminder.com/mdomonic/no_instaweb'
  },
  'tweetdeck': {
    'str': `The amount of interesting things you will find here is vastly outweighed by the number of idiotic opinions you will have to wade through to find them. You spend most of your time on twitter reading things you don't agree with, hitting 'not interested in this tweet', and flicking the scroll wheel.`,
    'link': 'https://www.beeminder.com/mdomonic/no_tweetdeck'
  },
  'mfc': {
    'str': `Look if you just need to get off, watch some porn instead; it's quicker and you won't need to spend any money doing it. Otherwise remember: these women don't exist. They live in the computer, they will never touch you, they don't care about your life.`,
    'link': 'https://www.beeminder.com/mdomonic/no_mfc'
  },
  'tiktok': {
    'str': `Nothing anyone says here is interesting or novel, because they are all 14 years old and fishing for clout. Literally nothing you here hear will make you a better or more interesting person.`
  }
}
var str = "Domonic, going to this website will not improve your life. You learn nothing, you gain nothing."
var link = "#"
if (desired_url.includes('instagram.com')) {
  str = custom['instagram'].str
  link = custom['instagram'].link
} else if (desired_url.includes('twitter')) {
  str = custom['tweetdeck'].str
  link = custom['tweetdeck'].link
} else if (desired_url.includes('myfreecams')) {
  str = custom['mfc'].str
  link = custom['mfc'].link
} else if (desired_url.includes('tiktok')) {
  str = custom['tiktok'].str
  link = custom['tiktok'].link
}

document.getElementById('content').innerText = str
document.getElementById('goal-link').href = link
