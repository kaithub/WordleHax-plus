import { WHPErrorDictionary } from "../WHPErrorDict";

export default function (error: string) {
    return WHPErrorDictionary[error];
}