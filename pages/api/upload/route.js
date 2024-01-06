import { NextResponse } from "next/server";

export default async function POST(req, res) {
    try {
        const data = await req.formData();
        const file = data.get('file');

        if (!file) {
            return res.status(400).json({ error: 'No file provided' });
        }

        // Log the file details for verification
        console.log('File received:', {
            filename: file.name,
            size: file.size,
            type: file.type,
        });

        // You can also send a response to the client if needed
        return res.status(200).json({ success: true });
    } catch (error) {
        console.error('Error handling file upload:', error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}
