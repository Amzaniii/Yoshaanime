import NextAuth from "next-auth";
import Github from "next-auth/providers/github";

export const authOption = {
  providers: [
    Github({
      clientId: process.env.GITHUB_CLIENT,
      clientSecret: process.env.GITHUB_SECRET
    })
  ],
  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOption);

export { handler as GET, handler as POST };