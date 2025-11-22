import bcrypt from 'bcrypt';

const passwordHashSalt = 12;

export const EncryptPassword = async (password: string) => {
    const hash = await bcrypt.hash(password, passwordHashSalt);
    return hash;
}

export const ComparePassword = async (password: string, hash: string) => {
    const result = await bcrypt.compare(password, hash);
    return result;
}