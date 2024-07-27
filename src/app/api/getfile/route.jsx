import * as fs from 'fs';
import * as path from 'path';
import { NextResponse } from 'next/server';

export async function GET(request) {
    const name = request.nextUrl.searchParams.get("name");

    console.log('api triggered with pattern', name);
    try {
        const directoryPath = path.join(__dirname, "../../../../../public/");
        const fileNames = [];
        const files = fs.readdirSync(directoryPath);
        files.forEach(function (file) {
            if (file.startsWith(name)) {
                fileNames.push(file);
            }
        });

        // console.log("fileNames", fileNames);
        if (!fileNames) {
            return NextResponse.json({ status: 404, fileNames: [], message: "Failed: no files found" })
        }
        return NextResponse.json({ status: 200, fileNames, message: "Success: Files found" })

    } catch (error) {
        // console.log(error)
        NextResponse.status(500).json({ status: 400, fileNames: [], message: "COULD NOT FETCH FILES" })
    }
}