import { getToken } from "next-auth/jwt";
import {
  NextMiddleware,
  NextResponse,
  NextRequest,
  NextFetchEvent,
} from "next/server";

const dashboardPage = ["/mydocuments"];

const withAuth = (middleware: NextMiddleware, requireAuth: string[] = []) => {
  return async (req: NextRequest, next: NextFetchEvent) => {
    const pathname = req.nextUrl.pathname;

    if (requireAuth.includes(pathname)) {
      const token = await getToken({ req });
      console.log(token);
      if (!token && dashboardPage.includes(pathname)) {
        const url = new URL("/login", req.url);
        url.searchParams.set("callbackUrl", encodeURI(req.url));
        return NextResponse.redirect(url);
      }
    }
    return middleware(req, next);
  };
};

export default withAuth;
