Influencer Profile Management	Basic information (name, contact, social media accounts, follower count)		
	Profile categorization (micro, macro, mega influencers)		
	Demographic data and audience insights		
	Historical performance metrics		
	Search and filtering capabilities		
	Custom tags and notes management		
Campaign Management	Campaign creation, modification, deletion and tracking (Planned, In Progress, Completed, Cancelled)		
	Campaign budget allocation and tracking		
	Influencer assignment and progress monitoring		
	Automated notification system	Connect to MailChimp	
		Connect to Skype (Make)	
		Connect to Zalo (API)	
Review Management	Review submission tracking	Review approval workflow (Submitted, Under Review, Approved/Rejected)	
	Review content storage		
	Basic review metrics tracking (views, likes, comments)		
	Comment and feedback tracking	Review Feedback Management	Internal team members can write feedback on reviews
			Feedback status management (Active/Resolved/Deleted)
		Revision Request Management	Create detailed revision requests for reviews
			Track progress status of revision requests
	Simple review performance analytics (Dashbard)		
Influencer Recommendation Engine	Campaign-specific influencer matching		
	  - Recommendation based on:	Historical performance data	
		Audience demographics match	
		Content style and quality	
		Category match	
		Follower range	
		Previous campaign success rates	
	Automated scoring and ranking system		
Performance Analytics & Reporting	KPI monitoring and analysis	Reach	
		Engagement rate	
		Conversion rate	
		ROI calculation	
	Custom report generation	Export to CSV/Excel	
Collaboration & Communication	Internal team messaging system	Connect to workflow system	
		Connect to external system (Make)	
	Influencer communication system	Send email (MailChimp)	
		Send message (Zalo)	
API Integration & Automation	Social media platform API integration	"Tiktok
Instagram
Facebook"	
	Automated data processing	Call webhook - Make - action	
		Call zalo API	
		Call API - MailChimp - send mail	
		Gen Docs - Google Sheet - update	
	E-commerce platform integration	Call webhook - wordpress(wc) - post	
Security & Access Control	Role-based access control	Admin, Manager, Viewer	
	Two-factor authentication		
	Audit logging		
	Backup and recovery		
Mobile Accessibility	Mobile-responsive interface		


------

Yêu cầu bổ xung: 

Trang Influencer Data Management

Influencer Profile Card	"Display:

- Avatar: Displayed as a circle for aesthetics and consistency.

- Name: Displayed as text, large and clear font.

- Phone number: Displayed as a link that can be called directly if accessed from a mobile device (unlimited)

- Address: Displayed in full, semicolons can be used to separate more details (unlimited addresses)

- City: Displayed as text.

- Email: Displayed as a mailto link that allows direct email when clicked.

- Links to social media accounts and number of followers: Icons of each platform next to the number of followers, clickable to go to the personal page. (Requires 5 platforms: Facebook, Instagram, Tiktok, Threads, Youtube). Account name

- Influencer level: Displayed as a colored tag for easy identification.

- Main active channel: Displayed as an icon or clear text.

- Occupation, main content genre: Display in text form, bullet points can be used to distinguish items.

- Agency: Display the name of the agency company, can be clicked to see more detailed information.

- Age: Display age.

- Date of birth: Day Month Year

- Gender: Display icon or text (Male/Female/Other)."
	"
Display list of all KOLS

Total number of KOLs I am managing, number of KOLs by level:
Newbie: Under 1000
Nano: From 1000 - 10000
Mirco: From 10000 - 50000
Mid-Tier: From 50000 - 500000
Marco: From 500000 - 1000000
Mega: From 1000000 - 5000000"
	"Celebrity: 

Over 50000000.
Each account will display icons about the social media account that the KOL is active on
Influ level: Le wants the system to automatically enter the define level according to the above level (MKT member will enter follower information) => the system will automatically classify the level and select the main channel."
	"Occupation:

Influencer / Creator / Reviewer / MUA / Model / KOC / MC / Singer / Dancer / Actor / Actress / Fashionista / Stylist / Health Coach / Business Partner / Others / Cosplayer / Host"
	"Content Genre :

Beauty / Fashion / Health, Fitness & Self-help / Education / Travel / People blogs / Family & Parenting / Sports / Home & Howto / Food & Drink / Animal & Pet / Music & Dance / Science & Tech / News / Others

