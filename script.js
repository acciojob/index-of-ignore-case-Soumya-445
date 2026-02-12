function indexOfIgnoreCase(s1, s2) {
  // Edge cases
  if (s2 === "") return 0;        // Empty substring → index 0
  if (!s1 || !s2) return -1;      // Safety check

  // Case-insensitive comparison
  const str = s1.toLowerCase();
  const subStr = s2.toLowerCase();

  return str.indexOf(subStr);
}

// Please do not change the code below
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(indexOfIgnoreCase(s1, s2));
