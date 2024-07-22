import * as fs from 'fs';
import { NextResponse } from 'next/server';

// Handles GET requests to /api

export async function POST(request) {
    const pattern = await request.body;
    console.log('api triggered with pattern', pattern);
    try {

        const directoryPath = path.join(__dirname, "../../../../public/");
        const fileNames = [];
        const files = fs.readdirSync(directoryPath);
        files.forEach(function (file) {
            if (file.startsWith(pattern)) {
                fileNames.push(file);
            }
        });

        console.log("fileNames", fileNames);
        if (!fileNames) {
            return NextResponse.json({ status: 404, message: "Failed: no files found" })
        }
        return NextResponse.json({ status: 200, message: "Success: Files found" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({ status: 400, message: "COULD NOT FETCH FILES" })
    }
}