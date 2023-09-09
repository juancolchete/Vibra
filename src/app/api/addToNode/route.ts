import { decodeFromBase } from "@/utils/data";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const rawBody = await req.text()
  const sepBody = rawBody.split(",")
  console.log(sepBody[2])
  const rawTxn = decodeFromBase(sepBody[2],parseInt(sepBody[0]))
  let config = {
    method: 'get',
    maxBodyLength: Infinity,
    url:'',
    headers: { }
  };
  if(parseInt(sepBody[1]) == 5){
    console.log(rawTxn)
    const urlBase = process.env.GOERLI_API_URL
    const apiKey = process.env.GOERLI_API_KEY
    config.url = `${urlBase}/api?module=proxy&action=eth_sendRawTransaction&hex=${rawTxn}&apikey=${apiKey}`
    const request = await axios.request(config);
    return NextResponse.json(request.data);
  }
  return NextResponse.json({rawTxn});
}
