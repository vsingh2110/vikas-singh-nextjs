'use client';

import { useState } from 'react';

interface EmailTemplateCopyButtonProps {
  position?: 'top' | 'bottom';
}

export default function EmailTemplateCopyButton({ position = 'top' }: EmailTemplateCopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    const iframe = document.getElementById('email-template-iframe') as HTMLIFrameElement;
    if (iframe && iframe.contentDocument) {
      const iframeDoc = iframe.contentDocument;
      const range = document.createRange();
      range.selectNodeContents(iframeDoc.body);
      const selection = window.getSelection();
      if (selection) {
        selection.removeAllRanges();
        selection.addRange(range);
        document.execCommand('copy');
        selection.removeAllRanges();
        setCopied(true);
        setTimeout(() => setCopied(false), 3000);
      }
    } else {
      alert('Please try selecting the content manually inside the template preview.');
    }
  };

  return (
    <div className="flex justify-center my-4">
      <button
        onClick={handleCopy}
        className="px-6 py-3 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95"
        style={{
          backgroundColor: copied ? '#059669' : '#22c55e',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {copied ? '✅ Copied! Paste in Gmail' : '📋 Copy Email Template (Click Here)'}
      </button>
    </div>
  );
}
