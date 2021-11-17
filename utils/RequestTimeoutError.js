class RequestTimeoutError extends Error {
    statusCode;

    constructor(message) {
        super(message);
        this.statusCode = 503;
        this.exitCode = 'ETIMEDOUT'
    }
}

export default RequestTimeoutError;