Need data import function, add KOL information Manual"
"Search by:

- Phone Number, City, Followers, Main Activity Channel, Occupation, Main Content Type, Agency, Number of Review Participation, Order of Collaboration Over Time (Within 30 days, 60 days, 90 days)

* Advanced Filters: Filter options by main activity channel, content type, agency, number of review participation and cooperation time (30, 60, 90 days)."	
"Personal information:

- Need to add STK field - bank name and MST.

- Agency: Agency Company (Name - Address - Company phone number - MST), agency manager (name - phone number - address)

+ Need to add STK field - bank name and MST.

- Comment: limited to 2000, can note about booking price, only allow text comments or links, do not paste images. After entering, it will display: Date entered - avatar of the person entering - content."	Requests a function to display information fields similar to Notion: Show details, click on the eye to show, click on the crossed eye to hide (advanced function to be completed later)
"Account authorization: currently no account can export KOL list data

- Manager: full permission (only Manager can view personal information about bank account, tax code).

- Editor: has the right to edit, cannot delete. Manager authorizes.

- Viewer: view and operate on the system"	
"Function to save editing history on KOL and Agency's personal page: 

filter by field name, show results Name of editor, edited field, edited content. time."	
Need data import function, add KOL information Manual	
"Sort:

- Allows sorting by name (alphabetically), influencer level

- Sort interface: Use dropdown or interactive sort icons, with the option to reverse the order from ascending to descending and vice versa."	Default: display KOL information entered into the system chronologically
"Update button: 
There is an ""Update Information"" button to update the number of followers (click once to update the entire platform)."	"New Managers have this right
CRAWLER DATA feature, it will take about 2 weeks. Clicking the button will update all the followers of all channels. Users can choose to update 1 account or all accounts. Each KOL account will need a select button, at the top there will be a select all button => Update button."
Sentiment Analysis and Content Classification: Automatically analyze sentiment and classify the content of Influencer posts to assess positive or negative impact on the brand.	This stage is not necessary yet, data is needed for analysis.
Customize Data Access Levels: Provide granular customization of data access rights for different groups within the organization, securing Influencer's personal information.	
Influencer Trend Forecasting: Use AI to predict follower growth and engagement based on current trends and historical data.	
"Link to information on the campaign page related to the KOL
- What products were sent to the campaigns that participated.
- List of posts in that campaign."	

Trang Content From Influencer Data Managerment

	"Display

- Post Thumbnail: Displays as a small image, when clicked, you can view a larger image or go to the original post.
- Which campaign: The campaign name is displayed as a link, click to view campaign details.
- Performer: Displays the name and avatar of the performer next to the name. The avatar is displayed as a circle.
- Platform: The icon of the platform (eg Facebook, Instagram) where the post is posted.
- Views, likes, shares, comments: Displays the number of each type of interaction right below the thumbnail.
- GMV: Displays the value of goods sold from the post, in VND format.
- Number of products sold: Displays the number of products sold through the post.
- Related brand: Brand logo or brand name in text if the logo has not been updated
- Tag by form: Displays the form of the post (FOC, Commercial, Relationship) in the form of a color tag.
- Posting date: Displays the date of posting.
- Commission Rate: Displays the commission rate received from the post, usually in percentage form."
"Search by:
- Campaign, Brand, Posting Time, Format, Product
* Dynamic search bar: Allows you to enter keywords and display suggestions as you start typing. You can search by campaign, brand, posting time, format, sales volume, commission rate.
* Filter: The filter button allows users to refine results based on the criteria listed."	
"Sort:
- By Time, By Commission Rate, by views, likes, and comments
* Sort Dropdown: Provides options to sort by posting time, commission rate, views, likes, and comments.
* Sort icon: Each column header has an icon indicating the sort direction (ascending or descending) so that users can easily choose."	
"Automated Data Collection:
Develop tools that can automatically collect data. From social media platforms (Incorporate affiliate information)."	
Manual Data Collection: from social media platforms (Incorporate affiliate information).	

-----

Trang Campaign Management

	"Display By
