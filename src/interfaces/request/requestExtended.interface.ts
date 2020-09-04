import {Request} from 'express-serve-static-core';

import {
  ICity,
  IClient,
  IClientStatus,
  IComment,
  ICourse,
  IGroup,
  ITask,
  ITaskStatus,
  IUser
} from '../../database';

export interface IRequestExtended extends Request {
  user?: IUser;
  authUser?: IUser;
  task?: ITask;
  taskStatus?: ITaskStatus
  client?: IClient
  clientStatus?: IClientStatus
  comment?: IComment
  city?: ICity
  group?: IGroup
  course?: ICourse
  access_token?: string;
}
