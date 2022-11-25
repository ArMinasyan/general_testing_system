import { HttpException, HttpStatus } from '@nestjs/common';

export default ({
  statusCode = HttpStatus.OK,
  success = true,
  data = {},
  message = '',
  validationError = {},
}) => {
  if (!success) {
    throw new HttpException(
      {
        statusCode: statusCode,
        success: false,
        data: data,
        message: message || data['message'],
        validationError: {},
      },
      statusCode,
    );
  } else {
    return {
      statusCode: statusCode,
      success: success,
      data: data || {},
      message: message,
      validationError: validationError,
    };
  }
};
