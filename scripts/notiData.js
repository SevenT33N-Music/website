function newsFromNotis(fix = false, itemId = null) {
  page = 'news';
  hidePages();
  document.getElementById('newsPage').style.opacity = '1';
  document.getElementById('newsPage').style.height = '100vh';
  document.getElementById('newsPage').style.marginTop = '0vh';
  if (itemId != null) {
    let scrollToItem = document.getElementById(itemId);
    scrollToItem.scrollIntoView();
  }
  if (fix == false) {
    notiModal(false);
  }
}

function profileFromNotis() {
  profilePage();
  notiModal(false);
}

let newsDataItem = `Check out the <a href='javascript:void(0)' onclick='newsFromNotis()'>News</a> for more info.`;
let profileDataItem = `Open Your <a href='javascript:void(0)' onclick='profileFromNotis()'>Profile</a>.`;

let allNotis = [
  ['Welcome to The Inbox!',
   "Hey there! this is your own personal inbox. Here you can check updates and news about the site. You'll also recieve notifications about new song releases, new features, and more!",
   "new"
  ],
  ['Update (v.5.0.0)',
   `This update comes with a brand new layout and new features. Check out the ${newsDataItem} for more info. IMPORTANT: MANY FEATURES ARE STILL WORK IN PROGRESS. A PRIME EXAMPLE IS THE 'SEE ALL' BUTTONS, WHICH CURRENTLY DO NOTHING.`,
   "new"
  ],
  ['Drum Machine',
   `A new update has dropped: Introducing the drum machine! ${newsDataItem}`,
   "new"
  ],
  ['Profiles',
   `A new update has dropped: Profiles are looking good! ${profileDataItem}`,
   "new"
  ],
  ['Offline Mode',
   `Started working on offline support! ${newsDataItem}`,
   "new"
  ],
  ["Audio EQ",
   `Introducing: Audio EQ! Now you can adjust the song's frequencies! ${newsDataItem}`,
   "new"
  ],
  ["NEW POLL: NOTIFICATIONS",
   `Hey there! We've got a question for you: Should the news be in the notifications and not a seperate page? Answer <a href="https://forms.gle/S9rFuukCRuz9bFok9">Here!</a>`,
   "new"
  ],
  ["CACHE TEMPORARLY DISABLED",
   `Due to an issue, I've temporarily disabled data cache for offline access. I'll update everyone on the issue as I fix it. Thank you for your patience in this.`,
   "new"
  ],
  ["Metadata",
   `Added metadata to the audio. ${newsDataItem}`,
   "new"
  ],
  ["Light Mode",
   `Added The option to toggle on light mode. ${newsDataItem}`,
   "new"
  ],
  ["URL Change",
   `As you may have noticed, the URL for my main website has changed from "SevenT33N-Music.replit.app" to "<a href="https://sevent33n-music.github.io/website/">SevenT33N-Music.Github.io</a>".`,
   "new"
  ],
];