# Module 8: Creating Interactive Pages by Using HTML5 APIs

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lab: Creating Interactive Pages with HTML5 APIs

### Lab Setup

### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

### Exercise 1: Dragging and Dropping Images

#### Task 1: Review the HTML markup and JavaScript code for the Speaker Badge page

1.	Open Microsoft Visual Studio 2017.
2.	In Visual Studio, on the **File** menu, point to **Open**, and then select **Project/Solution**.
3.	In the **Open Project** dialog box, browse to **[Repository Root]\Allfiles\Mod08\Labfiles\Starter\Exercise 1**, click **ContosoConf.sln**, and then click **Open**.

>**Note**: If **Security Warning for ContosoConf** dialog box appears, clear **Ask me for every project in this solution** checkbox and then click **OK**.
>
>4.	In **Solution Explorer**, expand the **ContosoConf** project node. 
>5.	In **Solution Explorer**, double-click **speaker-badge.htm**.
>6.	Verify that the HTML markup contains the following **&lt;img&gt;** element:
>
>  ```html
>      <img style="width: 300px; height: 300px; border: 1px solid #000"/>
>  ```
>
>7.	Verify that the HTML markup contains the following **&lt;script&gt;** element:
>
>  ```html
>      <script src="/scripts/pages/speaker-badge.js" type="module"></script>
>  ```
>
>8.	In **Solution Explorer**, expand the **scripts** folder, and then expand the **pages** folder.
>9.	Double-click **speaker-badge.js**.
>10.	Verify that the JavaScript file contains the following line of code:
>
>  ```javascript
>      new SpeakerBadgePage(badgeElement);
>  ```

#### Task 2: Add a drag and drop event listeners

1. In **SpeakerBadgePage.js**, find the following comment:

   ```javascript
       // TODO: Add event listeners for element "dragover" and "drop" events.
       //       handle with this.handleDragOver.bind(this) and this.handleDrop.bind(this)
   ```

2. After the comment, add the following JavaScript code:

   ```javascript
       element.addEventListener("dragover", this.handleDragOver.bind(this), false);
       element.addEventListener("drop", this.handleDrop.bind(this), false);
   ```

#### Task 3: Handle the drop event

1. In **SpeakerBadgePage.js**, find the following comment:

   ```javascript
       // TODO: Get the files from the event
   ```

2. After the comment, add the following JavaScript code:

   ```javascript
       const files = event.dataTransfer.files;
   ```

3. Find the following comment:

   ```javascript
       // TODO: Read the first file in the array
   ```

4. After the comment, add the following JavaScript code:

   ```javascript
       const file = files[0];
   ```

5. Find the following comment:

   ```javascript
       //       Check the file type is an image
   ```

6. After the comment, add the following JavaScript code:

   ```javascript
       if (this.isImageType(file.type)) {
   ```

7. Find the following comment:

   ```javascript
        //       Use this.readFile to read the file, then display the image
        //       (Note that this.readFile returns a Promise, so chain ((file)=> this.displayImage(file)) using the "then" method.)
   ```

8. After the comment, add the following JavaScript code:

   ```javascript
   		this.readFile(file).then((file)=> this.displayImage(file));
       } else {
           alert("Please drop an image file.");
       }
   ```

#### Task 4: Read the image by using a FileReader  object

1. In **SpeakerBadgePage.js**, find the following comment:

   ```javascript
       // TODO: Create a new FileReader
   ```

2. After the comment, insert the following JavaScript code:

   ```javascript
       const reader = new FileReader();
   ```

3. Find the following comments:

   ```javascript
       // TODO: Assign a callback function for reader.onload
   
       // TODO: In the callback use resolve([fileDataUrl]); to return the file data URL.
   ```

4. After these comments, insert the following JavaScript code:

   ```javascript
       reader.onload = function (loadEvent) {
           const fileDataUrl = loadEvent.target.result;
           resolve([fileDataUrl]);
       };
   ```

5. Find the following comment:

   ```javascript
       // TODO: Start reading the file as a DataURL
   ```

6. After the comment, insert the following JavaScript code:

   ```javascript
       reader.readAsDataURL(file);
   ```

#### Task 5: Test the Speaker Badge page

1.	In **Solution Explorer**, double-click **speaker-badge.htm**.
2.	On the **Debug** menu, click **Start Without Debugging**.
3.	In Microsoft Edge, if the **Intranet settings are turned off by default** message appears, click **Don’t show this message again**.
4.	On the Windows taskbar, click **File Explorer**, and then browse to **[Repository Root]\Allfiles\Mod08\Labfiles\Resources**.
5.	Drag-and-drop **mark-hanson.jpg** from File Explorer, onto the empty rectangle in Microsoft Edge.

![alt text](./Images/20480B_8_speaker-badge-01.png "The Speaker Badge page with the speaker's photo")

6.	Close Microsoft Edge and File Explorer. 

>**Results**: After completing this exercise, you will have implemented functionality that enables the user to drag-and-drop an image from File Explorer onto the web page.