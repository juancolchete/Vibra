
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
    'Authorization': 'Basic Q2xpZW50X0lkX2Q3MDhkMTQyMTVhYzFiYzBkYTFlYzYxYzgyODc1Yzk4ZWJhYTg4YjI6Q2xpZW50X1NlY3JldF9hZmExOTI2NGMwMjFmZDNiZmM1MjUwZWUzMjFmODE5YmYzNjIyYjk5'
  },
  data : {
    grant_type: "client_credentials" 
  }
};

const authReq = await axios.request(config)

}
