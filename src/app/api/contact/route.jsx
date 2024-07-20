import emailService from '@/app/utils/emailService';
import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
    console.log('request receieved');
    const formData = await request.formData()
    console.log(formData);
    try {

        const sendStatus = emailService(formData);
        if (!sendStatus){
            return NextResponse.json({ status: sendStatus, message: "Failed: email was not sent" })
        }
        return NextResponse.json({  status: sendStatus,message: "Success: email was sent" })

    } catch (error) {
        console.log(error)
        NextResponse.status(500).json({  status: sendStatus, message: "COULD NOT SEND MESSAGE" })
    }
  }