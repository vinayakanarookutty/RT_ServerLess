
export type LamdaRespose = {
    statusCode: number
    [key: string]: any
}

export type LamdaEvent = {
    body: Record<string, string>
    [key: string]: string | Record<string, string>
}

export type LamdaHandler = (event: LamdaEvent) => Promise<LamdaRespose>