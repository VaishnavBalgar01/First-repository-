import {createReadStream, createWriteStream} from "fs";
import path from "path";

const inputFilePath = path.join(import.meta.dirname, "input.txt");
const outputFilePath = path.join(import.meta.dirname, "output.txt");

const readableStream = createReadStream(inputFilePath, { highWaterMark: 16});

const writableStream = createWriteStream(outputFilePath);

readableStream.on("data", (chunk) => {
    console.log("Received a chunk:");
    console.log(chunk);

    console.log("Buffer converted to text:");
    console.log(chunk.toString());

    // Write the chunk to another file
    writableStream.write(chunk);
});

// Handle end of reading
readableStream.on("end", () => {
    writableStream.end();
    console.log("Reading completed!");
});

// Handle errors
readableStream.on("error", (err) => {
    console.log("Error:", err.message);
});

writableStream.on("error", (err) => {
    console.log("Error:", err.message);
});

writableStream.on("finish", () => {
    console.log("File copied successfully!");
});