import React, { useState } from 'react';
import { useApp } from '../context/AppContext';
import { SUBJECT_CONFIG } from '../data/resources';
import ResourcePreview from './ResourcePreview';
import {
  ArrowLeft,
  Bookmark,
  Download,
  ExternalLink,
  Share2,
  CheckCircle2,
  Clock,
  BookOpen,
  Calendar,
  Layers,
  ArrowUpRight,
  FileText,
  Sparkles
} from 'lucide-react';

export default function ResourceDetails() {
  const {
    activeResource,
    resources,
    navigateTo,
    openResource,
    savedResourceIds,
    toggleSaveResource,
    showToast
  } = useApp();

  const isSaved = savedResourceIds.includes(activeResource.id);
  const subjectConfig = SUBJECT_CONFIG[activeResource.subject] || {
    bg: '#FAFAFC',
    text: '#24243A',
    border: '#E8E8EE'
  };

  // Find related resources: same subject or same class, excluding current
  const relatedResources = resources
    .filter((r) => r.id !== activeResource.id && (r.subject === activeResource.subject || r.classLevel === activeResource.classLevel))
    .slice(0, 3);

  // Handle real download
  const handleDownload = () => {
    let content = `STUDO ACADEMIC RESOURCE\n\nTitle: ${activeResource.title}\nSubject: ${activeResource.subject}\nChapter: ${activeResource.chapter}\nClass: ${activeResource.classLevel} (${activeResource.board})\nFormat: ${activeResource.resourceType}\n\n`;

    if (activeResource.whatItCovers) {
      content += `WHAT THIS COVERS:\n${activeResource.whatItCovers.map((c, i) => `${i + 1}. ${c}`).join('\n')}\n\n`;
    }

    if (activeResource.pdfPages) {
      content += `FULL STUDY CONTENT:\n\n`;
      activeResource.pdfPages.forEach((p) => {
        content += `--- ${p.title} ---\n${p.content}\n\n`;
      });
    } else {
      content += `DESCRIPTION:\n${activeResource.fullDescription}\n`;
    }

    const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `${activeResource.title.replace(/[^a-zA-Z0-9]/g, '_')}_STUDO.txt`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);

    showToast(`Downloading: ${activeResource.title}`, 'success');
  };

  // Handle Open in Clean Reading Window
  const handleOpenFullscreen = () => {
    const printWindow = window.open('', '_blank');
    if (printWindow) {
      printWindow.document.write(`
        <html>
          <head>
            <title>${activeResource.title} - STUDO Vault</title>
            <style>
              body { font-family: system-ui, -apple-system, sans-serif; padding: 40px; max-width: 800px; margin: auto; color: #24243A; line-height: 1.6; }
              h1 { color: #4919A4; border-bottom: 2px solid #E9E1FF; padding-bottom: 12px; }
              .meta { color: #737386; font-size: 14px; margin-bottom: 24px; }
              .card { background: #FAFAFC; padding: 20px; border-radius: 12px; border: 1px solid #E8E8EE; margin-bottom: 20px; }
            </style>
          </head>
          <body>
            <h1>${activeResource.title}</h1>
            <div class="meta">
              <strong>${activeResource.subject}</strong> • ${activeResource.classLevel} • ${activeResource.board} • ${activeResource.resourceType}
            </div>
            <div class="card">
              <h3>Description</h3>
              <p>${activeResource.fullDescription}</p>
            </div>
            ${
              activeResource.pdfPages
                ? activeResource.pdfPages
                    .map(
                      (p) => `
              <div class="card">
                <h3>${p.title}</h3>
                <pre style="white-space: pre-wrap; font-family: inherit;">${p.content}</pre>
              </div>`
                    )
                    .join('')
                : ''
            }
          </body>
        </html>
      `);
      printWindow.document.close();
      showToast('Opened reader window', 'info');
    }
  };

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      showToast('Resource link copied to clipboard!', 'success');
    } else {
      showToast('Share link ready', 'info');
    }
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10 animate-fade-in">
      {/* Top Bar: Back Button & Actions */}
      <div className="flex flex-wrap items-center justify-between gap-4">
        <button
          onClick={() => navigateTo('explore')}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white border border-[#E8E8EE] text-xs font-bold text-[#24243A] hover:bg-slate-50 transition-colors shadow-subtle group"
        >
          <ArrowLeft className="w-4 h-4 text-[#737386] group-hover:-translate-x-0.5 transition-transform" />
          <span>Back to Explore</span>
        </button>

        <div className="flex items-center gap-2.5">
          <button
            onClick={handleShare}
            aria-label="Share resource"
            className="p-2.5 rounded-xl bg-white border border-[#E8E8EE] text-[#737386] hover:text-[#24243A] hover:bg-slate-50 transition-colors shadow-subtle"
            title="Share Link"
          >
            <Share2 className="w-4 h-4" />
          </button>

          <button
            onClick={(e) => toggleSaveResource(activeResource.id, e)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold border transition-all shadow-subtle ${
              isSaved
                ? 'bg-[#E9E1FF] text-[#4919A4] border-[#D0BFFF]'
                : 'bg-white text-[#24243A] border-[#E8E8EE] hover:bg-slate-50'
            }`}
          >
            <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#4919A4]' : ''}`} />
            <span>{isSaved ? 'Saved in My Resources' : 'Save Resource'}</span>
          </button>
        </div>
      </div>

      {/* A. Resource Header */}
      <div className="bg-white rounded-3xl border border-[#E8E8EE] p-6 sm:p-8 shadow-card space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <span
            className="text-xs font-bold px-3 py-1 rounded-lg"
            style={{ backgroundColor: subjectConfig.bg, color: subjectConfig.text }}
          >
            {activeResource.subject}
          </span>
          <span className="text-xs font-semibold text-[#24243A] bg-slate-100 px-3 py-1 rounded-lg">
            {activeResource.classLevel}
          </span>
          <span className="text-xs font-semibold text-[#737386] bg-slate-100 px-3 py-1 rounded-lg">
            {activeResource.board}
          </span>
          <span className="text-xs font-bold text-[#6941C6] bg-[#E9E1FF] px-3 py-1 rounded-lg">
            {activeResource.resourceType}
          </span>
          <span className="text-xs font-semibold text-[#05603A] bg-[#DDF3E7] px-3 py-1 rounded-lg">
            {activeResource.difficulty}
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#24243A] tracking-tight leading-snug">
          {activeResource.title}
        </h1>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#737386] pt-1 border-t border-[#F1F1F4]">
          <span className="font-semibold text-[#24243A]">Chapter: {activeResource.chapter}</span>
          <span>•</span>
          <span className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            {activeResource.estimatedTime}
          </span>
          <span>•</span>
          <span>{activeResource.pagesCount}</span>
          <span>•</span>
          <span>Curated by {activeResource.author}</span>
        </div>
      </div>

      {/* D. Main Action Buttons Row */}
      <div className="flex flex-wrap items-center gap-3">
        <button
          onClick={handleOpenFullscreen}
          className="flex-1 min-w-[200px] inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#24243A] text-white rounded-2xl text-sm font-bold shadow-subtle hover:bg-black transition-all"
        >
          <ExternalLink className="w-4 h-4 text-[#E9E1FF]" />
          <span>Open Full Resource</span>
        </button>

        <button
          onClick={handleDownload}
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-white border border-[#E8E8EE] text-[#24243A] rounded-2xl text-sm font-bold shadow-subtle hover:bg-slate-50 transition-all"
        >
          <Download className="w-4 h-4 text-[#6941C6]" />
          <span>Download PDF / Study Guide</span>
        </button>

        <button
          onClick={(e) => toggleSaveResource(activeResource.id, e)}
          className={`inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-2xl text-sm font-bold border transition-all ${
            isSaved
              ? 'bg-[#E9E1FF] text-[#4919A4] border-[#D0BFFF]'
              : 'bg-white text-[#24243A] border-[#E8E8EE] hover:bg-slate-50'
          }`}
        >
          <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-[#4919A4]' : ''}`} />
          <span>{isSaved ? 'Saved' : 'Save'}</span>
        </button>
      </div>

      {/* C. Resource Preview */}
      <section className="space-y-3">
        <div className="flex items-center justify-between">
          <h2 className="text-lg font-bold text-[#24243A]">Interactive Material Preview</h2>
          <span className="text-xs text-[#737386]">Live interactive preview</span>
        </div>
        <ResourcePreview resource={activeResource} />
      </section>

      {/* B. Resource Description & Learning Outcomes */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Left: What this covers */}
        <div className="bg-white rounded-3xl border border-[#E8E8EE] p-6 sm:p-7 shadow-subtle space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#F1F1F4]">
            <Layers className="w-4 h-4 text-[#6941C6]" />
            <h3 className="text-base font-bold text-[#24243A]">What This Resource Covers</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#737386] leading-relaxed">
            {activeResource.fullDescription}
          </p>
          <ul className="space-y-2.5 pt-2">
            {activeResource.whatItCovers &&
              activeResource.whatItCovers.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#24243A]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#6941C6] mt-1.5 shrink-0" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
          </ul>
        </div>

        {/* Right: What students learn */}
        <div className="bg-white rounded-3xl border border-[#E8E8EE] p-6 sm:p-7 shadow-subtle space-y-4">
          <div className="flex items-center gap-2 pb-2 border-b border-[#F1F1F4]">
            <Sparkles className="w-4 h-4 text-[#067647]" />
            <h3 className="text-base font-bold text-[#24243A]">Target Learning Outcomes</h3>
          </div>
          <p className="text-xs sm:text-sm text-[#737386] leading-relaxed">
            By engaging with this material, students will develop practical mastery and
            exam confidence in the following competencies:
          </p>
          <ul className="space-y-2.5 pt-2">
            {activeResource.learningOutcomes &&
              activeResource.learningOutcomes.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-[#24243A]">
                  <CheckCircle2 className="w-4 h-4 text-[#067647] shrink-0 mt-0.5" />
                  <span className="leading-relaxed">{item}</span>
                </li>
              ))}
          </ul>
        </div>
      </section>

      {/* E. Related Resources */}
      {relatedResources.length > 0 && (
        <section className="space-y-4 pt-6 border-t border-[#E8E8EE]">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-lg font-bold text-[#24243A]">Related Study Materials</h2>
              <p className="text-xs text-[#737386]">
                More curated resources from {activeResource.subject} and {activeResource.classLevel}
              </p>
            </div>
            <button
              onClick={() => navigateTo('explore')}
              className="text-xs font-bold text-[#4919A4] hover:underline"
            >
              Browse all →
            </button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {relatedResources.map((res) => (
              <div
                key={res.id}
                onClick={() => openResource(res.id)}
                className="p-4 rounded-2xl bg-white border border-[#E8E8EE] hover:border-[#D0BFFF] hover:shadow-card-hover transition-all cursor-pointer group flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-1 mb-2">
                    <span
                      className="text-[10px] font-bold px-2 py-0.5 rounded-md"
                      style={{
                        backgroundColor: (SUBJECT_CONFIG[res.subject] || {}).bg,
                        color: (SUBJECT_CONFIG[res.subject] || {}).text
                      }}
                    >
                      {res.subject}
                    </span>
                    <span className="text-[10px] font-semibold text-[#737386] bg-slate-100 px-2 py-0.5 rounded-md">
                      {res.resourceType}
                    </span>
                  </div>
                  <h4 className="text-sm font-bold text-[#24243A] group-hover:text-[#4919A4] transition-colors line-clamp-2">
                    {res.title}
                  </h4>
                </div>

                <div className="mt-4 pt-2 border-t border-[#F1F1F4] flex items-center justify-between text-xs font-bold text-[#4919A4]">
                  <span>View Material</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </div>
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
