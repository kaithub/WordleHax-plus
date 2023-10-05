export enum WHPErrorDictionary {
    // Full Errors
    "WPT-1mY" = "No title text was included with WH+.",
    "WPI-2fY" = "WH+ is already injected. Please refresh and then reinject.",
    "WPF-3mY" = "WH+ failed to inject it's CSS. Try reinjecting.",
    "WPF-4MY" = "WH+ failed to inject it's JS. Reinject WH+.",
    "WPF-5fN" = "WH+ failed to inject. Try reinjecting.",
    "WPA-6mN" = "WH+ found WH+ CSS already. Attempting to override.",
    "WPA-7mN" = "WH+ found WH+ JS already. Attempting to override.",
    // Err Types
    "T" = "Title Error",
    "F" = "Failure",
    "C" = "Crash",
    "A" = "Already found",
    "I" = "Already injected",
    // Err Spec
    "f" = "Fatal",
    "M" = "Major error",
    "m" = "Minor error",
    "B" = "Potential bug",
    // Err User-fixable
    "Y" = "User fixable",
    "N" = "Internal: Not user fixable"
}