- Campaign image: Display as a round thumbnail
- Campaign name: Display as text
- Implementation time: Display as ""start date - end date""
- Campaign cost: Display in VND amount, formatted with commas to separate thousands, for example 1,000,000 VND.
- Number of Influencers participating (goal): automatically counted in data - if there is no data, leave it as 0
- Actual number of Influencers participating: automatically counted in data - if there is no data, leave it as 0
- Success Rate (%): actual ratio / goal - automatically counted in data - if there is no data, leave it as 0
- Number displayed as a count, can be clicked to see a detailed list of Influencers.
- Key performance indicators (views, likes, comments, shares, new followers): Each indicator displays an icon with the data next to it.
- ROI: Shown as a percentage, e.g. 120%, different colors depending on the level of success (green if above 100%, red if below 100%).

- Related Brand: Brand logo or brand name in text if logo has not been updated

""Display as a table with information fields in the detail function. There is an Edit button next to it
Import the campaign information file with all the information fields like the Detail function

Add campaign manual, User add information:
- Campaign information: Name.
+ Campaign image
+ Implementation time: start date, end date.
+ Cost
+ Brand.
+ Campaign classification: Push sales, Affiliate, Branding.
. Push sales/Branding: Product name - color classification - Price.
. Affiliate: Product name - color classification - Price - % commission"""
"Search By 
- Campaign Name; Time; Brand

Suggestion function when searching"	
"Search Bar:
Allows you to enter a keyword and displays suggestions as a dropdown as you start typing. Searches can be based on campaign name, brand, or time period."	
"Sort
- By campaign name; By execution time; By campaign cost; By number of Influencers involved; By ROI.
* Sort Dropdown: Provides options to sort by campaign name, cost, ROI, etc. Users can choose to sort ascending or descending.
* Sort icon: Each column header is clickable to sort, with a small icon indicating the current sort direction (up or down)."	
"MKT Warehouse Management

""- Need to create a MKT floor in the Company's general warehouse system => from the general warehouse system Mrs.Noh shares stock for the MKT team to use for all campaigns.
- Show list Product name (color classification) - SKU - Total quantity - Product type (FOC/Regular) - Campaign (name of campaigns using this product).
- If the MKT team still has stock and can transfer the product to another warehouse, Mrs.Noh will share stock on the Company's general warehouse software"""	

-----

Detail Each Campaign

"INFLUENCER LIST (DETAILS BY INFLUENCER)

* This section will be displayed as a list table, with clear data columns so that users can track the status and results of each influencer in the campaign

- Avatar and Influencer name:
. The first column displays the avatar and name of each influencer. Below the name will be brief information such as the number of their main followers.

