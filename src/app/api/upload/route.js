import { PutObjectCommand, S3Client } from "@aws-sdk/client-s3";
import uniquid from 'uniqid';

export async function POST(req) {
    try {
        const formData = await req.formData();
        const file = formData.get('file');
        const { name, type } = file;
        const data = await file.arrayBuffer();

        const s3client = new S3Client({
            region: 'us-east-1',
            credentials: {
                accessKeyId: process.env.AWS_ACCESS_KEY_ID,
                secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
            }
        });

        const id = uniquid();
        const ext = name.split('.').slice(-1)[0];
        const newName = id +'.'+ ext;

        const uploadCommand = new PutObjectCommand({
            Bucket: process.env.BUCKET_NAME,
            ACL: 'public-read',
            Body: data,
            ContentType: type,
            Key: newName,
        });

        const response = await s3client.send(uploadCommand);
        return new Response(JSON.stringify({ message: 'File uploaded successfully', newName }), { status: 200 });

    } catch (error) {
        console.error('Error uploading file:', error);
        return new Response(JSON.stringify({ error: error.message }), { status: 500 });
    }
}
