
import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'
import User from '@/lib/models'
import connectToDb from '@/lib/connectToDb'
import bcrypt from 'bcryptjs'
import { LoginSchema } from "@/schemas/index"

export const {
  auth,
  handlers: { GET, POST },
} = NextAuth({
  pages: {
    error: '/',
    // signIn: '/login',
    // verifyRequest: '/login', // (used for check email message)
    // signUp: '/signup',
  },
  theme: {
    colorScheme: 'dark', // "auto" | "dark" | "light"
    brandColor: '#16a34a', // Hex color code
    logo: '/images/fruits-basket-2.png', // Absolute URL to image
    buttonText: '#000000', // Hex color code
  },

  providers: [
    CredentialsProvider({
      name: 'Credential',
      credentials: {
        username: { type: 'text', required: true },
        password: { type: 'password', required: true },
      },
      async authorize(credentials) {
        const validatedFields = LoginSchema.safeParse(credentials)
        if(validatedFields.success){
          await connectToDb()
          const {username, password} = validatedFields.data
          try {
            const user = await User.findOne({ username: username })
              .lean().exec()
            if (user) {
              const isPasswordCorrect = await bcrypt.compare(
                password,
                user.password
              )
              if (isPasswordCorrect) {
                return {
                  ...user,
                  id: user._id.toString(),
                }
              }
            }
          }catch{
            return null
          }
        }
        return null
      },
    }),
  ],

  callbacks: {
    async jwt({ token, user }) {
      if(!user){
        return token
      } 
      const id = user.id
      const existingUser = await User.findById(id ?? "").lean().exec()
      if(!existingUser) 
        return token

      if (user) {
        return {
          ...token,
          id: existingUser._id.toString(),
          name: existingUser.username,
          admin: existingUser.isAdmin,
          image: existingUser.img,
          email: existingUser.email,
        }
      }
      return token
    },
    async session({ session, token }) {     
      return {
        ...session,
        user: {
          ...session.user,
          id: token.id as string,
          name: token.name as string,
          admin: token.admin as boolean,
          image: token.image as string,
          email: token.email as string,
        },
      }
    },

    async redirect({ baseUrl }) {
      return `${baseUrl}/`
    },
  },
  secret: process.env.AUTH_SECRET,
  session: {
    strategy: 'jwt',
  },
})
