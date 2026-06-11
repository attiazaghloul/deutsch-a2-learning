import pdfplumber
import sys, io

sys.stdout = io.TextIOWrapper(sys.stdout.buffer, encoding='utf-8')

# Extract grammar script
with pdfplumber.open(r"C:\Users\DELL\Downloads\New folder (9)\a2_skript_gr.pdf") as pdf:
    print(f"GRAMMAR SCRIPT PAGES: {len(pdf.pages)}")
    with open(r"C:\Users\DELL\Downloads\New folder (9)\grammar_text.txt", "w", encoding="utf-8") as f:
        for i, page in enumerate(pdf.pages):
            f.write(f"\n===== PAGE {i+1} =====\n")
            t = page.extract_text() or ""
            f.write(t)

# Extract textbook
with pdfplumber.open(r"C:\Users\DELL\Downloads\New folder (9)\netzwerk-neu A2.2.pdf") as pdf:
    print(f"NETZWERK PAGES: {len(pdf.pages)}")
    with open(r"C:\Users\DELL\Downloads\New folder (9)\netzwerk_text.txt", "w", encoding="utf-8") as f:
        for i, page in enumerate(pdf.pages):
            f.write(f"\n===== PAGE {i+1} =====\n")
            t = page.extract_text() or ""
            f.write(t)

print("DONE")
