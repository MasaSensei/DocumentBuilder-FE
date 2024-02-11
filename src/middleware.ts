import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import withAuth from "./features/auth/withAuth";

export const mainMiddleware = withAuth(async (req: NextRequest) => {
  return NextResponse.next();
});

export default withAuth(mainMiddleware, ["/mydocuments"]);
