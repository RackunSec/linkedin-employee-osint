# linkedin-employee-osint
This is just a simple vanilla JavaScript app to scrape employees from company page. This is useful for red team/pentest engagements in which reconnaissance is in the statement of work. It simply looks at the page for elements and parses out the names (and other info) of the employees listed.

## Options
There are different options available. Each is it's own block of code.
* Employee names only
* Employee names + titles (CSV)

## Usage
This tool requires you to have a Linkedin.com account to use.
  1. Log into Linkedin.com
  2. Search for your client's company page
  3. Click on "People" in the navigation bar of the client's page
  4. Scroll down and load the page with as many employees as you wish
  5. Open Developer tools in console
  6. Scroll down as far as you'd like to populate the page with as many employees are you wish to scrape
  7. Paste in my code (choose which option you prefer for your test)
  8. Copy the output to a file
  
