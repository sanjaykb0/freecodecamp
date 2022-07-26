function spinalCase(str) {
    str = str.replace(/([a-z])([A-Z])/g, "$1 $2");
    return str.trim().split(/\.|\_|\ /).map(word => word.toLowerCase()).join("-");
}
