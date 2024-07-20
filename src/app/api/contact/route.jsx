import emailService from '@/app/utils/emailService';
import { NextResponse, NextRequest } from 'next/server'
const nodemailer = require('nodemailer');

// Handles POST requests to /api

export async function POST(request) {
    const formData = await request.formData();
    console.log('api triggered with formdata', formData);
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