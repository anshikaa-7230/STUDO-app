import React from 'react';
import { useApp } from '../context/AppContext';
import { CheckCircle2, Info, X } from 'lucide-react';

export default function Toast() {
  const { toast } = useApp();

  if (!toast) return null;

  const isSuccess = toast.type === 'success';

  return (
    <div className="fixed bottom-20 md:bottom-6 right-6 z-50 flex items-center gap-3 glass-card text-white px-4 py-3 rounded-2xl shadow-glow-cyan border border-cyan-400/30 animate-fade-in text-xs font-semibold">
      {isSuccess ? (
        <CheckCircle2 className="w-4 h-4 text-emerald-400" />
      ) : (
        <Info className="w-4 h-4 text-cyan-400" />
      )}
      <span>{toast.message}</span>
    </div>
  );
}
