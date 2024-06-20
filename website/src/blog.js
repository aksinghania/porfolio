import b1 from "./images/b1.jpg";
import b2 from "./images/b2.jpeg";
import b3 from "./images/b3.jpg";
import b4 from "./images/b4.mov";
import b5 from "./images/b5.png";
import b6 from "./images/b6.jpeg";
import b61 from "./images/b6-1.jpeg";
import mayday from "./images/mayday.jpg";
import epoch from "./images/epoch.jpg";
import hack from "./images/hack.jpg";
import phew from "./images/phew.png";
import meeting from "./images/meeting.png";
import make_harvard from "./images/make_harvard.jpg";
import act1 from "./images/act1.png";
import act2 from "./images/act2.png";
import hurry from "./images/hurry.png";

function generateISO8601Timestamp(
  year,
  month,
  day,
  hour = 0,
  minute = 0,
  second = 0,
  millisecond = 0
) {
  // Create a new Date object with the provided parameters
  const dateTimeObject = new Date(
    year,
    month - 1,
    day,
    hour,
    minute,
    second,
    millisecond
  );

  // Check if the Date object is valid
  if (isNaN(dateTimeObject.getTime())) {
    // Handle invalid date and time input
    console.log("Invalid date or time input");
    return null;
  }

  // Generate the ISO 8601 timestamp
  const isoTimestamp = dateTimeObject.toISOString();

  return isoTimestamp;
}
export function sortBlogPostsByDate(posts) {
  // Clone the array to avoid modifying the original array
  const sortedPosts = [...posts];

  // Sort the cloned array based on the 'postedAt' property
  sortedPosts.sort((a, b) => {
    const dateA = new Date(a.postedAt);
    const dateB = new Date(b.postedAt);

    // Sort in descending order (most recent first)
    return dateB - dateA;
  });

  return sortedPosts;
}
const blog = {
  profile: {
    id: "clfcq51nk08ykqfqhfo9z2otz",
    slackID: "U0217R0029Z",
    email: null,
    emailVerified: "2023-12-18T18:21:24.439Z",
    username: "akshatsinghania",
    streakCount: 1,
    maxStreaks: 0,
    displayStreak: true,
    streaksToggledOff: false,
    customDomain: null,
    cssURL: null,
    website: "https://akshatsinghaniaweb.web.app/",
    github: "https://github.com/akshatsinghania",
    image: null,
    fullSlackMember: false,
    avatar:
      "https://avatars.slack-edge.com/2021-05-07/2034863937126_196d5c93a81f67985e36_192.png",
    webring: [],
    newMember: true,
    timezoneOffset: 19800,
    timezone: "Asia/Kolkata",
    pronouns: null,
    customAudioURL: null,
    lastUsernameUpdatedTime: null,
    webhookURL: null,
  },
  webring: [],
  posts: [
    {
      id: "1",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2023, 5, 3, 12, 0, 0, 0, 0),
      text: "ByteBuilders first workshop!!",
      attachments: [b5],
      mux: [],
      reactions: [],
    },

    {
      id: "2",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: "2022-12-18T18:34:57.837Z",
      text: "STICKERS LESGOO!!",
      attachments: [b1],
      mux: [],
      reactions: [],
    },
    {
      id: "clqb9a0190001jx08444o5lq9",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2022, 8, 15, 12, 0, 0, 0, 0),
      text: "Explaining that the fastest possible slope for a racecar to slide on with gravitational force is the The Brachistochrone curve and W",
      attachments: [b2, b3],
      mux: [],
      reactions: [],
    },
    {
      id: "4",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2022, 9, 4, 12, 0, 0, 0, 0),
      text: "Nature",
      attachments: [],
      mux: [b4],
      reactions: [],
    },
    {
      id: "5",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2024, 1, 15, 12, 0, 0, 0, 0),
      text: "Tie Rajasthan - Part 3 - W",
      attachments: [b6, b61],
      mux: [],
      reactions: [],
    },

    {
      id: "6",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2023, 1, 1, 12, 0, 0, 0, 0),
      text: "Epoch wohoo! and Mayday Event W",
      attachments: [mayday, epoch],
      mux: [],
      reactions: [],
    },
    {
      id: "7",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2024, 4, 12, 12, 0, 0, 0, 0),
      text: "Hackathon Honourable Mention W",
      attachments: [hack],
      mux: [],
      reactions: [],
    },
    {
      id: "8",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2024, 1, 16, 12, 0, 0, 0, 0),
      text: "9 more A* to go",
      attachments: [phew],
      mux: [],
      reactions: [],
    },
    {
      id: "9",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2024, 4, 31, 12, 0, 0, 0, 0),
      text: "Exciting meeting with google engineer and government officers",
      attachments: [meeting],
      mux: [],
      reactions: [],
    },
    {
      id: "10",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2021, 8, 19, 12, 0, 0, 0, 0),
      text: "super cool make havard swags. we were team Hackuna Matata",
      attachments: [make_harvard],
      mux: [],
      reactions: [],
    },
    {
      id: "11",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2024, 1, 4, 12, 0, 0, 0, 0),
      text: "Tie Rajasthan - Part 2 - Redemption",
      attachments: [act2, hurry],
      mux: [],
      reactions: [],
    },
    {
      id: "12",
      user: {},
      timestamp: null,
      slackUrl: null,
      postedAt: generateISO8601Timestamp(2024, 1, 4, 12, 0, 0, 0, 0),
      text: `Tie Rajasthan - A three act play<br> Part 1 - Rejection`,
      attachments: [act1],
      mux: [],
      reactions: [],
    },
  ],
};

export default blog;
