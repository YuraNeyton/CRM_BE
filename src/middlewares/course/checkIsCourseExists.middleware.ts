import {NextFunction, Response} from 'express';

import {IRequestExtended} from '../../interfaces';
import {ICourse} from '../../database';
import {ResponseStatusCodes} from '../../constants';
import {ErrorHandler, errors} from '../../errors';
import {courseService} from '../../services';
import {idValidator} from '../../validators';

export const checkIsCourseExists = async (req: IRequestExtended, res: Response, next: NextFunction): Promise<void> => {
  try {
    const {course_id} = req.params;

    const {error} = idValidator.validate(course_id);

    if (error) {
      return next(
        new ErrorHandler(
          ResponseStatusCodes.NOT_FOUND,
          errors.BAD_REQUEST_WRONG_PARAMS.message,
          errors.BAD_REQUEST_WRONG_PARAMS.code));
    }

    const course = await courseService.getById(+course_id) as ICourse;

    if (!course) {
      return next(new ErrorHandler(
        ResponseStatusCodes.NOT_FOUND,
        errors.NOT_FOUND_COURSE_NOT_PRESENT.message,
        errors.NOT_FOUND_COURSE_NOT_PRESENT.code));
    }

    req.course = course;
    next();

  } catch (error) {
    next(error);
  }
};