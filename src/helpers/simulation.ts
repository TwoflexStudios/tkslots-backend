export const Mobileheaders = {
  "Accept": "*/*",
  "Accept-Encoding": "deflate, gzip",
  "Content-Type": "application/x-www-form-urlencoded",
  "User-Agent": "Dalvik/2.1.0 (Linux; U; Android 12; SM-S938U Build/8b3ee12.1)"
}

export const passwordGen = (_length = 12) => {
  const length = _length || Math.floor(Math.random() * (12 - 7 + 1)) + 7;
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const index = Math.floor(Math.random() * chars.length);
    password += chars[index];
  }
  return password;
}

export const getRandomPhoneNumber = () => {
  // List of valid DDDs in Brazil
  const ddds = [
    11, 12, 13, 14, 15, 16, 17, 18, 19,
    21, 22, 24, 27, 28,
    31, 32, 33, 34, 35, 37, 38,
    41, 42, 43, 44, 45, 46,
    47, 48, 49,
    51, 53, 54, 55,
    61, 62, 64, 63, 65, 66, 67,
    68, 69,
    71, 73, 74, 75, 77, 79,
    81, 82, 83, 84, 85, 86, 87, 88, 89,
    91, 92, 93, 94, 95, 96, 97, 98, 99
  ];

  // Chooses a random DDD
  const ddd = ddds[Math.floor(Math.random() * ddds.length)];

  // Brazilian mobile phones start with 9 and have 9 digits
  const cellPrefix = 9;

  // Generates the remaining 8 digits of the number
  const number = Array.from({ length: 8 }, () => Math.floor(Math.random() * 10)).join('');

  return `${ddd}${cellPrefix}${number}`;
}