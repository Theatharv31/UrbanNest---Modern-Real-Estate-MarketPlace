export const errorHandler = (statusCode, message) => {
    const error = new Error();
    statusCode=statusCode;
    message = message;
    return error;
};