import config from "../config/convict";
import jwt from "jsonwebtoken"
import { PermissionsEnum } from "../schemas/users";

export interface UserAuthenticated {
    id: string;
    username: string;
    name: string;
    permissions: PermissionsEnum[];
    tokenType: string;
}

export const SigninUser = async (payload: Partial<UserAuthenticated>, expiresIn = "7d") => {
  const security: string = config.get('jwt')
  const result = await jwt.sign({...payload, tokenType: "access"}, security, {expiresIn: "7d"})
  return result
}


export const DecodeToken = async (
  token: string,
): Promise<UserAuthenticated | false> => {
  try {
    const security = config.get('jwt')
    let decoded = await jwt.verify(token, security)
    return {
      ...decoded as any,
      token
    } as UserAuthenticated
  } catch {
    return false
  }
}