- Contact status:
. This column will show the status of the influencer during the contact process, with clear statuses such as:
. Not contacted (Clock icon, gray).
. Contacting (Contact email icon, yellow).
. Agree to participate (Checkmark icon, blue).
. Refuse to participate
. Order created and ready to send
. Product received (Gift box icon, blue).
. Received product but not posted
. Posted (Post icon, green).
. Post deleted
- Review Category: => has mass update function
. FOC (1 post on any platform)
. Commercial (
. Relationship

- Contact history and feedback:
. This column will include notes about the influencer contact process, updated by the staff. Notes can include information such as: reasons for rejection, requests from the influencer, date of last contact, and detailed feedback from the influencer.
- Number of posts:
. Number of posts on each platform: Shows the total number of posts that the influencer has posted on each platform (Instagram, Facebook, Tiktok, ...). For example: Instagram: 2 posts, Facebook: 1 post.

- Post results:
. Views: Shows the number of views of each post.
. Likes: Shows the number of likes.
. Comments: Shows the number of comments.
. Shares: Shows the number of shares.
. These figures will be displayed with corresponding icons (eyes for views, thumbs for likes, comments for comments, share arrows for shares).

- Number of products sent:
. This column shows the number of products the influencer has received from the company. For example, Influencer A has received 5 products for review.
- Create Marketing Order (MO):
. A button to create a Marketing Order directly from this page, allowing you to send products to the influencer based on the stock assigned to the campaign. When you click on the button, the system will open a form to enter product information and quantity to send, and connect to the company's stock management system.
- Order History (MO History):
. Displays a list of orders that have sent products to the influencer, including the date sent, quantity, and person in charge."	
"After adding new, click on the Edit button to go to the Campaign page

- Add KOL function:

+ Search and select KOL: according to the list on the KOL Management page: display the KOL page and the information fields to filter (Level, main channel, province, gender, occupation).
Search by Phone number, KOL name, Account name.
Results to display KOL information: Name - Phone number - Level - Address - Product - Quantity of products - Contact status. Users can adjust to add or remove the information fields they want to see.

- Manage products in Campaign: Add product function:

+ Assign product button to send to KOL => show Pop-Up list of products in campaign. can fill in quantity of products for each category
+ Create MKT order button: synchronize information about Name - Phone number - Shipping address of KOL - assigned products to create MKT order in the system of the general warehouse, synchronize MKT order ID.
+ Function to create MKT order in bulk: tick the box to select KOL to send products.
- Edit: Selected to edit contact information, edit products (before creating MKT order).
- Function to record contact history with KOL (contact button): NV will click Contact => go to a page to add contact history including information fields Date - Status (select from contact status) - Comment => Save. If you want to add more history, there will be Nut Optional (+).
+ Red statuses, NV needs manual input.
+ If the system has created an order -> automatically update the status ""Order created and ready to send"" => The following statuses MKT continues to Manually update to Received goods/Returned products.
+ The system automatically updates the status based on the most recent information entry.
- Click on Type review => a small page appears to select 1 option => Save => display the results on the KOL list page. Do the order creation step first
- Propose the Mass update function for the Create MKT order field, Type review.

- Manage posts in Campaign:

+ Add Posts button at the end of the line => Show Pop-Up to paste the post link, post platform. There is a + button to add more links for each platform => Save => the system updates the Results table with the total number of links for each platform and the total number of Likes/Shares/Comments/Views of all posts. Next to the total number of posts for each channel, there will be a button to show details of each post: link - Number of likes/shares/comments/views

+ Display results of all KOLs who have received the product - KOL name - Contact status - Review category (synced from product page) - List of posts - Column of number of Likes/Shares/Comments/Views.

+ Type FOC and have uploaded a link to 1 post => auto Status ""Posted"". No link => Status Not posted yet.

+ For Comercial/Relationship + 1 post => NV must update manual status to ""Reviewing"""	
The system automatically updates the number of Likes - Shares - Comments - Views	
"Select the content in that campaign.
The Update button is in the Manage Posts page in Campaign. If the post has been deleted => The Contact Status column will show the status ""Post deleted"""	
DASHBOARD OVERVIEW	"- Campaign name: Displays the campaign name in clear text at the top.

- Campaign objectives:
. Displays the total number of reviews expected to be achieved in the campaign.
. Total number of Influencers expected to participate.
. Total number of interactions (likes, comments, shares, views) expected from all posts.

- Stock used in the campaign:
. Total number of assigned stocks: For example: 100 products are divided for this campaign.
. Number of used stocks: Displays the number of products sent to the influencer, for example: 50 products have been sent.
. Number of remaining stocks: Displays the number of products remaining in stock that have not been used for this campaign, for example: 50 products remaining.
. Stock Usage Progress Bar: The progress bar shows the current stock usage (based on the percentage of the sent quantity over the total assigned quantity).

- Total Influencers Contacted:
. Shows the total number of Influencers contacted for the campaign (Example: 50 Influencers contacted out of 100 initial targets).

. Shows the percentage of Influencers who have agreed to participate (Example: 20% have agreed to participate).

- Post Status:
. Number of posts completed: Example: 10 posts published out of 50 targets.
. Post Ratio across Platforms: A small graph showing the ratio of posts divided across platforms (Instagram, Facebook, Tiktok, ...).
. Total Engagement Achieved: Example: Total number of likes, comments, shares, views from all posts achieved so far."
"Search By:
- Influencer/campaign name: Search by influencer or campaign name.
- Contact status: Filter by status: Not contacted, Contacting, Agreed, Received product, Posted.
- Stock used: Filter by number of products sent.
- Post effectiveness: Filter by views, likes, comments, shares."	
"Sort:
- Influencer name: Sort from A-Z or vice versa.
- Contact status: Sort from not contacted to posted.
- Number of posts: Sort from most to fewest posts.
- Post effectiveness: Sort by total interactions from high to low."
