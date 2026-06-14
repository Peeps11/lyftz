import { handleUpload, type HandleUploadBody } from '@vercel/blob/client'
import { type NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest): Promise<NextResponse> {
  const body = (await request.json()) as HandleUploadBody

  try {
    const jsonResponse = await handleUpload({
      body,
      request,
      onBeforeGenerateToken: async () => {
        return {
          allowedContentTypes: [
            'video/mp4',
            'video/webm',
            'video/quicktime',
            'image/jpeg',
            'image/png',
            'image/webp',
          ],
          // Allow large videos (up to ~500 MB)
          maximumSizeInBytes: 500 * 1024 * 1024,
        }
      },
      onUploadCompleted: async ({ blob }) => {
        console.log('[v0] Upload completed:', blob.url)
      },
    })

    return NextResponse.json(jsonResponse)
  } catch (error) {
    console.error('[v0] Upload error:', error)
    return NextResponse.json(
      { error: (error as Error).message },
      { status: 400 },
    )
  }
}
