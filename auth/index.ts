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
            return true
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