import NextAuth from "next-auth";
import { authConfig } from "./app/authconfig";

export default NextAuth(authConfig).auth;

export const config = {
  matcher: ['/((?!api|static|.*\\..*|_next).*)'],
};





















// MONGO = "mongodb+srv://rostandmessi2:8nEnf2Tb7zUEeFn4@cluster0.wu9wrfx.mongodb.net/dashboard?retryWrites=true&w=majority&appName=Cluster0"
// AUTH_SECRET = TNfLQgBJUc60zY0WWHI2TdNKqxKIEIttmMHmMUz49t8=
// AUTH_URL = http://localhost:3000/api/auth