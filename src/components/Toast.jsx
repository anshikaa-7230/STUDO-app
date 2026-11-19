import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center gap-3 bg-[#24243A] text-white px-4 py-3 rounded-2xl shadow-popover border border-white/10 animate-fade-in text-xs font-semibold">
      {isSuccess ? (
        <CheckCircle2 className="w-4 h-4 text-[#DDF3E7]" />
      ) : (
        <Info className="w-4 h-4 text-[#E9E1FF]" />
      )}
      <span>{toast.message}</span>
    </div>
  );
}
