import React, { useState } from 'react';
import {
  FileText,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  ZoomOut,
  RotateCcw,
  CheckCircle2,
  XCircle,
  HelpCircle,
  Play,
  Clock,
  Sparkles,
  BookOpen,
  Award
} from 'lucide-react';

export default function ResourcePreview({ resource }) {
  // PDF state
  const [currentPage, setCurrentPage] = useState(0);
  const [zoomLevel, setZoomLevel] = useState(100);

  // Practice Quiz state
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [submittedQuestions, setSubmittedQuestions] = useState({});

  // Sample Paper section state
  const [activePaperSection, setActivePaperSection] = useState(0);
  const [revealedSolutions, setRevealedSolutions] = useState({});

  // 1. PDF / NOTES PREVIEW
  if (resource.previewType === 'pdf' && resource.pdfPages && resource.pdfPages.length > 0) {
    const totalPages = resource.pdfPages.length;
    const pageData = resource.pdfPages[currentPage] || resource.pdfPages[0];

    return (
      <div className="bg-[#1E1E2E] rounded-3xl overflow-hidden border border-[#303048] shadow-card">
        {/* PDF Viewer Top Bar */}
        <div className="flex items-center justify-between px-4 sm:px-6 py-3 bg-[#181825] border-b border-[#303048] text-slate-300 text-xs">
          <div className="flex items-center gap-2">
            <FileText className="w-4 h-4 text-[#E9E1FF]" />
            <span className="font-semibold text-white truncate max-w-[200px] sm:max-w-xs">
              {resource.title}
            </span>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1 bg-[#252538] px-2 py-1 rounded-xl">
              <button
                onClick={() => setCurrentPage((p) => Math.max(0, p - 1))}
                disabled={currentPage === 0}
                aria-label="Previous page"
                className="p-1 hover:text-white disabled:opacity-30 disabled:hover:text-inherit"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="px-2 font-mono text-[11px] text-white">
                {currentPage + 1} / {totalPages}
              </span>
              <button
                onClick={() => setCurrentPage((p) => Math.min(totalPages - 1, p + 1))}
                disabled={currentPage === totalPages - 1}
                aria-label="Next page"
                className="p-1 hover:text-white disabled:opacity-30 disabled:hover:text-inherit"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            {/* Zoom Controls */}
            <div className="hidden sm:flex items-center gap-1 bg-[#252538] px-2 py-1 rounded-xl">
              <button
                onClick={() => setZoomLevel((z) => Math.max(80, z - 10))}
                title="Zoom Out"
                className="p-1 hover:text-white"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <span className="font-mono text-[11px] text-white px-1">{zoomLevel}%</span>
              <button
                onClick={() => setZoomLevel((z) => Math.min(140, z + 10))}
                title="Zoom In"
                className="p-1 hover:text-white"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={() => setZoomLevel(100)}
                title="Reset Zoom"
                className="p-1 hover:text-white ml-1"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>
        </div>

        {/* PDF Simulated Page Canvas */}
        <div className="p-4 sm:p-8 bg-[#181825]/60 min-h-[420px] flex items-center justify-center overflow-auto">
          <div
            className="w-full max-w-3xl bg-white text-[#24243A] rounded-2xl p-6 sm:p-10 shadow-2xl transition-all duration-200"
            style={{ transform: `scale(${zoomLevel / 100})`, transformOrigin: 'top center' }}
          >
            {/* Document Header in Canvas */}
            <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-[#E9E1FF]">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-[#24243A] text-[#E9E1FF] font-extrabold text-xs flex items-center justify-center">
                  S
                </div>
                <span className="text-xs font-extrabold tracking-wider text-[#24243A]">
                  STUDO ACADEMIC VAULT
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#6941C6] bg-[#E9E1FF] px-2.5 py-0.5 rounded-full">
                Page {pageData.pageNumber} of {totalPages}
              </span>
            </div>

            <h3 className="text-xl font-bold text-[#24243A] mb-4">
              {pageData.title}
            </h3>

            {/* Document Text Content with proper monospace/markdown style formatting */}
            <div className="text-xs sm:text-sm text-[#38384E] leading-relaxed whitespace-pre-wrap font-sans bg-[#FAFAFC] p-5 sm:p-6 rounded-xl border border-[#E8E8EE]">
              {pageData.content}
            </div>

            {/* Document Footer in Canvas */}
            <div className="mt-8 pt-4 border-t border-[#E8E8EE] flex items-center justify-between text-[10px] text-[#737386]">
              <span>Verified for {resource.board} • {resource.classLevel} {resource.subject}</span>
              <span>STUDO — Think. Discover. Achieve.</span>
            </div>
          </div>
        </div>

        {/* Bottom Page Thumbnails */}
        <div className="px-6 py-3 bg-[#181825] border-t border-[#303048] flex items-center justify-center gap-2">
          {resource.pdfPages.map((page, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className={`px-3 py-1 rounded-lg text-xs font-bold transition-all ${
                currentPage === idx
                  ? 'bg-[#E9E1FF] text-[#4919A4]'
                  : 'bg-[#252538] text-slate-400 hover:text-white'
              }`}
            >
              Page {idx + 1}
            </button>
          ))}
        </div>
      </div>
    );
  }

  // 2. VIDEO LECTURE PREVIEW
  if (resource.previewType === 'video') {
    return (
      <div className="space-y-6">
        <div className="relative rounded-3xl overflow-hidden bg-black shadow-card aspect-video border border-[#303048]">
          <iframe
            src={resource.videoUrl || 'https://www.youtube.com/embed/o_6f_0C0pPQ'}
            title={resource.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>

        {/* Video Chapters / Timestamps */}
        {resource.videoNotes && resource.videoNotes.length > 0 && (
          <div className="bg-white rounded-2xl border border-[#E8E8EE] p-5 shadow-subtle">
            <div className="flex items-center gap-2 mb-3">
              <Clock className="w-4 h-4 text-[#6941C6]" />
              <h3 className="text-sm font-bold text-[#24243A]">Lecture Timeline & Key Topics</h3>
            </div>

            <div className="space-y-2">
              {resource.videoNotes.map((note, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-xl bg-[#FAFAFC] border border-[#E8E8EE] flex flex-col sm:flex-row sm:items-start justify-between gap-2"
                >
                  <div>
                    <span className="text-xs font-bold text-[#24243A]">{note.title}</span>
                    <p className="text-xs text-[#737386] mt-0.5">{note.summary}</p>
                  </div>
                  <span className="font-mono text-[11px] font-bold text-[#025482] bg-[#DCEEFF] px-2.5 py-1 rounded-md self-start sm:self-auto shrink-0">
                    {note.timestamp}
                  </span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
  }

  // 3. PRACTICE QUESTIONS PREVIEW
  if (resource.previewType === 'practice' && resource.questions) {
    const handleSelectChoice = (questionId, optionIndex) => {
      setSelectedAnswers((prev) => ({
        ...prev,
        [questionId]: optionIndex
      }));
    };

    const handleCheckAnswer = (questionId) => {
      setSubmittedQuestions((prev) => ({
        ...prev,
        [questionId]: true
      }));
    };

    const correctCount = Object.keys(submittedQuestions).filter((qId) => {
      const q = resource.questions.find((item) => item.id === qId);
      return q && selectedAnswers[qId] === q.correctIndex;
    }).length;

    return (
      <div className="space-y-6">
        {/* Practice Header & Score Tracker */}
        <div className="bg-white rounded-2xl border border-[#E8E8EE] p-5 shadow-subtle flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#FFF0C9] text-[#8F4B00] flex items-center justify-center font-bold">
              <Award className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-sm font-bold text-[#24243A]">Interactive Practice Mode</h3>
              <p className="text-xs text-[#737386]">
                Test your knowledge with immediate feedback & step-by-step solutions
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-[#FAFAFC] px-4 py-2 rounded-xl border border-[#E8E8EE]">
            <span className="text-xs text-[#737386] font-semibold">Your Score:</span>
            <span className="text-sm font-extrabold text-[#24243A]">
              {correctCount} / {resource.questions.length} Correct
            </span>
          </div>
        </div>

        {/* Questions List */}
        <div className="space-y-5">
          {resource.questions.map((q, idx) => {
            const isSubmitted = submittedQuestions[q.id];
            const chosenOption = selectedAnswers[q.id];
            const isCorrect = chosenOption === q.correctIndex;

            return (
              <div
                key={q.id}
                className="bg-white rounded-2xl border border-[#E8E8EE] p-5 sm:p-6 shadow-subtle space-y-4"
              >
                <div className="flex items-start gap-3">
                  <span className="w-6 h-6 rounded-lg bg-[#24243A] text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                    {idx + 1}
                  </span>
                  <p className="text-sm font-bold text-[#24243A] leading-relaxed">
                    {q.prompt}
                  </p>
                </div>

                {/* Options */}
                <div className="space-y-2 pl-9">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = chosenOption === optIdx;
                    let optionStyle =
                      'bg-[#FAFAFC] border-[#E8E8EE] text-[#24243A] hover:border-[#D0BFFF]';

                    if (isSubmitted) {
                      if (optIdx === q.correctIndex) {
                        optionStyle = 'bg-[#DDF3E7] border-[#B2E5C9] text-[#05603A] font-bold';
                      } else if (isSelected && !isCorrect) {
                        optionStyle = 'bg-[#FFE6DC] border-[#FFCDBC] text-[#93370D] line-through';
                      }
                    } else if (isSelected) {
                      optionStyle = 'bg-[#E9E1FF] border-[#6941C6] text-[#4919A4] font-bold';
                    }

                    return (
                      <button
                        key={optIdx}
                        type="button"
                        onClick={() => !isSubmitted && handleSelectChoice(q.id, optIdx)}
                        disabled={isSubmitted}
                        className={`w-full text-left p-3 rounded-xl border text-xs sm:text-sm transition-all flex items-center justify-between ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {isSubmitted && optIdx === q.correctIndex && (
                          <CheckCircle2 className="w-4 h-4 text-[#05603A] shrink-0" />
                        )}
                        {isSubmitted && isSelected && !isCorrect && (
                          <XCircle className="w-4 h-4 text-[#93370D] shrink-0" />
                        )}
                      </button>
                    );
                  })}
                </div>

                {/* Action & Explanation */}
                <div className="pl-9 pt-2">
                  {!isSubmitted ? (
                    <button
                      type="button"
                      onClick={() => handleCheckAnswer(q.id)}
                      disabled={chosenOption === undefined}
                      className="px-4 py-2 bg-[#24243A] text-white rounded-xl text-xs font-bold disabled:opacity-40 hover:bg-black transition-colors"
                    >
                      Check Answer
                    </button>
                  ) : (
                    <div className="p-4 rounded-xl bg-[#FAFAFC] border border-[#E8E8EE] space-y-2 animate-fade-in">
                      <div className="flex items-center gap-2">
                        {isCorrect ? (
                          <span className="text-xs font-bold text-[#05603A] flex items-center gap-1">
                            <CheckCircle2 className="w-4 h-4" /> Correct Answer!
                          </span>
                        ) : (
                          <span className="text-xs font-bold text-[#93370D] flex items-center gap-1">
                            <XCircle className="w-4 h-4" /> Not quite right.
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-[#38384E] whitespace-pre-wrap leading-relaxed">
                        <strong className="text-[#24243A]">Explanation: </strong>
                        {q.explanation}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // 4. SAMPLE PAPERS & PREVIOUS-YEAR EXAMS PREVIEW
  if (resource.previewType === 'paper' && resource.paperSections) {
    const activeSection = resource.paperSections[activePaperSection] || resource.paperSections[0];

    const toggleSolution = (qNum) => {
      setRevealedSolutions((prev) => ({
        ...prev,
        [qNum]: !prev[qNum]
      }));
    };

    return (
      <div className="bg-white rounded-3xl border border-[#E8E8EE] p-6 sm:p-8 shadow-card space-y-6">
        <div className="border-b border-[#E8E8EE] pb-4">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-[#6941C6] bg-[#E9E1FF] px-2.5 py-1 rounded-lg">
              Official Examination Pattern
            </span>
            <span className="text-xs font-bold text-[#737386]">
              {resource.pagesCount}
            </span>
          </div>
          <h3 className="text-lg font-bold text-[#24243A] mt-2">
            CBSE Examination Paper Preview & Marking Guidelines
          </h3>
        </div>

        {/* Section Tabs */}
        <div className="flex gap-2 overflow-x-auto pb-2">
          {resource.paperSections.map((sec, idx) => (
            <button
              key={idx}
              onClick={() => setActivePaperSection(idx)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all shrink-0 ${
                activePaperSection === idx
                  ? 'bg-[#24243A] text-white shadow-subtle'
                  : 'bg-[#FAFAFC] text-[#737386] border border-[#E8E8EE] hover:border-[#D0BFFF]'
              }`}
            >
              {sec.sectionName.split('(')[0]}
            </button>
          ))}
        </div>

        {/* Section Details */}
        <div className="bg-[#FAFAFC] p-4 rounded-2xl border border-[#E8E8EE]">
          <h4 className="text-sm font-bold text-[#24243A]">{activeSection.sectionName}</h4>
          <p className="text-xs text-[#737386] mt-0.5">{activeSection.description}</p>
        </div>

        {/* Sample Questions with Solved Breakdown */}
        <div className="space-y-4">
          {activeSection.sampleQuestions.map((q) => {
            const isRevealed = revealedSolutions[q.qNum];
            return (
              <div
                key={q.qNum}
                className="p-5 rounded-2xl border border-[#E8E8EE] bg-white space-y-3"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-start gap-2.5">
                    <span className="text-xs font-bold text-[#4919A4] bg-[#E9E1FF] px-2 py-0.5 rounded-md mt-0.5">
                      {q.qNum}
                    </span>
                    <p className="text-sm font-bold text-[#24243A] leading-relaxed">
                      {q.text}
                    </p>
                  </div>
                </div>

                {q.options && (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pl-8 pt-1">
                    {q.options.map((opt, i) => (
                      <div
                        key={i}
                        className="p-2.5 rounded-xl bg-[#FAFAFC] border border-[#E8E8EE] text-xs font-medium text-[#24243A]"
                      >
                        {opt}
                      </div>
                    ))}
                  </div>
                )}

                <div className="pl-8 pt-2">
                  <button
                    onClick={() => toggleSolution(q.qNum)}
                    className="text-xs font-bold text-[#6941C6] hover:underline flex items-center gap-1"
                  >
                    <span>{isRevealed ? 'Hide Solution & Marking Scheme' : 'Reveal Solution & Marking Scheme'}</span>
                  </button>

                  {isRevealed && (
                    <div className="mt-3 p-4 rounded-xl bg-[#DDF3E7]/40 border border-[#B2E5C9] text-xs text-[#05603A] space-y-1 animate-fade-in">
                      <p className="font-bold">Correct Answer / Guideline: {q.answer}</p>
                      <p className="whitespace-pre-wrap">{q.explanation}</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }

  // Fallback generic clean text preview
  return (
    <div className="p-8 bg-white rounded-3xl border border-[#E8E8EE] text-center">
      <FileText className="w-12 h-12 text-[#4919A4] mx-auto mb-3" />
      <h3 className="text-base font-bold text-[#24243A]">Document Ready for Access</h3>
      <p className="text-xs text-[#737386] mt-1 max-w-sm mx-auto">
        Click Open Resource or Download PDF below to access the complete verified file.
      </p>
    </div>
  );
}
