import "express";

declare global {
  namespace Express {
    interface Request {
      userAuthenticated: {
        id: string;
        username: string;
        name: string;
        permissions: string[];
        tokenType: string;
      };
      result: any;
    }
  }
}
