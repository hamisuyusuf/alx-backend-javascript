export default function createInt8TypedArray(length, position, value) {
    // Create a new ArrayBuffer of the given length
    const buffer = new ArrayBuffer(length);

    // Create an Int8Array view of the buffer
    const int8Array = new Int8Array(buffer);

    // Check if the position is within the valid range
    if (position < 0 || position >= length) {
        throw new Error('Position outside range');
    }

    // Set the value of position
    int8Array[position] = value;

    // Return  DataView of the buffer
    return new DataView(buffer);
}
