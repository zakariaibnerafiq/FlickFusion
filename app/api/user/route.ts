import db from "@lib/db";
import { NextRequest, NextResponse } from 'next/server';
import {auth} from '@auth'
export async function GET(req:NextRequest) {
    const session = await auth()

    if (!session) {
        return NextResponse.redirect('/login')
    }
    const email = session.user!.email!
    // get user data from database
    const user = await db.user.findFirst({
        where: {
            email: email
        }
    })

    return NextResponse.json(user)

    
}