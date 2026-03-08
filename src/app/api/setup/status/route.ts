import { NextResponse } from "next/server";
import { checkSetupStatus } from "~/lib/setup";

export async function GET() {
  const status = await checkSetupStatus();
  return NextResponse.json(status);
}
