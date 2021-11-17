import { onRequestTimeout } from "../utils/onRequestTimeout";
import { sleep, getRandomIdentifier, log } from "../utils/helpers";

const DEFAULT_TIMEOUT_IN_MILISECONDS = process.env.REQUEST_TIMEOUT
    ? parseInt(process.env.REQUEST_TIMEOUT)
    : 1500;

export default async (request, response, next) => {
    const requestId = getRandomIdentifier();
    const timeout = DEFAULT_TIMEOUT_IN_MILISECONDS;

    log('Initialized request', requestId);

    /**
     * Set request timeout
     */
    const id = setTimeout(() => {
        log('Request timed out.', requestId);

        // Emit 'timeout' event
        request.emit('timeout', requestId)
    }, timeout);

    log(`Set request timeout to: ${timeout} miliseconds.`, requestId);

    /**
     * Apply request 'timeout' event handler
     */
    request.on('timeout', (identifier) => {
        log('Timeout event callback', identifier);
        onRequestTimeout(identifier, next)
    })

    /**
     * Clear request timeout on response finish
     */
    response.on('finish', () => {
        log('Clear request timeout on response "finish" event.', requestId);
        clearTimeout(id)
    })

    /**
     * Clear request timeout when response headers are set
     */
    response.on('headers', () => {
        log('Clear request timeout on response "headers" event', requestId);
        clearTimeout(id)
    })

      await sleep(3000);
  
      next()
    };