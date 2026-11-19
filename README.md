# STUDO — Think. Discover. Achieve.

> A modern, responsive educational web platform designed for school students (Classes 9–12, CBSE & multi-board) to discover, organise, access and save high-yield study resources in one distraction-free place.

---

## 🎨 1. Design System & Brand Identity

STUDO combines the clean structure of an EdTech SaaS platform with the warmth of a student dashboard.

### Color Palette
- **Lavender**: `#E9E1FF` (Mathematics, primary accents, badges)
- **Baby Blue**: `#DCEEFF` (Physics, stats, information)
- **Peach**: `#FFE6DC` (Chemistry, chemistry reactions)
- **Mint Green**: `#DDF3E7` (Biology, success, progress)
- **Butter Yellow**: `#FFF0C9` (Computer Science, achievements)
- **Soft Pink**: `#F8DFED` (English literature, notes)
- **Background**: `#FAFAFC`
- **Main Text**: `#24243A`
- **Secondary Text**: `#737386`
- **Surface Cards**: `#FFFFFF` with subtle shadows (`0 4px 20px rgba(36, 36, 58, 0.06)`)

---

## 🚀 2. Screens & User Journey

### Screen 1: Student Dashboard
- **Personalized Welcome Banner**: Greets the student with live institutional context and study streak.
- **Dynamic Quick Overview**:
  - *Resources Saved* (live count connected to bookmarks)
  - *Recently Viewed* (live history count)
  - *Subjects Learning* (active topics)
  - *Learning Hours* (incremental study activity)
- **Explore by Subject**: 6 dedicated pastel cards (Mathematics, Physics, Chemistry, Biology, English, Computer Science) with one-click filtering.
- **Recently Added Study Materials**: Latest uploads aligned with the upcoming exam calendar.
- **Continue Learning**: Direct resumption of recently opened documents, with helpful empty state.

### Screen 2: Explore Resources
- **Prominent Search Bar**: Instant real-time filtering across titles, subjects, chapters, descriptions, and syllabus topics.
- **Browse by Resource Format**: 6 pastel format cards (Notes & PDFs, Video Lectures, Previous-Year Papers, Sample Papers, Practice Questions, Short Notes).
- **Multi-Filter System**:
  - Class Level (Class 9, Class 10, Class 11, Class 12)
  - Board (CBSE, ICSE, State Board)
  - Subject (Math, Physics, Chem, Bio, English, CS)
  - Resource Format
  - Difficulty Level (Beginner, Intermediate, Advanced)
  - *All filters work together seamlessly with active tags and a Clear Filters reset.*
- **Responsive Layout**: Sidebar filters on desktop, clean slide-out drawer on tablet/mobile.
- **Sorting**: Newest Added, Alphabetical (A–Z), and Top Rated.

### Screen 3: Resource Details & Interactive Previews
- **Resource Header**: Subject tag, Class, Board, Resource Type badge, Difficulty level, and Back button.
- **Interactive Multi-Mode Previews**:
  - **PDF & Notes Viewer**: Multi-page document viewer with page selector, Previous/Next navigation, zoom in/out/reset controls.
  - **Video Lectures Player**: Responsive embedded video with timestamped lecture chapters and note breakdown.
  - **Practice Quiz Interface**: Interactive questions with choice selection, instant answer checking, and detailed explanations.
  - **Sample Papers & Marking Scheme**: Official examination pattern preview with section tabs and click-to-reveal solutions.
- **Action Buttons**:
  - *Open Full Resource* (opens dedicated reader view)
  - *Download PDF / Study Guide* (generates and downloads file locally)
  - *Save to My Resources* (live bookmark toggle)
- **What It Covers & Target Learning Outcomes**: Concrete competency breakdown.
- **Related Resources**: Contextual materials from the same subject/class.

### My Saved Resources
- Direct bookmark management from navbar or cards.
- Persistent across browser sessions via `localStorage`.
- Empty state with direct "Discover Resources" call to action.

### Student Profile Modal
- Customise name, school, class level, board, and stream.
- Updates across the dashboard and localStorage in real time.

---

## 🛠️ 3. Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite 6
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Persistence**: `localStorage` (for bookmarks, recent history, stats, and profile)

---

## 💻 4. Running Locally

```bash
# 1. Install dependencies
npm install

# 2. Start Vite development server
npm run dev

# 3. Build production bundle
npm run build
```
