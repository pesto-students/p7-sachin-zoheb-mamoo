# What is a web browser?

A software application used to access information on the World Wide Web is called a Web Browser. When a user requests some information, the web browser fetches the data from a web server and then displays the webpage on the user’s screen.

## So what happens, exactly?

When you type a web address into your browser (for our analogy that's like walking to the shop):

1.  The browser goes to the DNS server, and finds the real address of the server that the website lives on (you find the address of the shop).
2.  The browser sends an HTTP request message to the server, asking it to send a copy of the website to the client (you go to the shop and order your goods). This message, and all other data sent between the client and the server, is sent across your internet connection using TCP/IP.
3.  If the server approves the client's request, the server sends the client a "200 OK" message, which means "Of course you can look at that website! Here it is", and then starts sending the website's files to the browser as a series of small chunks called data packets (the shop gives you your goods, and you bring them back to your house).
4.  The browser assembles the small chunks into a complete web page and displays it to you (the goods arrive at your door — new shiny stuff, awesome!).
# Browser's Components -

The browser's main components are :

**1. The user interface:**

This includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.

**2. The browser engine:**  marshals actions between the UI and the rendering engine.

**3. The rendering engine :**

Responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.

**4. Networking:**

For network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.

**5. UI backend:**

Used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.

**6. JavaScript interpreter.**

Used to parse and execute JavaScript code.

**7. Data storage.**

This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

![enter link description here](https://i.imgur.com/VcpjfPL.png)

### **Role of Rendering Engine:**

Once a user requests a particular document, the rendering engine starts fetching the content of the requested document. This is done via the networking layer. The rendering engine starts receiving the content of that specific document in chunks of 8 KBs from the networking layer. After this, the basic flow of the rendering engine begins.
![enter image description here](https://browserstack.wpenginepowered.com/wp-content/uploads/2019/11/Screenshot-2019-11-12-at-3.26.19-PM.png)
The four basic steps include:

1.  The requested HTML page is parsed in chunks, including the external CSS files and in style elements, by the rendering engine. The HTML elements are then converted into DOM nodes to form a  **“content tree” or “DOM tree.”**
2.  Simultaneously, the browser also creates a  **render tree.** This tree includes both the styling information as well as the visual instructions that define the order in which the elements will be displayed. The render tree ensures that the content is displayed in the desired order.
3.  Further, the render tree goes through the  **layout process.**  When a render tree is created, the position or size values are not assigned. The entire process of calculating values for evaluating the desired position is called a layout process. In this process, every node is assigned the exact coordinates. This ensures that every node appears at an accurate position on the screen.
4.  The final step is to paint the screen, wherein the render tree is traversed, and the renderer’s  **paint()**  method is invoked, which paints each node on the screen using the UI backend layer.

# How browsers work
We type a URL and press the enter and the server responds with index.html. However, an HTML content is not what we see when we visit a website... we see a web page with colors and backgrounds and animations and pictures. So there's a process that turns the HTML content to a pretty webpage, and that is parsing and rendering!
![enter image description here](https://res.cloudinary.com/practicaldev/image/fetch/s--XmDic9nA--/c_limit,f_auto,fl_progressive,q_66,w_880/https://dev-to-uploads.s3.amazonaws.com/i/vxpx8zzyg2rcguv7kfpp.gif)

# HTML Parsing

So we have HTML content at the beginning which goes through a process called tokenization, tokenization is a common process in almost every programming language where code is split into several tokens which are easier to understand while parsing. This is where the HTML's parser understands which is the start and which is the end of the tag, which tag it is and what is inside the tag.

Now we know, html tag starts at the top and then the head tag starts before the html ends so we can figure out that the head is inside html and create a tree out of it. Thus we then get something called a parse tree which eventually becomes a DOM tree as shown in the image below:  
[![An image showing how HTML Parsing works with HTML content at the top then tokenization and a DOM tree](https://res.cloudinary.com/practicaldev/image/fetch/s--40NGH5el--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/o91r8lupx8elero5djh3.png)

DOM tree is what we access when we do  `document.getElementById`  or  `document.querySelector`  in JavaScript.

Just like HTML, CSS goes through a similar process where we have the CSS text and then the tokenization of CSS to eventually create something called a CSSOM or CSS Object Model.

This is what a CSS Object Model looks like:  
[](https://res.cloudinary.com/practicaldev/image/fetch/s--maAtq7ut--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/vg9595umg17jzkcdvm7f.png)

Awesome! now we have DOM and CSSOM so we got every information that is required to get our screens painted!

# Rendering of Web Page

For rendering, a DOM and CSSOM are merged to form something called a Render Tree. Render Tree has the information required to mark and paint elements on the screen.  
![A diagram showing DOM tree and CSSOM tree being merged to form Render Tree, Few things to note are render-tree does not include head, link, script, and elements with display none](https://res.cloudinary.com/practicaldev/image/fetch/s--T2Lw75n3--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/0av60eim9egeoihfdfo1.png)

Also while forming a Render Tree, elements like  `<head>`,  `<link>`,  `<script>`, and elements with 'display: none' in CSS are ignored since they are not rendered on the screen.

Note that the elements with 'opacity:0' or 'visibility: none' are included in the render tree, even though they are not painted on the screen they do take their positions and render as an empty space and thus are required for calculations.

So now we have a render tree with all the information that is needed to create a visual page. Now, the renderer will use this information to create a Layout and then a Paint, we will talk about Layout and Paint in next point before that here's what the overall process looks like:

![A diagram displaying that DOM and CSSOM come together to form Render Tree and then the Layout happens and then at the end the Paint happens](https://res.cloudinary.com/practicaldev/image/fetch/s--uJ44oL2X--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/s0cj1gr1srugpkc34985.png)

## Layout

The layout is where the elements are marked on the screen. The layout includes all the calculations and mathematics behind an element's position so it takes all the properties related to the position (height, width, position, top left right bottom, etc) from The Render Tree and places the elements on the screen.

## Paint

After Layout, a Paint happens. Paint takes properties like color, background-color, border-color, box-shadow, etc. to paint the screen with colors.

After the paint, we see the content on the screen and the first time we see something other than a white screen is called 'First Paint'. The term First Paint is used in performance reports to show how long your website took to show something on the screen.


## Script Processor

The  script  processor executes Javascript code to process an event.

