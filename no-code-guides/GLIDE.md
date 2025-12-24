# Building a CV Builder with Glide

Glide is a mobile-first no-code platform that turns Google Sheets into beautiful apps. Perfect for creating a CV builder that works seamlessly on mobile devices.

## 🚀 Overview

**Platform:** Glide (glideapps.com)  
**Difficulty:** Beginner  
**Time to Build:** 30-45 minutes  
**Cost:** Free tier available  
**Best For:** Mobile-first CV builder app

## 📋 Prerequisites

1. Sign up for a free Glide account at [glideapps.com](https://www.glideapps.com)
2. Have a Google account (for Google Sheets integration)

---

## Step 1: Create Your Google Sheet Database

### 1.1 Create a New Google Sheet

Create a new Google Sheet with the following structure:

**Sheet Name:** `CVs`

| Column Name | Type | Description |
|------------|------|-------------|
| Row ID | Text | Auto-generated unique ID |
| Full Name | Text | User's full name |
| Email | Email | User's email address |
| Phone | Phone | User's phone number |
| Professional Summary | Text | Professional summary |
| Education | Text | JSON or delimited string |
| Work Experience | Text | JSON or delimited string |
| Skills | Text | Comma-separated skills |
| LinkedIn | URL | LinkedIn profile URL |
| Portfolio | URL | Portfolio website URL |
| GitHub | URL | GitHub profile URL |
| Created Date | Date | Timestamp of creation |

### 1.2 Add Additional Sheets (Relational Approach)

For a more structured approach, create three sheets:

**Sheet 1: CVs**
- Row ID
- Full Name
- Email
- Phone
- Professional Summary
- Skills
- LinkedIn
- Portfolio
- GitHub
- Created Date

**Sheet 2: Education**
- Row ID
- CV ID (relates to CVs sheet)
- School
- Degree
- Years

**Sheet 3: Work Experience**
- Row ID
- CV ID (relates to CVs sheet)
- Company
- Role
- Years
- Description

---

## Step 2: Create Your Glide App

### 2.1 Connect Google Sheet

1. Go to Glide dashboard
2. Click **"New App"**
3. Select **"From Google Sheet"**
4. Choose your CV database sheet
5. Select **"Form"** as the starting template

### 2.2 Configure App Settings

1. **App Name:** "CV Builder"
2. **App Icon:** Choose a document or profile icon
3. **Theme:** Select "Professional" or "Minimal"
4. **Accent Color:** Choose a professional blue (#2563eb recommended)

---

## Step 3: Build the Form Screen

### 3.1 Create the Main Form

1. Go to the **"Form"** screen in Glide
2. Click **"Components"** → **"Form"**
3. Add form components for each field:

#### Personal Information Section
- **Text Entry:** Full Name (Required)
- **Email Entry:** Email (Required)
- **Phone Entry:** Phone Number (Required)

#### Professional Summary Section
- **Text Area:** Professional Summary (Required, 3-5 rows)

#### Skills Section
- **Text Entry:** Skills (Required, placeholder: "JavaScript, Python, Leadership")

#### Links Section (Optional)
- **URL Entry:** LinkedIn
- **URL Entry:** Portfolio
- **URL Entry:** GitHub

### 3.2 Add Multi-Entry Components (For Education & Experience)

If using relational sheets:

1. Add **"Inline List"** component for Education
   - Source: Education sheet
   - Filter: CV ID matches current Row ID
   - Allow adding items: Yes
   
2. Add **"Inline List"** component for Work Experience
   - Source: Work Experience sheet
   - Filter: CV ID matches current Row ID
   - Allow adding items: Yes

---

## Step 4: Create the CV Preview Screen

### 4.1 Add a Detail Screen

1. Create a new screen: **"CV Preview"**
2. Set trigger: When form is submitted
3. Set data source: Current CV row

### 4.2 Design the Preview Layout

Add these components in order:

1. **Title Component**
   - Text: Full Name
   - Style: Large, Bold
   - Alignment: Center

2. **Text Component** (Contact Info)
   - Text: `{Email} | {Phone}`
   - Style: Small
   - Alignment: Center

3. **Link Component** (If links exist)
   - LinkedIn URL
   - Portfolio URL
   - GitHub URL

4. **Rich Text Component** (Professional Summary)
   - Title: "Professional Summary"
   - Content: Professional Summary field
   - Style: Body text

5. **Inline List** (Education)
   - Title: "Education"
   - Source: Education entries
   - Layout: Cards
   - Show: School, Degree, Years

6. **Inline List** (Work Experience)
   - Title: "Work Experience"
   - Source: Work Experience entries
   - Layout: Cards
   - Show: Role, Company, Years, Description

7. **Tags Component** (Skills)
   - Title: "Skills"
   - Source: Skills field
   - Split by: Comma
   - Style: Pills/Tags

---

## Step 5: Add PDF Download Functionality

### 5.1 Enable PDF Export (Glide Pro Feature)

If you have Glide Pro:
1. Add **"Action Button"** to preview screen
2. Button text: "Download PDF"
3. Action: **"Generate PDF"**
4. Template: Select custom template
5. Include: All visible components

### 5.2 Alternative: Use Third-Party Integration

For free tier, use Integromat/Make.com:

1. Add **"Webhook"** action to button
2. Send CV data to webhook
3. Use Make.com to:
   - Receive webhook data
   - Format as HTML
   - Convert to PDF using PDF.co or CloudConvert
   - Email PDF to user

### 5.3 Simple Alternative: Email Template

1. Add **"Send Email"** action
2. To: User's email
3. Subject: "Your CV - {Full Name}"
4. Body: Format CV data in email template
5. Users can print as PDF from email

---

## Step 6: Style Your App

### 6.1 Apply Professional Theme

1. Go to **Settings** → **Theme**
2. Choose color scheme:
   - Primary: #2563eb (Professional Blue)
   - Secondary: #64748b (Neutral Gray)
   - Background: #f8fafc (Light Gray)

### 6.2 Customize Components

For each section:
- Use **headings** for section titles
- Add **dividers** between sections
- Use **card layouts** for education and experience
- Apply consistent spacing (12-16px)

### 6.3 Add Icons

- Personal Info: 👤
- Education: 🎓
- Work Experience: 💼
- Skills: 🔧
- Links: 🔗

---

## Step 7: Configure Actions and Workflows

### 7.1 Form Submission Action

1. On form submit:
   - Add row to CVs sheet
   - Set Row ID (auto)
   - Set Created Date (now)
   - Navigate to CV Preview screen

### 7.2 Add "Create New CV" Action

1. Add button on preview screen
2. Action: **"Navigate"** → Form screen
3. Clear form: Yes

---

## Step 8: Test Your App

### 8.1 Test Form Submission

1. Fill in all required fields
2. Add education entry
3. Add work experience entry
4. Submit form
5. Verify data appears in Google Sheet

### 8.2 Test CV Preview

1. Check all fields display correctly
2. Verify formatting is professional
3. Test on mobile device
4. Test PDF download/email

---

## Step 9: Publish Your App

### 9.1 Configure App Access

1. Go to **Settings** → **Privacy**
2. Choose access level:
   - **Public:** Anyone can use
   - **Email whitelist:** Specific users
   - **Public with email:** Users must sign in

### 9.2 Share Your App

1. Click **"Share"** button
2. Copy app link
3. Share via:
   - Direct link
   - QR code
   - Embed on website

---

## 🎨 Design Tips

1. **Keep it Simple:** Focus on essential information
2. **Mobile-First:** Glide is mobile-optimized by default
3. **Clear Hierarchy:** Use headings and sections
4. **Professional Colors:** Stick to 2-3 colors
5. **Readable Fonts:** Use default fonts for professionalism

---

## 🔧 Advanced Features

### Multi-Template Support

1. Add a "Template" column to CVs sheet
2. Create multiple detail screens for different templates
3. Use conditional navigation based on template choice

### CV Analytics

1. Add columns: Views, Downloads, Last Updated
2. Use Glide's built-in analytics
3. Track which CVs are most viewed

### Sharing Feature

1. Add **"Share"** button
2. Generate public link to CV preview
3. Allow users to share CV directly

---

## 📱 Mobile Optimization

Glide is mobile-first by default, but ensure:
- Forms are single-column on mobile
- Text is readable (min 14px)
- Buttons are thumb-friendly (min 44px height)
- Test on both iOS and Android

---

## 🐛 Troubleshooting

### Issue: PDF not generating
**Solution:** Use email template or third-party integration (Make.com)

### Issue: Multi-entry fields not working
**Solution:** Use relational sheets approach (separate sheets for education/experience)

### Issue: App slow to load
**Solution:** Limit images, optimize data structure, use incremental loading

---

## 📚 Resources

- [Glide Documentation](https://docs.glideapps.com/)
- [Glide University](https://www.glideapps.com/university)
- [Glide Community](https://community.glideapps.com/)
- [Template Gallery](https://www.glideapps.com/templates)

---

## 💡 Next Steps

1. Add CV templates (multiple designs)
2. Implement CV editing functionality
3. Add export to Word/Google Docs
4. Create CV sharing portal
5. Add analytics dashboard

---

**Estimated Build Time:** 30-45 minutes  
**Skill Level Required:** Beginner  
**Cost:** Free (with limitations), $25/month for Pro features
