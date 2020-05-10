# Magnusson Informatica

![Multi device Screenshot](https://github.com/Magnusson95/Magnusson-Analytica/blob/master/wireframes&responsiveness/index-responsiveness.JPG?raw=true)

Magnusson Analytica is the new company created by myself following an influx of Data Analytical contracts. You can visit the site [here](https://magnusson95.github.io/Magnusson-Analytica/index.html).

Potential customers will come to the site for information on the work I provide and can contact me to request a job.

Those that are new to data analytics and want to understand more about the field can also go to the Blog section to learn more, as a side passion of Magnusson Analytica is coaching and training to help the Tableau community grow.

---

# Contents

1. [UX](#ux)
2. [Features](#Features)
3. [Technologies](#Technologies)
4. [Languages](#Languages)
5. [Libraries](#Libraries)
6. [Testing](#Testing)
7. [Deployment](#Deployment)
8. [Credits](#Credits)

## UX

##### User Stories

- "As myself (Alex), I want to promote my skills as a data analyts, so I can get job offers"
- "As a company, I want to send Alex an email, so I can request his services on a data project"
- "As a research company, I want to see the analytical portfolio, so I can understand about global trend metrics"
- "As a junior data analyst, I want to see the analytical portfolio, so I can get inspiration for my own work"
- "As a senior data analyst, I want to contact Alex, so I can collaborate on a blog/data visualisation"
- "As a junior data analyst, I want to subscribe, so I can get notified of new posts"
- "As a junior data analyst, I want to visit the blog page, so I can learn new Tableau tips"

##### Design Choices

- Pagination style with distinct pages for each section
- A video demoing one of my visualisations shows on the front screen to allow users a clear, quick view of what I do, this is supplemented with text and invitations to view my portfolio, my blog and an easy "callback" feature for instant user contact.
- Orange was used as one of the primary colours (#ff6d02) as this links to the branding choices of the main software that I use - Tableau. This was complemented with a dark blue (#00305a) as the main text colour to allow the orange to pop more for action buttons and titles; the blue has been purposefully darkened as I feel this gives a more modern look.
- Poppins is the main font family used which is well suited to large font sizes which feature throughout the page and blends well with the professional style of the website.
- The navbar is hidden away, with Javascript animation to show it full screen, to keep a clean view

##### Wireframes

I used [Balsamiq](https://balsamiq.com/) to create detailed wireframes for each page at a mobile level and then at a desktop level to keep with the Mobile First design approach.

As is to be expected certain elements present in the wireframes did not make it into the project itself but may yet do so further down the line.

You can find my wireframes [here](https://github.com/Magnusson95/Magnusson-Analytica/tree/master/wireframes%26responsiveness).

## Features

##### Existing Features

- Collapsed Navbar to keep clean header.
- Intro section in index.html with demo video of my work, summary of the type of work I do and the software that I use
- Software that I use includes jQuery to display more information about each piece of software.
- Contact section with name, email and text input fields.
- Contact details including email address (automatically opens to send mail), company address which opens to a google maps link of the location, google maps API of the company address and social links.
- Portfolio page with links to various examples of work (currently 1 project shown).
- Blog page with links to various examples of work (currently 1 blog shown).
- Individual portfolio pages contain Tableau APIs with interactive views of data visualisation work I have done.
- Individual blog pages with mobile responsive blog posts I have written.
- Javascript enabled pop up windows throughout the website to offer easy forms for Subscription and Callback Requests.

##### Features Left to Implement

- The addition of more blogs and examples of work.
- Filters on the blog and portfolio pages to filter through types of posts.

## Technologies

- [Github](https://github.com/) to host this project's respositories.
- [VS Code](https://code.visualstudio.com/) IDE of choice for development.
- [Git](https://en.wikipedia.org/wiki/Git) for version control
- [Google Chrome developer tools](https://developers.google.com/web/tools/chrome-devtools) for testing and troubleshooting.
- [Coolors](https://coolors.co/) for colour schemes.
- [W3C Markup Validation](https://validator.w3.org/) used to validate HTML.
- [W3C CSS validation](https://jigsaw.w3.org/css-validator/) used to validate CSS.

## Languages

- [HTML](https://en.wikipedia.org/wiki/HTML) to build the page.
- [CSS](https://en.wikipedia.org/wiki/Cascading_Style_Sheets) to style the page.
- [Javascript](https://en.wikipedia.org/wiki/JavaScript) to add interactivity.

## Libraries

- [Font Awesome](https://fontawesome.com/) for icons.
- [Google Fonts](https://fonts.google.com/) used for fonts.
- [jQuery](https://jquery.com/) used for easier integration of Javascript.

## Testing

##### Internet Browsers

The same process of opening up the live page and meticulously clicking all links, buttons, and re-sizing of windows was utilized in the following browsers:

- Google Chrome - Main browser of choice for development.
- Microsoft Edge – All working as intended besides flex at minimum width
- Mozilla Firefox - No issues. Everything works as intended.
- Safari - All working as intended.

The site has been tested physically on a number of mobile devices including:

- iPhone 5, 7, 10 and 11
- Google Pixel
- Galaxy S9.

Various examples of multiple screen sizes on different pages of the site can be found [here](https://github.com/Magnusson95/Magnusson-Analytica/tree/master/wireframes%26responsiveness)

Javascript tested through user testing during each stage of writting. Including confirmation of API connection, API verification, API customisation and user testing of jQuery with Google Chrome Developer Tools.

Initial links to the Tableau API did not work, but the removal of jQuery and implementation of pure Javascript, plus a new API key, fixed this issue.

API customisation of of the Tableau Dashboard included some sizing issues, especially when on smaller devices. Each device size was tested individually for rendering issues and subsequently fixed.

Google Maps API saw no major issues. The Code Institute training was used to implement this API and then further customisation was done through the Google Maps API documentation, meaning no bugs occurred during testing.

Email JS API saw some minor issues with verification of the API link, this was rectified through resubmitting the API link. Bug messages were built in for successful or unsuccessful runs of the API. This was tested in a number of ways, from various devices and consol messages were checked.

Speed was also tested using [Pingdom](https://tools.pingdom.com/#5c7e3a4008c00000) and the site received a performance grade of 81/100

##### Issues and Resolutions

Software hover scale transformation was causing items to overflow, leading to extra, unwanted scrollbars. Reduction of the scale fixed this issue.

Many views required the reordering of entire sections of the webpages when moving between mobile and desktop to get the desired view. Due to the fact I had already advanced through most of the structure and styling, the best way to rectify this was to work with "display: none"

##### Known Issues

- All responsiveness working on Microsoft Edge except minimum flex view.

## Deployment

Bere Gloria was developed on GitPod, using git and GitHub to host the repository.

**When deploying Bere Gloria using GitHub Pages be sure to follow these steps:**

1. Navigate to '/Magnuson95/Magnusson-Analytica' or alternatively click
2. In the top navigation click on 'settings'.
3. Scroll down to the GitHub Pages area.
4. Select 'Master Branch' from the 'Source' dropdown menu.
5. Click to confirm my selection.
6. Magnusson Analytica should now be live on GitHub Pages.

**In order to run Bere Gloria locally be sure to follow these steps whilst still on Github:**

1. Navigate to '/Magnusson95/Magnusson-Analytica' or alternatively click [here](https://github.com/Magnusson95/Magnusson-Analytica).
2. Click the green 'Clone or Download' button.
3. Copy the url in the dropdown box.
4. Using your IDE of choice open up your preferred terminal.
5. Navigate to your desired file location.
6. Copy the following code and input it into your terminal to clone Magnusson Analytica.

`git clone https://github.com/Magnusson95/Magnusson-Analytica.git`

## Credits

### Content

- All content was created by me.
- The first blog post took inspiration from Ridhima Gupta's Tableau 2019 conference presentation on the Design Process.

### Media

- Product photos created by myself.
- Backgrounds provided by [Wallhere](https://wallhere.com/).
- Icons provided by [PNG Tree](https://pngtree.com/free-logo-png).
