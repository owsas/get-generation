"use strict";
function getGeneration(birthYear) {
    if (birthYear < 1946) {
        return "Traditionalist";
    }
    else if (birthYear >= 1946 && birthYear < 1955) {
        return "Older Boomer";
    }
    else if (birthYear >= 1955 && birthYear < 1965) {
        return "Younger Boomer";
    }
    else if (birthYear >= 1965 && birthYear < 1971) {
        return "Generation X (older)";
    }
    else if (birthYear >= 1971 && birthYear < 1981) {
        return "Generation X (younger)";
    }
    else if (birthYear >= 1981 && birthYear < 1996) {
        return "Generation Y";
    }
    else if (birthYear >= 1996 && birthYear < 2011) {
        return "Generation Z";
    }
    else {
        return "Generation Alpha";
    }
}
exports.getGeneration = getGeneration;
