'use client';

import { useState } from 'react';

interface PDFEmbedProps {
  src: string;
  title?: string;
  height?: string;
}

export default function PDFEmbed({ src, title = 'PDF Document', height = '600px' }: PDFEmbedProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [showFallback, setShowFallback] = useState(false);

  return (
    <div className="my-8">
      {/* PDF Header */}
      <div className="flex items-center justify-between bg-gray-100 dark:bg-gray-800 px-4 py-3 rounded-t-lg border border-b-0 border-gray-300 dark:border-gray-600">
        <div className="flex items-center gap-2">
          <svg className="w-6 h-6 text-red-600" fill="currentColor" viewBox="0 0 24 24">
            <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20M10.92,12.31C10.68,11.54 10.15,9.08 11.55,9.04C12.95,9 12.03,12.16 12.03,12.16C12.42,13.65 14.05,14.72 14.05,14.72C14.55,14.57 17.4,14.24 17,15.72C16.57,17.2 13.5,15.81 13.5,15.81C11.55,15.95 10.09,16.47 10.09,16.47C8.96,18.58 7.64,19.5 7.1,18.61C6.43,17.5 9.23,16.07 9.23,16.07C10.68,13.72 10.92,12.31 10.92,12.31M11.57,13.15C11.17,14.45 10.37,15.84 10.37,15.84C11.22,15.5 13.08,15.11 13.08,15.11C11.94,14.11 11.59,13.16 11.57,13.15M14.71,15.32C14.71,15.32 16.46,15.97 16.5,15.71C16.57,15.44 15.17,15.2 14.71,15.32M9.05,16.81C8.28,17.11 7.54,18.39 7.72,18.39C7.9,18.4 8.63,17.79 9.05,16.81M11.57,11.26C11.57,11.21 12,9.58 11.57,9.53C11.27,9.5 11.56,11.22 11.57,11.26Z" />
          </svg>
          <span className="font-semibold text-gray-800 dark:text-gray-200">{title}</span>
        </div>
        <div className="flex items-center gap-2">
          <a
            href={src}
            download
            className="px-3 py-1.5 text-sm font-medium bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
            Download
          </a>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1.5 text-sm font-medium bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors flex items-center gap-1"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
            Open
          </a>
        </div>
      </div>

      {/* PDF Embed Container */}
      <div 
        className="border border-gray-300 dark:border-gray-600 rounded-b-lg overflow-hidden bg-gray-200 dark:bg-gray-700"
        style={{ height }}
      >
        {!showFallback ? (
          <>
            {!isLoaded && (
              <div className="flex items-center justify-center h-full">
                <div className="animate-spin rounded-full h-12 w-12 border-4 border-blue-600 border-t-transparent"></div>
              </div>
            )}
            <iframe
              src={`${src}#toolbar=1&navpanes=1&scrollbar=1`}
              className={`w-full h-full ${isLoaded ? 'block' : 'hidden'}`}
              title={title}
              onLoad={() => setIsLoaded(true)}
              onError={() => setShowFallback(true)}
            />
          </>
        ) : (
          <div className="flex flex-col items-center justify-center h-full p-8 text-center">
            <svg className="w-16 h-16 text-gray-400 mb-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z" />
            </svg>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Unable to display PDF in browser. Please download or open in a new tab.
            </p>
            <div className="flex gap-3">
              <a
                href={src}
                download
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
              >
                Download PDF
              </a>
              <a
                href={src}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-md transition-colors"
              >
                Open in New Tab
              </a>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Notice */}
      <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 text-center md:hidden">
        💡 For best viewing experience, download the PDF or open in full screen on desktop.
      </p>
    </div>
  );
}
