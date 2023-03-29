import { WPPErrorDictionary } from "./WPPErrorDict"

export default function(error: string) {
    // WPx-0tu
    error = error.split('WP')[1]
    // x-0tu
    
    let errorType = WPPErrorDictionary[error.split('-')[0]]
    let errorID = WPPErrorDictionary[error.split('-')[1].split('')[0]]
    let errorSpec = WPPErrorDictionary[error.split('-')[1].split('')[1]]
    let errorUF = WPPErrorDictionary[error.split('-')[1].split('')[2]]
    console.log(errorType,errorID,errorSpec,errorUF)
}