import { decodeFromBase } from "@/utils/data";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const formData = await req.formData()
  const rawBody =formData.get("Body")
  let sepBody = rawBody?.toString().split(",")
  sepBody = sepBody ? sepBody : []
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
    console.log(rawTxn); 
    const request = await axios.request(config);
    let reqconfig = {
      method: 'post',
      maxBodyLength: Infinity,
      url: `https://api.twilio.com/2010-04-01/Accounts/${process.env.TWILLIO_ACCOUNT}/Messages.json`,
      headers: { 
        'Content-Type': 'application/x-www-form-urlencoded', 
        'Authorization': process.env.TWILLIO_TOKEN
      },
      data : {
        To: formData.get("From"),
        From: process.env.NEXT_PUBLIC_TWILLIO_NUMBER,
        Body: `${request.data.result}` 
      }
    };

    await axios.request(reqconfig)
    return NextResponse.json(request.data);
  }
  return NextResponse.json({rawTxn});
}
