# رُواء - Rawaa ERP Design Guidelines

## Design Approach
**Hybrid Approach**: Material Design enterprise patterns with Neumorphic visual treatment and touch-first interactions. Drawing inspiration from modern SaaS dashboards (Linear, Notion) while maintaining distinct Arabic identity.

## Typography System

### Arabic Font Hierarchy
- **Primary Display**: "Cairo" or "Tajawal" - 600-700 weight for headers
- **Body Text**: "Cairo" Regular (400) for readability
- **Data/Numbers**: "IBM Plex Sans Arabic" for tables and numeric displays

### Size Scale (Tailwind units)
- Display: text-4xl to text-5xl (navigation headers)
- H1: text-3xl (page titles)
- H2: text-2xl (section headers)  
- H3: text-xl (card headers)
- Body: text-base (default content)
- Small: text-sm (labels, captions)
- Tiny: text-xs (metadata, timestamps)

## Layout System

### Spacing Primitives
Core spacing units: **2, 4, 6, 8, 12, 16** (p-2, p-4, p-6, p-8, p-12, p-16)
- Component padding: p-6 to p-8
- Section spacing: py-12 to py-16  
- Card gaps: gap-6
- Touch targets: minimum h-12 (48px)

### Application Shell
- **Sidebar Navigation**: Fixed right (RTL), w-64, contains main modules with icons
- **Top Bar**: h-16, company logo, user menu, notifications, quick actions
- **Content Area**: max-w-7xl, px-8, py-6, scrollable
- **Multi-Panel Views**: Use grid-cols-3 for dashboard widgets, grid-cols-2 for form/preview layouts

## Component Library

### Neumorphic Elements
All interactive components feature soft, raised appearance with subtle shadows and inset states when pressed.

**Cards**: Elevated containers with rounded-2xl corners, generous p-8 padding, subtle drop shadows

**Buttons**: 
- Primary: Large h-12, rounded-xl, prominent for CTAs
- Secondary: Ghost style with border
- Icon Buttons: Square, h-12 w-12 for toolbars
- Touch targets: Minimum 48x48px spacing

**Forms**:
- Input fields: h-12, rounded-lg, full-width in mobile, grouped in 2-column grids on desktop
- Labels: text-sm, font-semibold, mb-2
- Field groups: space-y-4 vertical rhythm

**Tables**:
- Dense data presentation with alternating row treatments
- Fixed headers with sticky positioning
- Action columns aligned left (RTL)
- Horizontal scroll for wide data on mobile

**Navigation**:
- Module icons with text labels
- Active state with accent indicator
- Collapsible sub-menus with indentation

### Dashboard Layouts
- **KPI Cards**: 4-column grid (lg:grid-cols-4) showing metrics with large numbers, icons, trend indicators
- **Charts Section**: 2-column grid with responsive charts
- **Recent Activity**: Single column list with timeline design
- **Quick Actions**: Button grid for common tasks

### POS Interface
- **Product Grid**: 4-5 columns of touch-friendly product cards with images
- **Cart Panel**: Fixed left panel (RTL), showing line items, totals, payment buttons
- **Numpad**: Large 3x4 grid for touch input
- **Category Filters**: Horizontal scrolling chips at top

### Forms & Data Entry
- **Multi-step Forms**: Progress indicator at top, next/previous at bottom
- **Modal Dialogs**: Centered, max-w-2xl, with backdrop blur
- **Confirmation Dialogs**: Compact, clear action buttons, warning icons for destructive actions

### Reports & Analytics
- **Filter Bar**: Sticky top section with date pickers, dropdowns, search
- **Results Area**: Tabular data with export buttons
- **Charts**: Full-width responsive containers with legends

## RTL Considerations
- All layouts mirror horizontally
- Icons position right-to-left
- Progress indicators fill right-to-left
- Text alignment: text-right throughout
- Numeric data: Keep LTR for numbers, RTL for labels

## Touch Optimization
- Minimum touch targets: 48x48px (h-12 w-12)
- Increased spacing between clickable elements: gap-4 minimum
- Swipeable panels for mobile navigation
- Large, clear typography for readability
- Bottom navigation bar for mobile with 5 primary modules

## Data Visualization
- Use bar charts for comparisons, line charts for trends
- Arabic number formatting with proper separators
- Color coding: Consistent meaning (revenue=blue, expenses=red, profit=green)
- Legends positioned at top or right

## Responsive Breakpoints
- **Mobile** (base): Single column, bottom nav, stacked forms
- **Tablet** (md:): 2-column grids, sidebar becomes drawer
- **Desktop** (lg:): Full 3-4 column layouts, persistent sidebar, multi-panel views

## Page Structures

### Setup/Onboarding
Full-screen centered wizard with progress steps, generous whitespace, illustration placeholders for business type selection

### Main Dashboard  
3-column grid for KPIs, 2-column for charts, full-width for recent transactions table

### Settings Pages
2-column layout: Left navigation menu, right content area with tabbed sections for different setting categories

### Invoice/Document Pages
Full-width preview with floating action toolbar, A4 proportioned document container

This system prioritizes clarity, efficiency, and touch-friendliness while maintaining sophisticated visual appeal appropriate for professional business software.