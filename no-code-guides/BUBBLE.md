# Building a CV Builder with Bubble

Bubble is a powerful no-code platform for building full-featured web applications with custom workflows, database, and design flexibility.

## 🚀 Overview

**Platform:** Bubble (bubble.io)  
**Difficulty:** Intermediate  
**Time to Build:** 1-2 hours  
**Cost:** Free tier available  
**Best For:** Feature-rich web application with custom design

## 📋 Prerequisites

1. Sign up for a free Bubble account at [bubble.io](https://bubble.io)
2. Basic understanding of web application concepts
3. Familiarity with drag-and-drop interfaces

---

## Step 1: Create Your Bubble App

### 1.1 Initialize Project

1. Log into Bubble dashboard
2. Click **"New App"**
3. App name: "cv-builder"
4. Template: Start with **"Blank"**
5. Click **"Create App"**

### 1.2 Configure App Settings

1. Go to **Settings** tab
2. **General** → Set app name and description
3. **SEO/Metatags** → Add meta description for CV builder
4. **Languages** → Keep English (default)

---

## Step 2: Design the Database

### 2.1 Create Data Types

Go to **Data** → **Data Types** and create:

#### Data Type: CV
| Field Name | Field Type | Optional | Notes |
|------------|-----------|----------|-------|
| full_name | text | No | User's full name |
| email | text | No | Email address |
| phone | text | No | Phone number |
| professional_summary | text | No | Summary paragraph |
| skills | text | No | Comma-separated |
| linkedin_url | text | Yes | LinkedIn profile |
| portfolio_url | text | Yes | Portfolio website |
| github_url | text | Yes | GitHub profile |
| created_date | date | No | Auto-set on creation |
| modified_date | date | Yes | Last edit timestamp |
| user | User | Yes | Creator (if using auth) |

#### Data Type: Education
| Field Name | Field Type | Optional | Notes |
|------------|-----------|----------|-------|
| cv | CV | No | Related CV (relationship) |
| school | text | No | School/University name |
| degree | text | No | Degree/qualification |
| years | text | No | Time period |
| order | number | Yes | Display order |

#### Data Type: Experience
| Field Name | Field Type | Optional | Notes |
|------------|-----------|----------|-------|
| cv | CV | No | Related CV (relationship) |
| company | text | No | Company name |
| role | text | No | Job title |
| years | text | No | Time period |
| description | text | Yes | Job description |
| order | number | Yes | Display order |

### 2.2 Set Privacy Rules (Optional)

If implementing user authentication:
1. Go to **Data** → **Privacy**
2. For CV type: Users can view/edit their own CVs only
3. For Education/Experience: Same as parent CV

---

## Step 3: Design the Form Page

### 3.1 Create the Main Page

1. Go to **Design** tab
2. Page name: "index" (default)
3. Page type: Fixed width (960px) or Full width

### 3.2 Build Header Section

Add these elements:
1. **Group** (Header)
   - Width: 100%
   - Height: 120px
   - Background: #2563eb (gradient optional)
   
2. **Text** (Heading)
   - Text: "📄 CV/Resume Builder"
   - Font: 32px, Bold, White
   - Alignment: Center

3. **Text** (Subtitle)
   - Text: "Create your professional CV in minutes"
   - Font: 16px, Regular, White
   - Alignment: Center

### 3.3 Create Form Container

1. Add **Group** (Form Container)
   - Width: 960px (or 100% for responsive)
   - Background: White
   - Border radius: 12px
   - Shadow: Medium
   - Padding: 40px

### 3.4 Add Form Elements

Inside the form container, add:

#### Personal Information Section

1. **Text** (Section Header)
   - "📝 Personal Information"
   - Font: 20px, Bold

2. **Input** (Full Name)
   - Placeholder: "Full Name"
   - Required: Yes
   - Type: Text

3. **Input** (Email)
   - Placeholder: "Email"
   - Required: Yes
   - Type: Email

4. **Input** (Phone)
   - Placeholder: "Phone Number"
   - Required: Yes
   - Type: Text

#### Professional Summary Section

5. **Text** (Section Header)
   - "👤 Professional Summary"
   - Font: 18px, Bold
   - Margin-top: 24px

6. **Multiline Input**
   - Placeholder: "Brief overview of your professional background..."
   - Required: Yes
   - Rows: 4

#### Education Section

7. **Text** (Section Header)
   - "🎓 Education"
   - Font: 18px, Bold
   - Margin-top: 24px

8. **Repeating Group** (Education List)
   - Type: Education
   - Data source: (Custom state or empty initially)
   - Layout: Vertical
   
   Inside repeating group:
   - **Input** (School): Current cell's education's school
   - **Input** (Degree): Current cell's education's degree
   - **Input** (Years): Current cell's education's years
   - **Icon** (Delete): X icon to remove entry

9. **Button** (Add Education)
   - Text: "+ Add Education"
   - Style: Secondary/Outline

#### Work Experience Section

10. **Text** (Section Header)
    - "💼 Work Experience"
    - Font: 18px, Bold
    - Margin-top: 24px

11. **Repeating Group** (Experience List)
    - Type: Experience
    - Data source: (Custom state or empty initially)
    - Layout: Vertical
    
    Inside repeating group:
    - **Input** (Company): Current cell's experience's company
    - **Input** (Role): Current cell's experience's role
    - **Input** (Years): Current cell's experience's years
    - **Multiline Input** (Description): Current cell's experience's description
    - **Icon** (Delete): X icon to remove entry

12. **Button** (Add Experience)
    - Text: "+ Add Experience"
    - Style: Secondary/Outline

#### Skills Section

13. **Text** (Section Header)
    - "🔧 Skills"
    - Font: 18px, Bold
    - Margin-top: 24px

14. **Input** (Skills)
    - Placeholder: "JavaScript, Python, Leadership (comma-separated)"
    - Required: Yes

#### Links Section

15. **Text** (Section Header)
    - "🔗 Links (Optional)"
    - Font: 18px, Bold
    - Margin-top: 24px

16. **Input** (LinkedIn)
    - Placeholder: "LinkedIn URL"
    - Type: URL

17. **Input** (Portfolio)
    - Placeholder: "Portfolio URL"
    - Type: URL

18. **Input** (GitHub)
    - Placeholder: "GitHub URL"
    - Type: URL

#### Action Buttons

19. **Button** (Preview CV)
    - Text: "👁️ Preview CV"
    - Style: Primary
    - Background: #2563eb

20. **Button** (Download PDF)
    - Text: "⬇️ Download PDF"
    - Style: Primary
    - Background: #10b981

---

## Step 4: Create CV Preview Section

### 4.1 Add Preview Container

1. Create **Group** (Preview Container)
   - Position: Right of form (or below on mobile)
   - Width: 50% (or 100% mobile)
   - Sticky: Yes (optional)

2. **Text** (Preview Header)
   - "👁️ CV Preview"
   - Font: 20px, Bold

3. **Group** (CV Display)
   - Background: White
   - Border: 1px solid #e2e8f0
   - Padding: 40px
   - Min-height: 600px

### 4.2 Design CV Template

Inside CV Display group:

1. **Text** (Name)
   - Content: `Input Full Name's value`
   - Font: 28px, Bold
   - Alignment: Center

2. **Text** (Contact)
   - Content: `Input Email's value | Input Phone's value`
   - Font: 12px
   - Alignment: Center
   - Color: Gray

3. **Text** (Links)
   - Content: Conditionally show LinkedIn, Portfolio, GitHub
   - Font: 11px
   - Alignment: Center
   - Color: Blue

4. **Line** (Divider)
   - Width: 100%
   - Height: 2px
   - Color: #2563eb

5. **Text** (Section: Professional Summary)
   - "PROFESSIONAL SUMMARY"
   - Font: 14px, Bold, Uppercase

6. **Text** (Summary Content)
   - Content: `Multiline Input Summary's value`
   - Font: 12px

7. **Repeating Group** (Education Display)
   - Type: Education
   - Data source: Parent group's CV's list of educations
   
   Inside:
   - **Text** (School): Bold
   - **Text** (Degree): Italic
   - **Text** (Years): Right-aligned, Gray

8. **Repeating Group** (Experience Display)
   - Type: Experience
   - Data source: Parent group's CV's list of experiences
   
   Inside:
   - **Text** (Role): Bold
   - **Text** (Company): Italic
   - **Text** (Years): Right-aligned, Gray
   - **Text** (Description): Regular

9. **Text** (Skills Section Header)
   - "SKILLS"
   - Font: 14px, Bold, Uppercase

10. **Repeating Group** (Skills Display)
    - Type: text
    - Data source: `Split by` comma from Skills input
    - Layout: Horizontal wrapped
    
    Inside:
    - **Text** (Skill Tag)
      - Background: #f1f5f9
      - Padding: 8px 16px
      - Border-radius: 20px

---

## Step 5: Create Workflows

### 5.1 "Add Education" Button Workflow

1. Click **"Add Education"** button
2. Go to **Workflow** tab
3. Click **"Click here to add an action"**
4. Choose **"Element Actions"** → **"Add item to list"**
5. Target: Custom state for education list
6. Item: Create new Education with:
   - school: Input School's value
   - degree: Input Degree's value
   - years: Input Years's value

Alternative approach:
- Create custom state "education_temp" on page (list of education)
- Add item to this list when button clicked

### 5.2 "Add Experience" Button Workflow

Similar to education:
1. Add workflow on **"Add Experience"** button
2. **"Add item to list"** → Experience custom state
3. Set fields from inputs

### 5.3 "Preview CV" Button Workflow

1. Click **"Preview CV"** button
2. Workflow action: **"Element Actions"** → **"Show group"**
3. Target: CV Display group
4. Optional: Scroll to preview

### 5.4 "Download PDF" Button Workflow

#### Option A: Using Bubble's Print Plugin (Recommended)

1. Install **"Print to PDF"** plugin from Bubble marketplace
2. Add workflow action on **"Download PDF"** button
3. Choose **"Print"** action
4. Element to print: CV Display group
5. Filename: `Input Full Name's value & " CV.pdf"`

#### Option B: Using API Connector (Advanced)

1. Install **"API Connector"** plugin
2. Configure API call to PDF service (like PDF.co, DocRaptor)
3. Add workflow:
   - **"API Connector"** → Call PDF API
   - Send CV data as HTML/JSON
   - Download resulting PDF

#### Option C: Using Third-Party Plugin

Popular plugins:
- **SelectPDF**
- **PrintFriendly**
- **PDFmyURL**

### 5.5 "Save CV" Workflow

1. Create **"Save CV"** button (optional)
2. Workflow:
   - **"Data (Things)"** → **"Create a new thing"**
   - Type: CV
   - Set fields:
     - full_name = Input Full Name's value
     - email = Input Email's value
     - phone = Input Phone's value
     - professional_summary = Multiline Input Summary's value
     - skills = Input Skills's value
     - linkedin_url = Input LinkedIn's value
     - portfolio_url = Input Portfolio's value
     - github_url = Input GitHub's value
     - created_date = Current date/time
   
3. Create education entries:
   - **"Data (Things)"** → **"Create a list of things"**
   - Type: Education
   - For each item in education_temp state

4. Create experience entries:
   - **"Data (Things)"** → **"Create a list of things"**
   - Type: Experience
   - For each item in experience_temp state

---

## Step 6: Style Your App

### 6.1 Create Styles

Go to **Styles** tab:

1. **Style for Headers**
   - Font: Inter/Roboto
   - Size: 20px
   - Weight: Bold
   - Color: #1e293b

2. **Style for Inputs**
   - Border: 1px solid #e2e8f0
   - Border-radius: 8px
   - Padding: 12px
   - Font-size: 16px

3. **Style for Primary Buttons**
   - Background: #2563eb
   - Color: White
   - Border-radius: 8px
   - Padding: 12px 24px
   - Font-weight: 500

4. **Style for Secondary Buttons**
   - Background: Transparent
   - Color: #2563eb
   - Border: 1px solid #e2e8f0
   - Border-radius: 8px

### 6.2 Apply Responsive Design

1. Click **"Responsive"** tab
2. Set breakpoints:
   - Desktop: 960px+
   - Tablet: 768px-959px
   - Mobile: <768px

3. Adjust layouts:
   - Desktop: Side-by-side (form | preview)
   - Mobile: Stacked (form above preview)

---

## Step 7: Add PDF Export Functionality

### 7.1 Install Print Plugin

1. Go to **Plugins** tab
2. Click **"Add plugins"**
3. Search for **"Print"** or **"Print to PDF"**
4. Click **"Install"**

### 7.2 Configure PDF Settings

1. Go to plugin settings
2. Configure:
   - Paper size: A4
   - Orientation: Portrait
   - Margins: 0.5 inch all sides
   - Scale: 100%

### 7.3 Add Print Action

1. On **"Download PDF"** button workflow
2. Add action: **"Plugins"** → **"Print to PDF"**
3. Settings:
   - Element: CV Display group
   - Filename: Dynamic (`Full Name & " CV.pdf"`)
   - Download automatically: Yes

---

## Step 8: Testing

### 8.1 Preview Mode

1. Click **"Preview"** button (top-right)
2. Fill in form with test data
3. Click "Add Education" and "Add Experience"
4. Test "Preview CV" button
5. Test "Download PDF" button

### 8.2 Debug Mode

1. Click **"Debug"** button in preview
2. Check for:
   - Workflow errors
   - Data not saving
   - Element visibility issues

### 8.3 Responsive Testing

1. Use browser dev tools
2. Test on:
   - Desktop (1920px)
   - Tablet (768px)
   - Mobile (375px)

---

## Step 9: Deploy Your App

### 9.1 Deploy to Live

1. Click **"Deploy"** button (top-right)
2. Select **"Deploy to live"**
3. Add deployment notes
4. Click **"Deploy"**

### 9.2 Custom Domain (Optional)

For paid plans:
1. Go to **Settings** → **Domain / email**
2. Add custom domain
3. Configure DNS settings
4. Verify domain

---

## 🎨 Advanced Styling Tips

### Professional Color Palette
```
Primary: #2563eb (Blue)
Secondary: #64748b (Gray)
Success: #10b981 (Green)
Background: #f8fafc (Light Gray)
Text: #1e293b (Dark Gray)
Border: #e2e8f0 (Light Border)
```

### Typography
- Headings: 20-28px, Bold
- Body: 14-16px, Regular
- Small text: 12-13px, Regular
- Line height: 1.5-1.6

---

## 🔧 Advanced Features to Add

### 1. Multiple CV Templates
- Create multiple CV template groups
- Add template selector
- Conditionally display selected template

### 2. User Authentication
- Enable Bubble's built-in authentication
- Users can save multiple CVs
- Add "My CVs" dashboard

### 3. CV Editing
- Add "Edit CV" page
- Load existing CV data
- Update workflows for editing

### 4. Export to Word
- Use API connector
- Integrate with Docx generation service
- Add "Download Word" button

### 5. CV Sharing
- Generate unique URL for each CV
- Create public CV view page
- Add privacy settings

---

## 📊 Performance Optimization

1. **Use custom states** for temporary data
2. **Limit repeating group searches**
3. **Optimize database queries**
4. **Use privacy rules** efficiently
5. **Compress images** if using any

---

## 🐛 Troubleshooting

### Issue: PDF not generating correctly
**Solution:** 
- Check element visibility (must be visible to print)
- Remove overflow: hidden from groups
- Test with simpler layout first

### Issue: Repeating groups not showing data
**Solution:**
- Check data source connection
- Verify custom state is populated
- Check privacy rules

### Issue: Responsive design breaking
**Solution:**
- Use groups with "fit width to content"
- Set minimum widths
- Test at each breakpoint

---

## 📚 Resources

- [Bubble Manual](https://manual.bubble.io/)
- [Bubble Forum](https://forum.bubble.io/)
- [Bubble Academy](https://bubble.io/academy)
- [Plugin Library](https://bubble.io/plugins)

---

## 💡 Next Steps

1. Add CV analytics (views, downloads)
2. Implement A/B testing for templates
3. Add AI-powered summary suggestions
4. Create CV review/feedback feature
5. Build employer CV search portal

---

**Estimated Build Time:** 1-2 hours  
**Skill Level Required:** Intermediate  
**Cost:** Free (up to 50MB storage), $29/month for paid plan
