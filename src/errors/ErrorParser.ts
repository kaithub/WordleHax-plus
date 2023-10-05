import { WHPErrorDictionary } from "./WHPErrorDict"

export default function(error: string) {
    // WPx-0tu
    error = error.split('WP')[1]
    // x-0tu
    
    let errorType = WHPErrorDictionary[error.split('-')[0]]
    let errorID = WHPErrorDictionary[error.split('-')[1].split('')[0]]
    let errorSpec = WHPErrorDictionary[error.split('-')[1].split('')[1]]
    let errorUF = WHPErrorDictionary[error.split('-')[1].split('')[2]]
    console.log(errorType,errorID,errorSpec,errorUF)
}