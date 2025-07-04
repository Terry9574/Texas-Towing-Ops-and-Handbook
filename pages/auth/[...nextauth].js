import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
// import other providers if needed

export default NextAuth({
  providers: [
    // Example provider, update/remove as needed:
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Dummy logic: replace with your auth logic!
        if (credentials.username === "admin" && credentials.password === "password") {
          return { id: 1, name: "Admin" };
        }
        return null;
      }
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
});
