import { Request, Response } from "express";

import { ListAllUsersUseCase } from "./ListAllUsersUseCase";

class ListAllUsersController {
  constructor(private listAllUsersUseCase: ListAllUsersUseCase) {}

  handle(request: Request, response: Response): Response {
    try {
      const { user_id } = request.headers;
      const userList = this.listAllUsersUseCase.execute({ user_id: String(user_id) });
      
      return response.json(userList);
    } catch(e) {
      return response.status(400).json({ error: e});
    }
  }
}

export { ListAllUsersController };
