# Hightouch Docs | Frontend Engineer Assessment 

The goal of this project is to create a high-fidelity prototype of a homepage layout for Hightouch's Documentation. Design mockups were provided via [this figma file](https://www.figma.com/file/TEl4aPk6a29pRzYcE3gFK2/Frontend-Interview).


**You can view the live prototype [here](https://taylormcpherson.github.io/hightouch/)**, hosted on GitHub Pages.
For further inspection, feel free to download the source code. 


## Author Contact Info
Created by *Taylor McPherson* for Hightouch. 
- email: taylormcpherson.dev@gmailcom
- phone: (808)647-0908
- [portfolio / resume](https://taylormcpherson.dev)


## Frameworks and Preprocessors Used
- [Create React App](https://github.com/facebook/create-react-app)
- SCSS/SASS styling


## Notable Achievements
All project requirements are met, alongside some add-ons for design and accessibility.

- I added a copy of the last article card to further highlight the flex layout of the cards, as well as to highlight my decision to make the navigation top and side bars sticky. I believe this provides the best user experience as the list of article cards could be very long theoretically.
- I not only added hover states to the buttons and cards, but also provided focus states for all focusable elements on the page. This was to improve site accessibility.
- My design decisions for button and card hover states were the result of online research as well as my personal UX decisions on what would best fit the brand. Hightouch is a modern, fast-growing, data-driven startup that needs all styles and UX features to reflect this identity. I wanted to keep my states simple, minimal, and yet still exciting and delightful to interact with. I made sure to stay within the provided color themeing of the figma file, and attempted to only elevate the already fantastic design of the page.
- I tested across the four most-used browser (chrome, safari, edge, firefox), different screen sizes (web, tablet, mobile), and ran various accessibility tests like tabbing through the page and using chrome's Lighthouse plugin.
- I added alt text for all images.


## Accessibility Suggestions
The mockup provides almost excellent accessibility in terms of color ratios. I used the Chrome plugin "Lighthouse" for an initial accessibility audit. The audit found only one element that does not pass full AAA compliance. With this in mind, I suggest the following:

- Increase opacity on the "Read Article" link on each article card. 
- Collaborate with the designers on the focus states I have implemented to ensure both an aesthetic and accessible experience for all readers.
- Collaborate with copywriters or content-editors on alt text for all images to ensure visually impaired users, or those with a screen reader have an optimal experience.


## Room for Improvement
- I did not have export rights to the figma file, so I utilized font-awesome and feather icons to get close to the comp for my purposes. The same goes for images, although I was able to get the image url's from Hightouch's blog online.
- This was my first time using React Native. I typically code in vanilla javascript, and have played around in Gatsby over the last two months. I found the language intuitive to pick up, but I am sure there are best practices I may have missed. I am eager to continue learning and ameliorating my abilities in React.
- My greatest challenge was figuring out the optimal way to load JSON data into my nav bar. I am very familiar working with JSON data throughout my projects, but I was less sure how to best implement this within React. I ended up using two approaches:
  1) I included data files for the nav bar as well as the "dive deeper" cards in the component folder. I imported the data to the component and mapped through it's objects to obtain the necessary data.
  2) I also attempted an AJAX call via a data.json file in my public folder. While I am not grabbing my prototype data from this approach, I am storing it in my app and console logging the result of the navigation data. 
 This is another area where I am eager to improve in and would love to learn the best approach to it.
- On a similar note, I did not implement typescript for this project as I typically only work in vanilla javascript. My experience in java and javascript make me believe I would pick it up quickly, and it is a language I am excited to dive deeper into with some hands-on experience.
- With more time, I would like to do more thorough accessibility auditing through a screen reader.

## Works Cited
### Images Used
- [Bernie in Seurat Painting](https://pbs.twimg.com/media/EsQd6UCXYAMFxAi?format=jpg&name=900x900)
- [Bernie Sits with Michael Scott](https://pbs.twimg.com/media/EsRS1vBXYAMp28p?format=jpg&name=900x900)


### Help Sources
- Articles to help understanding JSON files in relation to React. [Here](https://www.pluralsight.com/guides/load-and-render-json-data-into-react-components) and [this one too](https://www.pluralsight.com/guides/fetch-data-from-a-json-file-in-a-react-app).
