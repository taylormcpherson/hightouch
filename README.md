# Hightouch Docs
*Frontend Engineer Assessment*

The goal of this project is to create a high-fidelity prototype of a homepage layout for Hightouch's Documentation. Design mockups were provided via [this figma file](https://www.figma.com/file/TEl4aPk6a29pRzYcE3gFK2/Frontend-Interview).


**You can view the live prototype [here](https://taylormcpherson.github.io/hightouch/)**, hosted on GitHub Pages.
For further inspection, feel free to download the source code. 


## Author Contact Info
Created by **Taylor McPherson** for Hightouch. 
- email: taylormcpherson.dev@gmail.com
- phone: 808.647.0908
- [portfolio / resume](https://taylormcpherson.dev)


## Frameworks and Preprocessors Used
- [Create React App](https://github.com/facebook/create-react-app)
- SCSS/SASS styling


## Notable Achievements
All project requirements are met, alongside some add-ons for design and accessibility.

- I duplicated the last article card to further highlight the flex layout of it's container, as well as my decision to make the top and side navigation bars sticky. I believe this provides the best user experience as the list of article cards could be very long theoretically.

- On top of button and card hover states, I also added focus states for all focusable elements on the page. This was to improve site accessibility.

- My design decisions for button and card hover states were the result of online research as well as my personal UX decisions on what would best fit the brand. Hightouch is a modern, fast-growing, data-driven startup that needs all styles and UX features to reflect this identity. I wanted to keep my states simple, minimal, and yet still exciting and delightful to interact with. I made sure to stay within the provided color themeing of the figma file, and attempted to only elevate the already fantastic design of the page.

- I tested across the four most-used browser (chrome, safari, edge, firefox), different screen sizes (web, tablet, mobile), and ran various accessibility tests like tabbing through the page and using chrome's Lighthouse plugin.

- I added alt text for all images.


## Accessibility Suggestions
The mockup provides almost excellent accessibility in terms of color ratios. I used the Chrome plugin "Lighthouse" for an initial accessibility audit. The audit found only one element that does not pass full AAA compliance. With this in mind, I suggest the following:

- Increase opacity on the "Read Article" link on each article card. 

- Collaborate with the designers on the focus states I have implemented to ensure both an aesthetic and accessible experience for all readers.

- Collaborate with copywriters or content-editors on alt text for all images to ensure visually impaired users, or those with a screen reader have an optimal experience.


## Room for Improvement
- I did not have export rights to the figma file, so I utilized the react-icons plugin as well as standard font-awesome icons to get as close as I could for now. The same goes for images, although I was able to get the image url's from Hightouch's blog online.

- One of the fonts, Proxima Nova, was not free so I was unable to import it. I coded the elements that used it as I would if it were imported, with a fall back of sans-serif.

- This was my first time using React Native. I typically code in vanilla javascript, and have played around in Gatsby over the last two months. I found the language intuitive to pick up, but there are certainly best practices I may have missed. I am eager to continue learning and ameliorating my abilities in React.

- My greatest challenge was figuring out the optimal way to load JSON data into my nav bar. I am very familiar working with JSON data throughout my projects, but I was less sure how to best implement this within React. I ended up using two approaches:

  - Data files within the component. I included data files for the nav bar as well as the "dive deeper" cards in the component folder. I imported the data to the component and mapped through it's objects to obtain the necessary data.

  - AJAX in the data from the public folder. I attempted an AJAX call via a data.json file in my public folder. While I am not grabbing my prototype data from this approach, I am storing it in my app and console logging the result of the navigation data. I did this mainly to show another approach for learning's sake.

     JSON Manipulation in React is another area I am eager to improve in and would love to learn the best approach to it.

- I did not implement typescript for this project due to the timeline and my lack of familiarity with it. However, my experience in java and javascript lead me to believe that I would pick it up quickly. It is a language I am excited to dive deeper into with some hands-on experience.

- With more time, I would like to do more thorough accessibility auditing through a screen reader.

- I would like to improve the overall performance of my app through js minification, image hosting, and other approaches that would make for a more performant app.

## Works Cited
### Images Used
- [3 Great Ways of Scheduling a Hightouch Sync]('https://hightouch.io/static/7374521fcd5df77a293a422bb14bc342/Frame_22_459a12290a.png')
- [Data Integration: The Definitive Guide](https://hightouch.io/static/4092e3539fd8b90ef60696e52c2bad19/Data_Integration_The_Definitive_Guide_852b8c6bbb.png)


### Help Sources
- Articles to help understanding JSON files in relation to React. [Here](https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components) and [this one too](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app).
