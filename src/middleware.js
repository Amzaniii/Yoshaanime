export { default } from "next-auth/middleware"

export const config = { matcher: ["/user/:path*", "/api/v1/comment", "/dashboard/:path*"] }