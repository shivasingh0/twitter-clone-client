import bcryptjs from "bcryptjs";
import { connectToDb } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { getDataFromToken } from "@/helpers/getDataFromToken";

connectToDb();

export async function POST(req: NextRequest) {
  try {
    // extract data from token
    const userId = await getDataFromToken(req);
    const user = await User.findOne({ _id: userId }).select("-password");
    if (!user) {
      return NextResponse.json({ error: "User not found" }, { status: 400 });
    }
    return NextResponse.json({
      messgae: "User found",
      data: user,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
