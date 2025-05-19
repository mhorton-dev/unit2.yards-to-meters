/**
 * One yard is 0.9144 meters.
 * @param {number} yards
 * @returns {number} the given distance in `yards` converted to meters
 */
function convertToMeters(yards) {
    // Convert yards to meters using the conversion factor
    const meters = yards * 0.9144;
    return meters;
}

/**
 * Describes the given distance after converting it from yards to meters.
 * - If the distance is greater than 1000 meters, it's longer than a kilometer.
 * - If the distance is greater than 100 meters, it's longer than a hectometer.
 * - If the distance is greater than 10 meters, it's longer than a decameter.
 * - Otherwise, the distance is longer than a sandwich.
 * @example
 * describeDistance(100);
 * // Returns "100 yards is 91.44 meters, which is longer than a decameter!"
 * @param {number} yards
 * @returns {string} A description of the given distance.
 */
function describeDistance(yards) {
    // Convert yards to meters
    const meters = convertToMeters(yards);
    // Create a description based on the distance in meters
    let description = `${yards} yards is ${meters} meters, which is longer than `;
    
    if (meters > 1000) {
        description += "a kilometer!";
    } else if (meters > 100) {
        description += "a hectometer!";
    } else if (meters > 10) {
        description += "a decameter!";
    } else {
        description += "a sandwich!";
    }
    
    return description;
}

console.log(convertToMeters(100));
console.log(describeDistance(10));
console.log(describeDistance(100));
console.log(describeDistance(1000));
console.log(describeDistance(10000));
