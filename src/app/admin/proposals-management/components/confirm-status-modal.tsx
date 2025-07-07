'use client';

import { Button } from '@/components/ui/button';
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
} from '@/components/ui/dialog';

interface ConfirmStatusModalProps {
    open: boolean;
    onClose: () => void;
    onConfirm: () => void;
    statusLabel: string;
}

const ConfirmStatusModal: React.FC<ConfirmStatusModalProps> = ({ open, onClose, onConfirm, statusLabel }) => {
    return (
        <Dialog open={open} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-xl">
                <DialogHeader>
                    <DialogTitle className="text-lg">Confirm Status Change</DialogTitle>
                    <DialogDescription>
                        Are you sure you want to change the proposal status to <strong>{statusLabel}</strong>?
                    </DialogDescription>
                </DialogHeader>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose} className="cursor-pointer">
                        Cancel
                    </Button>
                    <Button
                        variant="default"
                        onClick={onConfirm}
                        className="bg-gradient-to-r  from-indigo-500 to-purple-600 text-white hover:from-indigo-600 hover:to-purple-700 transition-all cursor-pointer"
                    >
                        Yes, Change
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ConfirmStatusModal;
