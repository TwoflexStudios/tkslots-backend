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