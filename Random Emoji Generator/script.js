const emojis = [
  "😀",
  "😃",
  "😄",
  "😁",
  "😆",
  "😅",
  "😂",
  "🤣",
  "😊",
  "😇",
  "🙂",
  "🙃",
  "😉",
  "😌",
  "😍",
  "😘",
  "😗",
  "😙",
  "😚",
  "😋",
  "😜",
  "😝",
  "😛",
  "🤑",
  "🤗",
  "🤓",
  "😎",
  "🤡",
  "🤠",
  "😏",
  "😒",
  "😞",
  "😔",
  "😟",
  "😕",
  "🙁",
  "☹️",
  "😣",
  "😖",
  "😫",
  "😩",
  "😤",
  "😠",
  "😡",
  "😶",
  "😐",
  "😑",
  "😯",
  "😦",
  "😧",
  "😮",
  "😲",
  "😵",
  "😳",
  "😨",
  "😰",
  "😢",
  "😥",
  "🤤",
  "😭",
  "😱",
  "😖",
  "😓",
  "😪",
  "😴",
  "🙄",
  "🤔",
  "😬",
  "🤥",
  "😞",
  "😷",
  "🤒",
  "🤕",
  "😈",
  "👿",
  "👹",
  "👺",
  "💀",
  "👻",
  "👽",
  "🤖",
  "😺",
  "😸",
  "😻",
  "😼",
  "😽",
  "🙀",
  "😿",
  "😾",
  "👐",
  "🙌",
  "👏",
  "🤝",
  "👍",
  "👎",
  "👊",
  "✊",
  "🤛",
  "🤜",
  "🤞",
  "✌️",
  "🤘",
  "👌",
  "👈",
  "👉",
  "👆",
  "👇",
  "✋",
  "🤚",
  "🖐️",
];

// console.log(emojis);

let emojiDiv = document.querySelector(".emoji");
let generateBtn = document.querySelector(".btn");
let copyBtn = document.querySelector(".copy-btn");
let exitBTN = document.querySelector(".close-btn");
let absolute = document.querySelector(".absolute");

// Generates Random Emoji when clicked
generateBtn.addEventListener("click", () => {
  let val = Math.floor(Math.random() * 100);
  emojiDiv.innerText = emojis[val];

  //   console.log(emojiDiv.innerText);
  // console.log(emojis[val]);
});

/* COPY EMOJI */
copyBtn.addEventListener("click", () => {
  const textToCopy = emojiDiv.innerText;

  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // Select and copy the text
  textarea.select();
  document.execCommand("copy");

  // Removing the temporary input element and updating button text
  document.body.removeChild(textarea);
  copyBtn.innerText = "Emoji Copied!";
  setTimeout(() => (copyBtn.innerText = "Copy Emoji"), 2000);
});

// EXIT WELCOME MESSAGE
exitBTN.addEventListener("click", () => {
  absolute.style.display = "none";
});
