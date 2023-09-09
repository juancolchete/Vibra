import { stringToHex } from "@/utils/data";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sepBody = rawBody.split(",")
  const rawTxn = stringToHex(sepBody[2],parseInt(sepBody[0]))
  return NextResponse.json({rawTxn});
}
