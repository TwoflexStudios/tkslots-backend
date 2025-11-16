import { NextFunction, Request, Response } from "express"
import { SendResponse } from "../helpers/res"
import { DecodeToken } from "./token"
import userModel, { PermissionsEnum, UserStatusEnum } from "../schemas/users"

type AuthMethods = 'query' | 'header'

class AuthController {
  static HeaderAuth = () => async (
    req: Request,
    resp: Response,
    next: NextFunction,
  ) => {
    let token: string = req.headers.authorization as string

    if (!token) {
      return SendResponse(resp, {
        status: false,
        message: 'Unauthorized',
      }, 401)
    }

    if (token.includes('Bearer ')) {
      token = token.split('Bearer ').join('')
    }

    const UserAuthenticated = await DecodeToken(token as string)

    if (!UserAuthenticated) {
      return SendResponse(resp, {
        status: false,
        message: 'Unauthorized',
      }, 401)
    }

    req.userAuthenticated = UserAuthenticated

    next()
  }

  static QueryAuth = () => async (
    req: Request,
    resp: Response,
    next: NextFunction,
  ) => {
    const token: string = req.query.token as string

    if (!token) {
      return SendResponse(resp, {
        status: false,
        message: 'Unauthorized',
      }, 401)
    }

    const UserAuthenticated = await DecodeToken(token as string)

    if (!UserAuthenticated) {
      return SendResponse(resp, {
        status: false,
        message: 'Unauthorized',
      }, 401)
    }

    req.userAuthenticated = UserAuthenticated

    next()
  }

  static OptionalQueryAuth = () => async (
    req: Request,
    resp: Response,
    next: NextFunction,
  ) => {
    const token: string = req.query.token as string

    if (token) {
      const UserAuthenticated = await DecodeToken(token as string);

      if (UserAuthenticated) {
        req.userAuthenticated = UserAuthenticated
      }
    }
    
    next()
  }

  static AuthValidation(method: AuthMethods = 'query') {
    return async (req: Request, resp: Response, next: NextFunction) => {
      let token: string =
        method === 'query'
          ? (req.query.token as string)
          : (req.headers.authorization as string)

      if (!token) {
        return SendResponse(resp, {
          status: false,
          message: 'Unauthorized',
        }, 401)
      }

      if (token.includes('Bearer ')) {
        token = token.split('Bearer ').join('')
      }
      const UserAuthenticated = await DecodeToken(token as string)

      if (!UserAuthenticated) {
        return SendResponse(resp, {
          status: false,
          message: 'Unauthorized',
        }, 401)
      }

      next()
    }
  }

  static CheckPermission(permission: PermissionsEnum){
    return async (req: Request, res: Response, next: NextFunction) => {
      const user = await userModel.findOne({_id: req.userAuthenticated.id, status: UserStatusEnum.ACTIVE});

      if(!user) {
          return SendResponse(res, {status: false, message: "Need login"}, 401);
      }

      const isRoot = user.permissions.includes(PermissionsEnum.ALL)

      if(isRoot) return next();

      if(!user.permissions.includes(permission)){
        return SendResponse(res, {
          status: false,
          message: 'Você não tem permissão para realizar esta ação',
        }, 200)
      }

      next();
    }
  }
}

export default AuthController