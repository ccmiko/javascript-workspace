/**
 * 検証したいこと
 *  - パブリック・プライベートなバケットからファイルを取得する
 *  - lambda、EC2以外の場所でコードを実行する
 */
import s3Client from "@/aws_s3/s3";
import { S3_BUCKET_TYPE } from "@/const";

async function get() {
  const client = s3Client();

  try {
    client.connect();
    const objectUrl = await client.getObjectUrl(
      S3_BUCKET_TYPE.PRIVATE,
      "a.txt"
    );
    console.log(objectUrl);
  } catch (error) {
    console.log(error);
  } finally {
    client.destroy();
  }

  console.log("end.");
}

get();
