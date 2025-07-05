import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        if (credentials.email && credentials.password) {
          return { id: 1, name: credentials.email, email: credentials.email };
        }
        return null;
      }
    }),
  ],
  session: { strategy: "jwt" },
  pages: { signIn: '/auth/signin' },
  secret: process.env.NEXTAUTH_SECRET,
});
