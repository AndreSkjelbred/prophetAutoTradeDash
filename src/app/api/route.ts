import { NextResponse } from "next/server";
const express = require("express");

const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.json());

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const { userInfo, accessToken, expiredTime } = data;

    if (!userInfo) return NextResponse.json({ status: false });

    return NextResponse.json({});
  } catch (err) {
    console.log(err);
    return NextResponse.json({ error: err });
  }
}
