import { google } from 'googleapis';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Nhận dữ liệu từ Frontend gửi lên
    const body = await req.json();
    
    // Destructuring đúng theo tên biến trong state formData của file cta-section.tsx
    // Lưu ý: 'package' là từ khóa nên ta đặt alias là packageOption cho an toàn
    const { name, phone, company, email, package: packageOption, quantity } = body;

    // 2. Cấu hình xác thực Google (Service Account)
    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        // Xử lý lỗi xuống dòng trong biến môi trường
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      },
      scopes: [
        'https://www.googleapis.com/auth/drive',
        'https://www.googleapis.com/auth/drive.file',
        'https://www.googleapis.com/auth/spreadsheets',
      ],
    });

    const sheets = google.sheets({ auth, version: 'v4' });

    // 3. Chuẩn bị dữ liệu để ghi vào Sheet
    // Tạo timestamp giờ Việt Nam
    const timestamp = new Date().toLocaleString('vi-VN', { timeZone: 'Asia/Ho_Chi_Minh' });
    
    // Map dữ liệu vào mảng theo đúng thứ tự cột trong ảnh Sheet bạn gửi:
    // A: Timestamp | B: Name | C: Phone | D: Company | E: Email | F: Package | G: Amount | H: Status
    const rowData = [
      timestamp,      // Col A
      name,           // Col B
      phone,          // Col C
      company,        // Col D
      email,          // Col E
      packageOption,  // Col F
      quantity,       // Col G (Frontend gọi là quantity, Sheet gọi là Amount)
      'Waiting'           // Col H (Mặc định trạng thái mới)
    ];

    // 4. Gọi Google API để append dữ liệu
    const response = await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: 'Workshop!A:H', // Ghi vào sheet tên 'Workshop'
      valueInputOption: 'USER_ENTERED',
      requestBody: {
        values: [rowData],
      },
    });

    return NextResponse.json({ success: true, data: response.data });

  } catch (error: any) {
    console.error('Google Sheet API Error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Internal Server Error' },
      { status: 500 }
    );
  }
}