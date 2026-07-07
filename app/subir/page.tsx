'use client'

import { upload } from '@vercel/blob/client'
import { useRef, useState } from 'react'
import { Upload, Copy, Check, Loader2 } from 'lucide-react'

export default function SubirPage() {
  const inputFileRef = useRef<HTMLInputElement>(null)
  const [url, setUrl] = useState<string | null>(null)
  const [uploading, setUploading] = useState(false)
  const [progress, setProgress] = useState(0)
  const [error, setError] = useState<string | null>(null)
  const [copied, setCopied] = useState(false)

  async function handleSubmit(event: React.FormEvent) {
    event.preventDefault()
    setError(null)
    setUrl(null)

    const file = inputFileRef.current?.files?.[0]
    if (!file) {
      setError('Selecciona un archivo primero.')
      return
    }

    setUploading(true)
    setProgress(0)

    try {
      const newBlob = await upload(file.name, file, {
        access: 'public',
        handleUploadUrl: '/api/upload',
        onUploadProgress: (e) => setProgress(Math.round(e.percentage)),
      })
      setUrl(newBlob.url)
    } catch (err) {
      setError((err as Error).message || 'Error al subir el archivo.')
    } finally {
      setUploading(false)
    }
  }

  function copyUrl() {
    if (!url) return
    navigator.clipboard.writeText(url)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <main className="min-h-screen bg-background text-foreground flex items-center justify-center p-4">
      <div className="w-full max-w-lg bg-card border border-border rounded-xl p-8">
        <h1 className="text-2xl font-display font-bold mb-2">Subir archivo</h1>
        <p className="text-sm text-muted-foreground mb-6 leading-relaxed">
          Sube videos o imágenes (hasta 500 MB). Al terminar, copia el enlace y
          pásamelo para usarlo en la web.
        </p>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            ref={inputFileRef}
            type="file"
            accept="video/mp4,video/webm,video/quicktime,image/jpeg,image/png,image/webp"
            required
            className="block w-full text-sm text-muted-foreground file:mr-4 file:rounded-lg file:border-0 file:bg-primary file:px-4 file:py-2 file:text-sm file:font-medium file:text-primary-foreground hover:file:bg-primary/90"
          />

          <button
            type="submit"
            disabled={uploading}
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary px-4 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90 disabled:opacity-50"
          >
            {uploading ? (
              <>
                <Loader2 className="size-4 animate-spin" />
                Subiendo... {progress}%
              </>
            ) : (
              <>
                <Upload className="size-4" />
                Subir
              </>
            )}
          </button>
        </form>

        {uploading && (
          <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-muted">
            <div
              className="h-full bg-primary transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
        )}

        {error && (
          <p className="mt-4 text-sm text-destructive">{error}</p>
        )}

        {url && (
          <div className="mt-6 rounded-lg border border-border bg-muted/30 p-4">
            <p className="text-sm font-medium mb-2">Enlace listo:</p>
            <div className="flex items-center gap-2">
              <input
                readOnly
                value={url}
                className="flex-1 truncate rounded-md border border-border bg-background px-3 py-2 text-xs text-muted-foreground"
              />
              <button
                onClick={copyUrl}
                className="inline-flex items-center gap-1 rounded-md bg-primary px-3 py-2 text-xs font-medium text-primary-foreground hover:bg-primary/90"
              >
                {copied ? <Check className="size-3.5" /> : <Copy className="size-3.5" />}
                {copied ? 'Copiado' : 'Copiar'}
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
