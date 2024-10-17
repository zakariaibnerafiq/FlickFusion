import db from "@lib/db";
import NextAuth from "next-auth"
import Google from "next-auth/providers/google"


export const { auth, handlers, signIn, signOut } = NextAuth({
    providers: [Google({
        profile(profile) {
            return {
                id: profile.sub,
                name: profile.name,
                email: profile.email,
                image: profile.image,
            }
        }
    })],

    session: {
        strategy: "jwt",
    },
    pages: {
        signIn: '/login'
    },
    callbacks: {
        async signIn({ user, profile }) {
            console.log('USER: ', user);
            console.log('PROFILE: ', profile);


            //check if user is in database
            //if not create user in database
            //if user is in database, return true
            //if user is not in database, return false

            try {
                if (!profile?.email) {
                    return false;
                }

                const existingUser = await db.user.findFirst({
                    where: {
                        email: profile.email
                    }
                })

                if (existingUser) {
                    return true
                } else {
                    const newUser = await db.user.create({
                        data: {
                            username: profile!.name!,
                            email: profile!.email,
                            password: 'empty',
                            profilePic: profile!.picture,
                        }
                    })
                    if (newUser) {
                        return true
                    } else {
                        throw new Error('User not created')
                    }

                }
            } catch (error) {
                console.error('Error in signIn callback:', error)
                return false
            } finally {
                await db.$disconnect()
            }

        },
        async jwt({ token, user, profile }) {
            if (user) {
                token.id = profile?.sub
            }
            return token
        },
        async session({ session, token }) {
            if (token.id) {
                session.user.id = token.id as string
            }
            return session
        }
    }
})