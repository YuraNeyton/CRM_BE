import {NextFunction, Request, Response} from 'express';

import {ITaskStatus} from '../../database';
import {ErrorHandler} from '../../errors';
import {ResponseStatusCodes} from '../../constants';
import {createTaskStatusValidator} from '../../validators';

export const checkIsCreateTaskStatusValid = (req: Request, res: Response, next: NextFunction): void => {
  const taskStatus = req.body as ITaskStatus;

  const {error} = createTaskStatusValidator.validate(taskStatus);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};