# Building a CV Builder with Softr

Softr is a no-code platform that turns Airtable databases into beautiful websites and web apps. Perfect for quick, professional CV builders with minimal setup.

## 🚀 Overview

**Platform:** Softr (softr.io)  
**Difficulty:** Beginner  
**Time to Build:** 20-30 minutes  
**Cost:** Free tier available  
**Best For:** Quick website with Airtable backend

## 📋 Prerequisites

1. Sign up for a free Softr account at [softr.io](https://www.softr.io)
2. Sign up for a free Airtable account at [airtable.com](https://www.airtable.com)
3. Basic understanding of spreadsheets

---

## Step 1: Create Your Airtable Base

### 1.1 Create New Base

1. Log into Airtable
2. Click **"Add a base"**
3. Choose **"Start from scratch"**
4. Name: "CV Builder Database"

### 1.2 Design the CVs Table

**Table 1: CVs**

Click on the default table and rename it to "CVs". Add these fields:

| Field Name | Field Type | Options/Notes |
|------------|-----------|---------------|
| Name | Single line text | Primary field |
| Email | Email | Required |
| Phone | Phone number | Required |
| Professional Summary | Long text | Enable rich text |
| Skills | Long text | Comma-separated values |
| LinkedIn URL | URL | Optional |
| Portfolio URL | URL | Optional |
| GitHub URL | URL | Optional |
| Created | Created time | Auto-generated |
| Last Modified | Last modified time | Auto-generated |

### 1.3 Create Education Table

Create a new table: **Education**

| Field Name | Field Type | Options/Notes |
|------------|-----------|---------------|
| CV | Link to another record | Link to CVs table |
| School | Single line text | Required |
| Degree | Single line text | Required |
| Years | Single line text | e.g., "2015-2019" |
| Order | Number | For sorting |

In CVs table, you'll see a new linked field "Education" automatically created.

### 1.4 Create Work Experience Table

Create a new table: **Work Experience**

| Field Name | Field Type | Options/Notes |
|------------|-----------|---------------|
| CV | Link to another record | Link to CVs table |
| Company | Single line text | Required |
| Role | Single line text | Required |
| Years | Single line text | e.g., "2019-Present" |
| Description | Long text | Job responsibilities |
| Order | Number | For sorting |

### 1.5 Create Views

In each table, create views:

**CVs Table:**
- Default view: "All CVs"
- View 2: "Recent CVs" (Sort by Created, descending)

**Education Table:**
- Default view: "All Education" (Sort by Order)

**Work Experience Table:**
- Default view: "All Experience" (Sort by Order)

---

## Step 2: Create Your Softr App

### 2.1 Connect Airtable

1. Log into Softr
2. Click **"Create new site"**
3. Choose **"Connect Airtable"**
4. Select your "CV Builder Database" base
5. Grant permissions

### 2.2 Choose Template

1. Select **"Form & Display"** template
2. Or start with **"Blank"** for more control
3. Name your app: "CV Builder"

### 2.3 Configure Basic Settings

1. Go to **Settings** → **General**
2. Set site name: "Professional CV Builder"
3. Set favicon (optional)
4. Choose domain name (e.g., cv-builder.softr.app)

---

## Step 3: Build the Form Page

### 3.1 Create Form Block

1. Click **"Add Block"** on the main page
2. Choose **"Form"** block
3. Select data source: **CVs** table

### 3.2 Configure Form Fields

In the form editor, add fields in this order:

#### Personal Information
1. **Name** (Text Input)
   - Label: "Full Name"
   - Required: Yes
   - Placeholder: "John Doe"

2. **Email** (Email Input)
   - Label: "Email Address"
   - Required: Yes
   - Placeholder: "john@example.com"

3. **Phone** (Phone Input)
   - Label: "Phone Number"
   - Required: Yes
   - Placeholder: "+1 234 567 8900"

#### Professional Summary
4. **Professional Summary** (Textarea)
   - Label: "Professional Summary"
   - Required: Yes
   - Rows: 4
   - Placeholder: "Brief overview of your professional background..."

#### Skills
5. **Skills** (Textarea)
   - Label: "Skills (comma-separated)"
   - Required: Yes
   - Placeholder: "JavaScript, Python, Project Management"

#### Optional Links
6. **LinkedIn URL** (URL Input)
   - Label: "LinkedIn Profile"
   - Required: No

7. **Portfolio URL** (URL Input)
   - Label: "Portfolio Website"
   - Required: No

8. **GitHub URL** (URL Input)
   - Label: "GitHub Profile"
   - Required: No

### 3.3 Style the Form

1. **Layout:**
   - Container width: 720px
   - Padding: 40px
   - Background: White
   - Border radius: 12px

2. **Submit Button:**
   - Text: "Create My CV"
   - Color: #2563eb (Blue)
   - Text color: White
   - Size: Large

### 3.4 Add Form Sections

Add text blocks between form fields to create sections:

1. Before Name field: 
   - Text: "📝 Personal Information"
   - Style: Heading 3

2. Before Professional Summary:
   - Text: "👤 Professional Summary"
   - Style: Heading 3

3. Before Skills:
   - Text: "🔧 Skills"
   - Style: Heading 3

4. Before LinkedIn URL:
   - Text: "🔗 Links (Optional)"
   - Style: Heading 3

---

## Step 4: Add Education & Experience Forms

### 4.1 Create Education Form Block

1. Add new block below main form
2. Choose **"Form"** block
3. Data source: **Education** table
4. Title: "🎓 Add Education"

Fields:
- **CV** (Hidden field, auto-populate after CV creation)
- **School** (Text input, required)
- **Degree** (Text input, required)
- **Years** (Text input, required, placeholder: "2015-2019")

### 4.2 Create Experience Form Block

1. Add new block
2. Choose **"Form"** block
3. Data source: **Work Experience** table
4. Title: "💼 Add Work Experience"

Fields:
- **CV** (Hidden field, auto-populate)
- **Company** (Text input, required)
- **Role** (Text input, required)
- **Years** (Text input, required, placeholder: "2019-Present")
- **Description** (Textarea, 3 rows)

### 4.3 Configure Multi-Step Form (Alternative)

For better UX, use Softr's conditional logic:

1. Create 3 separate pages:
   - Page 1: Personal Info & Summary
   - Page 2: Education (can add multiple)
   - Page 3: Work Experience (can add multiple)

2. Add navigation buttons:
   - "Next" → Navigate to next page
   - "Previous" → Go back
   - "Finish & Preview" → Go to preview page

---

## Step 5: Create CV Preview Page

### 5.1 Create New Page

1. Go to **Pages** → **Add Page**
2. Name: "cv-preview"
3. Title: "Your CV"

### 5.2 Add Details Block

1. Click **"Add Block"**
2. Choose **"Details"** block
3. Data source: **CVs** table
4. Connect to: URL parameter (record ID)

### 5.3 Design CV Layout

In the Details block, add these sections:

#### Header Section
1. **Text Block** (Name)
   - Content: `{Name}`
   - Style: Heading 1
   - Alignment: Center

2. **Text Block** (Contact)
   - Content: `{Email} | {Phone}`
   - Style: Small text
   - Alignment: Center
   - Color: Gray

3. **Text Block** (Links)
   - Content: `{LinkedIn URL} {Portfolio URL} {GitHub URL}`
   - Style: Links
   - Alignment: Center

4. **Divider**
   - Color: #2563eb
   - Thickness: 2px

#### Professional Summary Section
5. **Text Block**
   - Content: "PROFESSIONAL SUMMARY"
   - Style: Heading 3
   - Transform: Uppercase

6. **Text Block**
   - Content: `{Professional Summary}`
   - Style: Body text

#### Education Section
7. **Text Block**
   - Content: "🎓 EDUCATION"
   - Style: Heading 3

8. **List Block**
   - Data source: **Education** table
   - Filter: CV = Current record
   - Sort by: Order (ascending)
   
   Layout for each item:
   - **School** (Bold)
   - **Degree** (Italic)
   - **Years** (Right-aligned, Gray)

#### Work Experience Section
9. **Text Block**
   - Content: "💼 WORK EXPERIENCE"
   - Style: Heading 3

10. **List Block**
    - Data source: **Work Experience** table
    - Filter: CV = Current record
    - Sort by: Order (ascending)
    
    Layout for each item:
    - **Role** (Bold)
    - **Company** (Italic)
    - **Years** (Right-aligned)
    - **Description** (Body text)

#### Skills Section
11. **Text Block**
    - Content: "🔧 SKILLS"
    - Style: Heading 3

12. **Text Block**
    - Content: `{Skills}`
    - Style: Tag/Pills (if available)
    - Transform: Split by comma

---

## Step 6: Add PDF Export

### 6.1 Enable Built-in PDF Export

Softr has native PDF export:

1. On CV preview page, add **Action Button** block
2. Button text: "⬇️ Download PDF"
3. Action: **"Export to PDF"**
4. Configure:
   - Export section: CV Details block
   - Filename: `{Name} CV.pdf`
   - Layout: A4 Portrait

### 6.2 Alternative: Use Integromat/Make

If native export isn't available on your plan:

1. Install **Zapier** or **Make** integration
2. Create automation:
   - Trigger: New CV created in Airtable
   - Action: Generate PDF using DocRaptor or PDF.co
   - Action: Email PDF to user

### 6.3 Simple Print Option

Add a print-friendly stylesheet:

1. Go to **Settings** → **Custom Code**
2. Add CSS for print:

```css
@media print {
  .softr-header, .softr-footer, .action-buttons {
    display: none !important;
  }
  .cv-preview {
    width: 100%;
    max-width: none;
  }
}
```

3. Add button with action: **"Print page"**

---

## Step 7: Configure Workflows

### 7.1 Form Submission Workflow

1. Go to form settings → **Actions**
2. After successful submission:
   - **Action:** Redirect to CV preview page
   - **Pass data:** Record ID in URL

3. Show success message:
   - "CV created successfully!"
   - Duration: 3 seconds

### 7.2 Education/Experience Addition

For education and experience forms:
1. After submission → Redirect back to form
2. Show message: "Entry added! Add another or continue to preview."
3. Add **"Preview CV"** button below forms

---

## Step 8: Style Your App

### 8.1 Apply Theme

1. Go to **Settings** → **Styling**
2. Choose **"Professional"** theme preset
3. Customize colors:
   - Primary: #2563eb
   - Secondary: #64748b
   - Background: #f8fafc
   - Text: #1e293b

### 8.2 Typography

1. Font family: Inter or Roboto
2. Heading sizes:
   - H1: 32px
   - H2: 24px
   - H3: 20px
3. Body text: 16px
4. Line height: 1.6

### 8.3 Custom CSS (Optional)

Add custom styling in **Settings** → **Custom Code**:

```css
/* Form styling */
.form-container {
  max-width: 720px;
  margin: 0 auto;
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

/* CV Preview styling */
.cv-preview {
  background: white;
  padding: 48px;
  max-width: 800px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0,0,0,0.1);
}

/* Section headers */
.section-header {
  color: #2563eb;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 24px;
  margin-bottom: 12px;
}

/* Skills tags */
.skill-tag {
  display: inline-block;
  background: #f1f5f9;
  padding: 8px 16px;
  border-radius: 20px;
  margin: 4px;
  font-size: 14px;
}
```

---

## Step 9: Add Navigation

### 9.1 Create Menu

1. Go to **Settings** → **Navigation**
2. Add menu items:
   - "Home" → Main form page
   - "Create CV" → Form page
   - "How It Works" → Info page (optional)

### 9.2 Add Progress Indicator

For multi-step forms:
1. Add **Progress Bar** block at top
2. Steps:
   - Step 1: Personal Info ✓
   - Step 2: Education
   - Step 3: Work Experience
   - Step 4: Preview & Download

---

## Step 10: Add User Features (Optional)

### 10.1 Enable User Authentication

For users to save and manage CVs:

1. Go to **Settings** → **Users**
2. Enable **Sign up/Login**
3. Add **User** field to CVs table
4. Auto-populate with current user

### 10.2 Create "My CVs" Dashboard

1. Create new page: "My CVs"
2. Add **List Block**:
   - Data source: CVs
   - Filter: User = Current user
   - Layout: Cards
   - Show: Name, Created date, Preview button

### 10.3 Add Edit Functionality

1. On each CV card, add **"Edit"** button
2. Link to form page with record ID
3. Pre-populate form with existing data
4. Change submit button to "Update CV"

---

## Step 11: Testing

### 11.1 Test Form Submission

1. Click **"Preview"** (top-right)
2. Fill in all required fields
3. Submit form
4. Verify redirect to preview page
5. Check data in Airtable

### 11.2 Test Education/Experience

1. Add multiple education entries
2. Add multiple experience entries
3. Verify they appear in preview
4. Check sorting (by Order field)

### 11.3 Test PDF Download

1. Click "Download PDF" button
2. Check PDF formatting
3. Verify all sections are included
4. Test on different browsers

### 11.4 Mobile Testing

1. Test on mobile device
2. Check form usability
3. Verify CV preview is readable
4. Test PDF download on mobile

---

## Step 12: Publish Your App

### 12.1 Deploy to Production

1. Click **"Publish"** button (top-right)
2. Review changes
3. Click **"Publish changes"**

### 12.2 Set Up Custom Domain

For paid plans:
1. Go to **Settings** → **Domain**
2. Add custom domain (e.g., cv.yourdomain.com)
3. Configure DNS:
   - Add CNAME record
   - Point to Softr's servers
4. Verify domain

### 12.3 Configure SEO

1. Go to **Settings** → **SEO**
2. Set meta title: "Professional CV Builder - Create Your Resume"
3. Set meta description: "Create a professional CV in minutes. Free, easy-to-use resume builder."
4. Add Open Graph image
5. Enable indexing (if public)

---

## 🎨 Design Tips

### Color Scheme
```
Primary Blue: #2563eb
Secondary Gray: #64748b
Success Green: #10b981
Background: #f8fafc
Text Primary: #1e293b
Text Secondary: #64748b
Border: #e2e8f0
```

### Layout Spacing
- Section margins: 32px
- Element padding: 16px
- Card spacing: 24px
- Line height: 1.6

### Professional Typography
- Headers: Bold, Uppercase for sections
- Body: Regular, 16px
- Small text: 14px for metadata
- Links: Blue with underline on hover

---

## 🔧 Advanced Features

### 1. Multiple CV Templates

Create different detail page layouts:
1. Template 1: Modern (colorful, two-column)
2. Template 2: Classic (black & white, single column)
3. Template 3: Creative (with photo, sidebar)

Add template selector in form.

### 2. CV Analytics

Track CV performance:
1. Add fields to CVs table:
   - Views count
   - Downloads count
   - Last viewed
2. Use Airtable automations to increment counters
3. Display analytics in dashboard

### 3. AI-Powered Suggestions

Integrate with OpenAI:
1. Add "Improve Summary" button
2. Use Zapier/Make to call OpenAI API
3. Return improved summary
4. User can accept or edit

### 4. CV Sharing

Create shareable links:
1. Generate unique public URL for each CV
2. Add share buttons (LinkedIn, Twitter, Email)
3. Create QR code for CV URL

### 5. Export to Multiple Formats

Add export options:
- PDF (professional)
- Word (.docx)
- Plain text
- LinkedIn import format

---

## 📊 Airtable Automations

Set up helpful automations:

### Welcome Email
- **Trigger:** New record in CVs
- **Action:** Send email to user
- **Content:** "Your CV is ready! View: {Preview Link}"

### Reminder to Complete
- **Trigger:** New CV without education/experience
- **Condition:** Check if linked records exist
- **Action:** Send reminder email after 24 hours

### Monthly Stats
- **Trigger:** Scheduled (1st of month)
- **Action:** Count CVs created this month
- **Action:** Email report to admin

---

## 🐛 Troubleshooting

### Issue: Form not submitting
**Solution:** 
- Check required fields are filled
- Verify Airtable connection is active
- Check field types match in Airtable

### Issue: PDF export missing content
**Solution:**
- Ensure all blocks are within export section
- Remove any hidden or conditional content
- Test with simpler layout first

### Issue: Linked records not showing
**Solution:**
- Verify CV ID is passed correctly
- Check filter settings in List block
- Ensure records are linked in Airtable

### Issue: Responsive design issues
**Solution:**
- Use Softr's responsive preview
- Test on actual devices
- Adjust block widths and padding

---

## 📚 Resources

- [Softr Documentation](https://docs.softr.io/)
- [Softr Community](https://community.softr.io/)
- [Airtable Universe](https://airtable.com/universe) (CV templates)
- [Softr Templates](https://www.softr.io/templates)

---

## 💡 Next Steps

1. Add CV scoring/optimization tips
2. Create CV review marketplace
3. Add employer CV search
4. Implement payment for premium templates
5. Build mobile app version

---

## 📈 Monetization Ideas

1. **Freemium Model:**
   - Free: 1 CV, basic template
   - Pro ($9/mo): Unlimited CVs, premium templates

2. **One-time Payments:**
   - $5 for PDF download
   - $10 for premium template bundle

3. **Services:**
   - Professional CV review ($49)
   - LinkedIn profile optimization ($79)

---

**Estimated Build Time:** 20-30 minutes  
**Skill Level Required:** Beginner  
**Cost:** Free (up to 100 records), $49/month for pro features

---

## 🎯 Quick Start Checklist

- [ ] Create Airtable base with CVs, Education, and Experience tables
- [ ] Connect Softr to Airtable
- [ ] Build main CV form with all fields
- [ ] Add Education and Experience forms
- [ ] Create CV preview page with Details block
- [ ] Configure PDF export
- [ ] Apply professional styling
- [ ] Test form submission and preview
- [ ] Publish app
- [ ] Share with users!

Congratulations! You now have a fully functional CV Builder built with Softr and Airtable! 🎉
