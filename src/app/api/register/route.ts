import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const body = await request.json();

  // Menampilkan email dan username yang diterima dari permintaan
  console.log("Email:", body.email);
  console.log("Username:", body.username);
  console.log("Open ID:", body.open_id);

  // Hapus pengiriman permintaan ke endpoint luar

  return NextResponse.json(body); // Mengembalikan data yang diterima sebagai respons
}

export async function GET(request: NextRequest) {
  try {
    const body = await request.json(); // Mengambil data dari body request
    console.log("Email:", body.email);
    console.log("Username:", body.username);
    console.log("Open ID:", body.open_id);
    return NextResponse.json(body); // Mengembalikan data yang diterima sebagai respons
  } catch (error) {
    console.error("Error parsing JSON:", error);
    return NextResponse.error();
  }
}
