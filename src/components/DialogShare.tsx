"use client";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Share2Icon } from "lucide-react";
import {
  FacebookIcon,
  FacebookShareButton,
  TelegramIcon,
  TelegramShareButton,
  TwitterShareButton,
  TwitterIcon,
  WhatsappShareButton,
  WhatsappIcon,
} from "next-share";
import { FC } from "react";

interface DialogShareProps {
  url: string;
  title: string;
}

const DialogShare: FC<DialogShareProps> = ({ url, title }) => {
  return (
    <Dialog>
      <DialogTrigger>
        <Share2Icon />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-left text-lg font-semibold">
            Share this article
          </DialogTitle>
          <div className="flex items-center justify-center gap-2 py-4">
            <FacebookShareButton url={url} quote={title} hashtag={"#foodHub"}>
              <FacebookIcon size={32} round />
            </FacebookShareButton>
            <TelegramShareButton url={url} title={title}>
              <TelegramIcon size={32} round />
            </TelegramShareButton>
            <TwitterShareButton url={url} title={title}>
              <TwitterIcon size={32} round />
            </TwitterShareButton>
            <WhatsappShareButton url={url} title={title} separator=":: ">
              <WhatsappIcon size={32} round />
            </WhatsappShareButton>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DialogShare;