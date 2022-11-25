import { HttpException, HttpStatus } from '@nestjs/common';

export abstract class BaseService {
  toEntity(dto) {
    const dtoKeys = Object.keys(dto);

    return dtoKeys.reduce((init, key) => {
      const parsedKey = this.toEntityKey(key);
      init[parsedKey] = dto[key];
      return init;
    }, {});
  }

  private toEntityKey(name) {
    return name.toString().replace(/([A-Z])/g, function (g) {
      return `_${g[0].toLowerCase()}`;
    });
  }

  responseMessage({
    statusCode = HttpStatus.OK,
    success = true,
    data = {},
    message = '',
    validationError = {},
  }) {
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
  }
}
