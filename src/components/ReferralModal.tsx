import React from "react";
import ReferralForm from "./ReferralForm";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "./ui/dialog";

interface ReferralModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ReferralModal: React.FC<ReferralModalProps> = ({ isOpen, onClose }) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold">Refer & Earn</DialogTitle>
          <DialogClose className="absolute right-4 top-4 rounded-sm opacity-70 hover:opacity-100">
            {/* <X className="h-4 w-4" /> */}
            <span className="sr-only">Close</span>
          </DialogClose>
          <ReferralForm/>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default ReferralModal;
