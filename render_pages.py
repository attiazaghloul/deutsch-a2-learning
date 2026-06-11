import pypdfium2 as pdfium
import sys, os

pdf_path = r"C:\Users\DELL\Downloads\New folder (9)\netzwerk-neu A2.2.pdf"
out_dir = r"C:\Users\DELL\Downloads\New folder (9)\pages"
os.makedirs(out_dir, exist_ok=True)

pages = [int(x) for x in sys.argv[1:]]
pdf = pdfium.PdfDocument(pdf_path)
for p in pages:
    page = pdf[p-1]
    bitmap = page.render(scale=2.0)
    img = bitmap.to_pil()
    img.save(os.path.join(out_dir, f"p{p:03d}.png"))
    print(f"saved p{p:03d}.png")
