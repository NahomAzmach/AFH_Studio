import { useEffect, useState } from "react";
import { X, Smartphone, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PreviewModal() {
  const [open, setOpen] = useState(false);
  const [url, setUrl] = useState("");
  const [templateName, setTemplateName] = useState("");
  const [mode, setMode] = useState<"desktop" | "mobile">("desktop");

  useEffect(() => {
    const handler = (e: Event) => {
      const detail = (e as CustomEvent<{ url: string; templateName: string }>).detail;
      setUrl(detail.url);
      setTemplateName(detail.templateName);
      setMode("desktop");
      setOpen(true);
    };
    document.addEventListener("openPreview", handler);
    return () => document.removeEventListener("openPreview", handler);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
  }, [open]);

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[200] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) setOpen(false);
      }}
      data-testid="preview-modal"
    >
      <div className="flex h-[85vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-background shadow-2xl">
        <header className="flex items-center justify-between border-b border-border px-4 py-3">
          <h2 className="font-semibold">{templateName} — Live Preview</h2>
          <div className="flex items-center gap-2">
            <Button
              variant={mode === "desktop" ? "default" : "outline"}
              size="icon"
              onClick={() => setMode("desktop")}
              aria-label="Desktop view"
            >
              <Monitor className="h-4 w-4" />
            </Button>
            <Button
              variant={mode === "mobile" ? "default" : "outline"}
              size="icon"
              onClick={() => setMode("mobile")}
              aria-label="Mobile view"
            >
              <Smartphone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)} aria-label="Close preview">
              <X className="h-5 w-5" />
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-auto bg-muted/40 p-4">
          <iframe
            title="Template preview"
            src={url}
            loading="lazy"
            className={
              mode === "mobile"
                ? "mx-auto h-full w-[390px] rounded-xl border border-border bg-background"
                : "h-full w-full rounded-xl border border-border bg-background"
            }
          />
        </div>
      </div>
    </div>
  );
}
