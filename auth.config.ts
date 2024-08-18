import type { NextAuthConfig } from "next-auth";
 
export default {
  pages: {
    signIn: "/auth/login",
  },
  providers: []
} satisfies NextAuthConfig