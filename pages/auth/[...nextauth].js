import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

// Demo users for instant login (replace with Supabase for production)
const users = [
  { id: 1, email: "admin@demo.com", password: "password", role: "admin" },
  { id: 2, email: "dispatcher@demo.com", password: "password", role: "dispatcher" },
  { id: 3, email: "driver@demo.com", password: "password", role: "driver" }
];

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials) {
        const user = users.find(
          u => u.email === credentials.email && u.password === credentials.password
        );
        if (user) return user;
        return null;
      }
    })
  ],
  callbacks: {
    async session({ session, token }) {
      if (token?.role) session.user.role = token.role;
      return session;
    },
    async jwt({ token, user }) {
      if (user) token.role = user.role;
      return token;
    }
  },
  pages: {
    signIn: "/"
  }
});
