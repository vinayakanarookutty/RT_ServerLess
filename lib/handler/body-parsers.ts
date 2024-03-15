import { LamdaHandler } from ".";

export function withBodyParser(handler: LamdaHandler) {
    return async function (event: any) {
        let { body, ...rest } = event
        body = JSON.parse(body)
        return handler({ body, ...rest })
    }
}