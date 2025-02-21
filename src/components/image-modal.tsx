"use client";

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";

interface ImageModalProps {
  src: string;
  alt: string;
  isOpen: boolean;
  onClose: () => void;
}

export function ImageModal({ src, alt, isOpen, onClose }: ImageModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[90vw] p-0 bg-transparent border-0">
        <DialogTitle className="sr-only">Image Preview</DialogTitle>
        <Button
          variant="ghost"
          size="icon"
          className="absolute right-2 top-2 z-50 rounded-full bg-background/80 text-foreground hover:bg-background/90"
          onClick={onClose}
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button>
        <div className="relative w-full max-h-[90vh] aspect-[4/3]">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain rounded-lg"
            sizes="90vw"
            priority
          />
        </div>
      </DialogContent>
    </Dialog>
  );
}
