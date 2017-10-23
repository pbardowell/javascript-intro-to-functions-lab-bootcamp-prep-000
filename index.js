function shout(string) {
  return string.toUpperCase()
}
function logShout (string) {
  console.log(string.toUpperCase())
}
function whisper(string) {
  return string.toLowerCase()
}
function logWhisper(string) {
  console.log(string.toLowerCase())
}
function sayHiToGrandma(string) {
  var uppercase = "HELLO!"
  var lowercase = "hello!"
  var mixedCase = "Hi there!"
  if (lowercase.toLowerCase() === lowercase) {
    return "I can't hear you!"
  } else if (uppercase.toUpperCase() === uppercase) {
    return "YES INDEED!"
  } else {
    return "I love you, too."
  }
}
