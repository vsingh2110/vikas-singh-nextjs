'use client';

import { useState } from 'react';

interface EmailTemplateCopyButtonProps {
  position?: 'top' | 'bottom';
}

export default function EmailTemplateCopyButton({ position = 'top' }: EmailTemplateCopyButtonProps) {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(false);

  const handleCopy = async () => {
    try {
      const iframe = document.getElementById('email-template-iframe') as HTMLIFrameElement;
      if (iframe && iframe.contentDocument) {
        const iframeDoc = iframe.contentDocument;
        const htmlContent = iframeDoc.body.innerHTML;
        
        // Method 1: Modern Clipboard API with HTML support (best for rich content)
        if (navigator.clipboard && typeof ClipboardItem !== 'undefined') {
          try {
            const htmlBlob = new Blob([htmlContent], { type: 'text/html' });
            const textBlob = new Blob([iframeDoc.body.innerText], { type: 'text/plain' });
            const clipboardItem = new ClipboardItem({
              'text/html': htmlBlob,
              'text/plain': textBlob
            });
            await navigator.clipboard.write([clipboardItem]);
            setCopied(true);
            setError(false);
            setTimeout(() => setCopied(false), 4000);
            return;
          } catch (clipboardError) {
            console.log('ClipboardItem method failed, trying fallback...');
          }
        }
        
        // Method 2: Selection-based copy with execCommand (fallback for older browsers)
        const range = document.createRange();
        range.selectNodeContents(iframeDoc.body);
        const selection = window.getSelection();
        if (selection) {
          selection.removeAllRanges();
          selection.addRange(range);
          const success = document.execCommand('copy');
          selection.removeAllRanges();
          if (success) {
            setCopied(true);
            setError(false);
            setTimeout(() => setCopied(false), 4000);
            return;
          }
        }
        
        // Method 3: If both methods fail, try copying just the outer HTML
        try {
          await navigator.clipboard.writeText(htmlContent);
          setCopied(true);
          setError(false);
          setTimeout(() => setCopied(false), 4000);
          return;
        } catch (textError) {
          throw new Error('All copy methods failed');
        }
      } else {
        throw new Error('Cannot access iframe content');
      }
    } catch (err) {
      console.error('Copy failed:', err);
      setError(true);
      setCopied(false);
      setTimeout(() => setError(false), 5000);
    }
  };

  return (
    <div className="flex flex-col items-center my-4 gap-2">
      <button
        onClick={handleCopy}
        className="px-6 py-3 text-lg font-bold rounded-lg shadow-lg transition-all duration-300 hover:scale-105 active:scale-95 flex items-center gap-2"
        style={{
          backgroundColor: copied ? '#059669' : error ? '#dc2626' : '#2563eb',
          color: '#ffffff',
          border: 'none',
          cursor: 'pointer'
        }}
      >
        {copied ? (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Copied Successfully! Paste in Gmail
          </>
        ) : error ? (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            Copy Failed - Try Manual Selection
          </>
        ) : (
          <>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
            </svg>
            📋 Copy Email Template to Clipboard
          </>
        )}
      </button>
      {error && (
        <p className="text-sm text-red-600 dark:text-red-400">
          Please select the content manually using your mouse, then press Ctrl+C to copy.
        </p>
      )}
    </div>
  );
}
