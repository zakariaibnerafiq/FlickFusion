import { NextRequest, NextResponse } from "next/server";
import db from "@lib/db";


export async function POST(request: NextRequest){
    try{
        const reqbody = await request.json()
        const {movie, tmdbId} = reqbody

        const existingMovie = await db.movie.findFirst({
            where: {
                tmdbId: parseInt(tmdbId)
            }
        })

        if(existingMovie){
            return NextResponse.json({message: 'Movie already exists in the database', success: false})
        }

        const newMovie = await db.movie.create({
            data: {
                title: movie.title,
                description: movie.description,
                releaseDate: new Date(movie.releaseDate),
                genre: movie.genre,
                rating: movie.rating,
                image: movie.image,
                tmdbId: parseInt(tmdbId)
            }
        })

        if (newMovie){
            return NextResponse.json({message: 'Movie added successfully', success: true})
        } else {
            return NextResponse.json({message: 'An error occurred while adding the movie', success: false})
        }

    } catch (err){
        console.error(err)
        return NextResponse.json({message: 'An error occurred while adding the movie', success: false})
    }
}