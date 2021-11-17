import RequestTimeoutError from "./RequestTimeoutError";

export const onRequestTimeout = (requestId, callback) => {
    callback(new RequestTimeoutError(`Request timed out: ${requestId}.`));
};
