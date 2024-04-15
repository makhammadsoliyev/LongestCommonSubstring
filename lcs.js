"use strict";

let strings = process.argv.slice(2);
console.log(findLongestCommonSubstring(strings));

function findLongestCommonSubstring(strings)
{
    let len = strings.length;
    if (len === 0)
        return "";

    if (len === 1)
        return strings[0];

    const shortestString = strings.reduce((prev, current) =>
        current.length < current.length ? current : prev);

    let results = [];
    for (let i= 0; i < shortestString.length; i++)
    {
        for (let j = i + 1; j <= shortestString.length; j++)
        {
            let substring = shortestString.slice(i, j);
            if (strings.every((string) => string.includes(substring)))
            {
                results.push(substring);
            }
        }
    }

    if (results.length === 0)
        return "";

    return results.reduce((prev, current) => current.length < prev.length ? prev : current);
}