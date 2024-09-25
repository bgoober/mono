"use client";

import React, {
  useState,
  useRef,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { Document, Page } from "react-pdf";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";
import "react-pdf/dist/esm/Page/TextLayer.css";
import { Button } from "../ui/button";
import P from "../P";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Input } from "../ui/input";

interface PDFViewComponentProps {
  url: string;
}

// Memoized navigation button component
const NavButton = React.memo(
  ({
    direction,
    onClick,
    disabled,
  }: {
    direction: "left" | "right";
    onClick: () => void;
    disabled: boolean;
  }) => (
    <div
      className={`absolute ${direction}-0 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-40`}
    >
      <button
        onClick={onClick}
        disabled={disabled}
        className={`w-10 h-10 bg-zinc-400 hover:cursor-pointer hover:bg-zinc-500 ${
          disabled ? "opacity-50 hover:cursor-not-allowed" : ""
        }`}
      >
        {direction === "left" ? (
          <ChevronLeft className="w-4 h-4 ml-2 text-white" />
        ) : (
          <ChevronRight className="w-4 h-4 ml-2 text-white" />
        )}
      </button>
    </div>
  ),
);

NavButton.displayName = "NavButton";

export default function PDFViewComponent({ url }: PDFViewComponentProps) {
  // State for PDF navigation
  const [numPages, setNumPages] = useState<number | null>(null);
  const [pageNumber, setPageNumber] = useState(1);
  const [inputPageNumber, setInputPageNumber] = useState("1");

  // State for zooming and panning
  const [scale, setScale] = useState(1.0);
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState<{ x: number; y: number } | null>(
    null,
  );
  const [dragOffset, setDragOffset] = useState<{ x: number; y: number }>({
    x: 0,
    y: 0,
  });

  // Refs for maintaining initial values
  const containerRef = useRef<HTMLDivElement>(null);
  const [pageWidth, setPageWidth] = useState<number | null>(null);
  const initialScale = useRef(1.0);
  const initialOffset = useRef({ x: 0, y: 0 });

  // Callback for when the PDF document is successfully loaded
  const onDocumentLoadSuccess = useCallback(
    ({ numPages }: { numPages: number }) => {
      setNumPages(numPages);
    },
    [],
  );

  // Function to change the current page
  const changePage = useCallback(
    (newPageNumber: number) => {
      const validatedPageNumber = Math.min(
        Math.max(1, newPageNumber),
        numPages || 1,
      );
      setPageNumber(validatedPageNumber);
      setInputPageNumber(validatedPageNumber.toString());
    },
    [numPages],
  );

  // Handlers for the page input field
  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setInputPageNumber(e.target.value);
    },
    [],
  );

  const handleInputBlur = useCallback(() => {
    const newPageNumber = parseInt(inputPageNumber, 10);
    if (!isNaN(newPageNumber)) {
      changePage(newPageNumber);
    } else {
      setInputPageNumber(pageNumber.toString());
    }
  }, [inputPageNumber, changePage, pageNumber]);

  const handleInputKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        changePage(pageNumber - 1);
      } else if (e.key === "ArrowRight") {
        e.preventDefault();
        changePage(pageNumber + 1);
      } else if (e.key === "Enter") {
        handleInputBlur();
      }
    },
    [changePage, pageNumber, handleInputBlur],
  );

  // Page navigation functions
  const previousPage = useCallback(
    () => changePage(pageNumber - 1),
    [changePage, pageNumber],
  );
  const nextPage = useCallback(
    () => changePage(pageNumber + 1),
    [changePage, pageNumber],
  );

  // Zoom functions
  const zoomIn = useCallback(() => {
    setScale((prevScale) => Math.min(prevScale + 0.2, 2.0));
  }, []);

  const zoomOut = useCallback(() => {
    setScale(initialScale.current);
    setDragOffset(initialOffset.current);
  }, []);

  // Handlers for dragging (panning) the PDF
  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (isDragging && dragStart) {
        const dx = e.clientX - dragStart.x;
        const dy = e.clientY - dragStart.y;
        setDragOffset((prevOffset) => ({
          x: prevOffset.x + dx,
          y: prevOffset.y + dy,
        }));
        setDragStart({ x: e.clientX, y: e.clientY });
      }
    },
    [isDragging, dragStart],
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setDragStart(null);
  }, []);

  // Effect to handle window resizing
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        setPageWidth(containerRef.current.clientWidth);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Memoized options for the PDF viewer
  const options = useMemo(
    () => ({
      cMapUrl: "/cmaps/",
      standardFontDataUrl: "/standard_fonts/",
    }),
    [],
  );

  return (
    <div className="relative flex flex-col items-center w-full h-full">
      <div className="group relative w-full h-full" ref={containerRef}>
        {/* Page navigation controls */}
        <div className="flex items-center justify-start md:justify-center mt-2 ">
          <P className="text-xs text-white mr-2">Page</P>
          <Input
            type="text"
            value={inputPageNumber}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            onKeyDown={handleInputKeyDown}
            className="w-10 text-center text-white bg-transparent border-white mr-2"
          />
          <P className="text-xs text-white mr-2"> of {numPages}</P>
        </div>
        {/* Previous and Next page buttons */}
        <NavButton
          direction="left"
          onClick={previousPage}
          disabled={pageNumber <= 1}
        />
        <NavButton
          direction="right"
          onClick={nextPage}
          disabled={pageNumber >= (numPages || 1)}
        />
        {/* Zoom controls */}
        <div className="absolute top-0 right-0 m-4 flex space-x-2">
          <Button
            onClick={zoomOut}
            variant="ghost"
            size="sm"
            type="button"
            className="text-zinc-300"
          >
            Reset
          </Button>
          <Button
            onClick={zoomIn}
            variant="ghost"
            size="sm"
            type="button"
            className="text-zinc-300"
          >
            Zoom In
          </Button>
        </div>
        {/* PDF viewer container */}
        <div
          className="mt-4 w-full h-full flex justify-center items-center overflow-hidden"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          style={{ cursor: isDragging ? "grabbing" : "grab" }}
        >
          {/* PDF content with zoom and pan transforms */}
          <div
            className="relative"
            style={{
              transform: `scale(${scale}) translate(${dragOffset.x}px, ${dragOffset.y}px)`,
              transformOrigin: "center",
            }}
          >
            {/* React-PDF Document component */}
            <Document
              file={url}
              onLoadSuccess={onDocumentLoadSuccess}
              options={options}
              className="w-full h-full"
              onItemClick={({ pageNumber }) => changePage(pageNumber)}
            >
              {/* This is where pre-rendering happens avoid flickering */}
              {Array.from(new Array(numPages), (el, index) => (
                <Page
                  key={`page_${index + 1}`}
                  pageNumber={index + 1}
                  renderAnnotationLayer={false}
                  renderTextLayer={false}
                  width={pageWidth || undefined}
                  className={index + 1 === pageNumber ? "" : "hidden"}
                />
              ))}
            </Document>
          </div>
        </div>
      </div>
    </div>
  );
}
