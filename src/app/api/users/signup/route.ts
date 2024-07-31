import { connectToDb } from "@/dbConnection/dbConnection";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { sendMail } from "@/helpers/mailer";

connectToDb();

export async function POST(req: NextRequest) {
  const reqBody = await req.json();
  const { userName, email, password } = reqBody;
  console.log(reqBody);

  // validate
  const user = await User.findOne({ email });
  if (user) {
    return NextResponse.json({ error: "User already exist" }, { status: 400 });
  }

  const salt = bcryptjs.genSaltSync(10);
  const hashedPassword = bcryptjs.hash(password, salt);

  const newUser = new User({
    userName,
    email,
    password: hashedPassword,
  });

  const savedUser = await newUser.save();
  console.log(`savedUser`, savedUser);

  // send verification mail;
  await sendMail({ email, emailType: "VERIFY", userId: savedUser._id });
  return NextResponse.json(
    { message: "User registered successfully", success: true, savedUser },
    { status: 201 }
  );

  try {
  } catch (error: any) {
    return NextResponse.json({ error: error.message });
  }
}
