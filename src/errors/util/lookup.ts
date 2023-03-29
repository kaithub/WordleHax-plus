import { WPPErrorDictionary } from "../WPPErrorDict";

export default function (error: string) {
    return WPPErrorDictionary[error];
}