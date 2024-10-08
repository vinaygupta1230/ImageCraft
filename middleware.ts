import { clerkMiddleware } from '@clerk/nextjs/server'

export default clerkMiddleware({
  // ignoredRoutes: ['/', '/api/clerk'],
})

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc|api/webhooks/clerk)(.*)',
    // '/((?!.*\\..*|_next|api/webhooks/clerk|api/webhooks/stripe|$).*)', // Exclude static files, _next, and the specified webhook routes
    // '/(api|trpc)(.*)',
  ],
}