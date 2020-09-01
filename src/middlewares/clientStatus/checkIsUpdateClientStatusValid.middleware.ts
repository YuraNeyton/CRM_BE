import {NextFunction, Response} from 'express';

import {IClientStatusUpdateFields, IRequestExtended} from '../../interfaces';
import {updateClientStatusValidator} from '../../validators';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler} from '../../errors';

export const checkIsUpdateClientStatusValid = (req: IRequestExtended, res: Response, next: NextFunction): void => {
  const updateFields = req.body as IClientStatusUpdateFields;

  const {error} = updateClientStatusValidator.validate(updateFields);

  if (error) {
    return next(new ErrorHandler(ResponseStatusCodes.BAD_REQUEST, error.details[0].message));
  }

  next();
};