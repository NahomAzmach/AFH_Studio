import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";

interface PreviewModalState {
  isOpen: boolean;
  url: string;
  templateName: string;
}

export default function PreviewModal() {
  const [modal, setModal] = useState<PreviewModalState>({
    isOpen: false,
    url: "",
    templateName: ""
  });
  const [viewMode, setViewMode] = useState<"desktop" | "mobile">("desktop");

  // Listen for preview events
  useEffect(() => {
    const handlePreview = (event: CustomEvent) => {
      const { url, templateName } = event.detail;
      setModal({ isOpen: true, url, templateName });
      setViewMode("desktop");
      document.body.style.overflow = "hidden";
    };

    document.addEventListener("openPreview", handlePreview as EventListener);
    
    return () => {
      document.removeEventListener("openPreview", handlePreview as EventListener);
    };
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && modal.isOpen) {
        closeModal();
      }
    };

    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [modal.isOpen]);

  const closeModal = () => {
    setModal({ isOpen: false, url: "", templateName: "" });
    document.body.style.overflow = "";
  };

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  if (!modal.isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
      onClick={handleBackdropClick}
      data-testid="preview-modal"
    >
      <div className="bg-card border border-border rounded-xl shadow-2xl w-full max-w-6xl max-h-[90vh] flex flex-col">
        <header className="flex items-center justify-between p-6 border-b border-border">
          <h2 className="text-xl font-semibold" data-testid="preview-modal-title">
            {modal.templateName}
          </h2>
          <div className="flex items-center space-x-4">
            <div className="flex bg-muted rounded-lg p-1">
              <Button
                variant={viewMode === "desktop" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("desktop")}
                className={viewMode === "desktop" ? "bg-primary text-primary-foreground" : ""}
                data-testid="preview-desktop-mode"
              >
                Desktop
              </Button>
              <Button
                variant={viewMode === "mobile" ? "default" : "ghost"}
                size="sm"
                onClick={() => setViewMode("mobile")}
                className={viewMode === "mobile" ? "bg-primary text-primary-foreground" : ""}
                data-testid="preview-mobile-mode"
              >
                Mobile
              </Button>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={closeModal}
              className="text-muted-foreground hover:text-foreground"
              data-testid="preview-modal-close"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>
        </header>
        <div className="flex-1 overflow-hidden p-6">
          <iframe
            src={modal.url}
            className={`preview-frame border border-border ${
              viewMode === "mobile" ? "mobile" : ""
            }`}
            title="Template preview"
            loading="lazy"
            data-testid="preview-iframe"
          />
        </div>
      </div>
    </div>
  );
}
