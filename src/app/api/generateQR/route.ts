
import { decodeFromBase } from "@/utils/data";
import axios from "axios";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

let config = {
  method: 'post',
  maxBodyLength: Infinity,
  url: `${process.env.PIX_API}/oauth/token`,
  headers: { 
    'Content-Type': 'application/json', 
    'Authorization': process.env.PIX_BASIC
  },
  data : {
    grant_type: "client_credentials" 
  }
};

const authReq = await axios.request(config)
console.log(authReq.data)
}
