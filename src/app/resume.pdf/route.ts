export async function GET() {
  const header = '%PDF-1.4\n'
  const streamContent = [
    'BT',
    '/F1 24 Tf',
    '72 720 Td',
    '(Rhenz Peligan) Tj',
    '/F1 14 Tf',
    '0 -36 Td',
    '(Software Developer | Cybersecurity Enthusiast) Tj',
    '0 -24 Td',
    '(Resume placeholder generated from the portfolio site.) Tj',
    '0 -24 Td',
    '(Replace this file with your full resume when ready.) Tj',
    'ET',
  ].join('\n')

  const objects = [
    '1 0 obj\n<< /Type /Catalog /Pages 2 0 R >>\nendobj\n',
    '2 0 obj\n<< /Type /Pages /Kids [3 0 R] /Count 1 >>\nendobj\n',
    '3 0 obj\n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>\nendobj\n',
    '4 0 obj\n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>\nendobj\n',
    `5 0 obj\n<< /Length ${streamContent.length} >>\nstream\n${streamContent}\nendstream\nendobj\n`,
  ]

  let offset = header.length
  const xrefOffsets = objects.map((object) => {
    const currentOffset = offset
    offset += object.length
    return currentOffset
  })

  const xrefOffset = offset
  const xref = [
    'xref\n',
    '0 6\n',
    '0000000000 65535 f \n',
    ...xrefOffsets.map((entryOffset) => `${String(entryOffset).padStart(10, '0')} 00000 n \n`),
    'trailer\n',
    '<< /Size 6 /Root 1 0 R >>\n',
    'startxref\n',
    `${xrefOffset}\n`,
    '%%EOF',
  ].join('')

  const pdf = `${header}${objects.join('')}${xref}`

  return new Response(pdf, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'attachment; filename="Rhenz-Peligan-Resume.pdf"',
    },
  });
}