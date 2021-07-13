# Module 3: Introduction to JavaScript

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 1: Overview of JavaScript

### Demonstration: Creating a Simple Javascript File that Defines Variables, Array, and Functions

#### Preparation Steps 

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course. 

#### Demonstration Steps

#### Create new project

1. Open Microsoft Visual Studio 2017.
2. In **Microsoft Visual Studio**, on the **File** menu, point to **New**, and then click **Project**.
3. In the **New Project** dialog box, in the left pane, under **Installed**, expand **Visual C#**, and then click **Web**.
4. Click **ASP.NET Empty Web Application(.NET Framework)**.
5. In the **Name** box, enter **HtmlBasics**.
6. In the **Location** box, enter **[Repository root]Allfiles\Mod03\Labfiles\Starter\Exercise 1**, and then click **OK**.
7. In the **New ASP.NET Web Application- HtmlBasics** dialog box, Select **Empty** and then click **OK**.

#### Add the index page

1. In **HtmlBasics - Microsoft Visual Studio**, on the **Project** menu, click **Add New Item**.

2. In the **Add New Item – HtmlBasics** dialog box, click **HTML Page**.

3. In the **Name** box, enter **index.html**.

4. Click **Add**.

5. Open the **index.html** file.

6. In the **index.html** file, add the following text:

   ```html
        <!DOCTYPE html>
        <html>
        <head>
            <meta charset="utf-8" />
            <title>HTML Basic</title>
        </head>
        <body>
   
        </body>
        </html>
   ```

#### Add the JavaScript file

1. Right-click **HtmlBasics**, Point to **Add** and then select **New folder**. Type **Scripts**.

2. Right-click the **Scripts** folder, select **Add**, and then click **New Item**.

3. In the **Add New Item – HtmlBasics** dialog box, click **JavaScript File**.

4. In the **Name** box, enter **indexScript.js**.

5. Click **Add**.

6. Open the **indexScript.js** file.

7. To create an **Init** function, enter the following code: 

   ```javascript
        function init() {
        }
   ```

8. Define an array of people with the **Name**, **Age**, and **Email** properties, enter the following code:

   ```javascript
        const personsLst = [
        {
            name: 'Adam adam',
            age: 22,
            email: 'adam@example.com'
        },
        {
            name: 'eve perkins',
            age: 18,
            email: 'eve@example.com'
        },
        {
            name: 'melvin wood',
            age: 20,
            email: 'melvin@example.com'
        },
        {
            name: 'signe lorenzo',
            age: 19,
            email: 'signe@example.com'
        },
        {
            name: 'william rasmussen',
            age: 25,
            email: 'william@example.com'
        }]
   ```

9. To define an **age** property, enter the following code:

   ```javascript
       const age = 20;
   ```

10. Create a function that receives the array of people and the **age** property, and then returns a new array with all the people above the defined age, enter the following code:

   ```javascript
        function getPersonsAboveAge(array, age) {
            const personAboveAge = [];

            for (let person of array) {
            
                if (person.age >= age) {
                    personAboveAge.push(person);
                }
            }
            return personAboveAge;
        }
   ```

11. Create a function that receives an array and prints it to the console by using a **for** loop, enter the following code:

   ```javascript
        function printArray(array) {
            for (let i = 0; i < array.length; i++) {
                console.log(`${array[i].name} (${array[i].age}) ${array[i].email}`);
            }
        }
   ```

12. Call the **printArray** function from the **init** function with the complete array, enter the following code:

   ```javascript
        printArray(personsLst);
   ```

13. Call **getPersonsAboveAge** with the array and the **age** property that we defined earlier, and then save the return value in a **const** property, enter the following code:

   ```javascript
        const personAboveAge = getPersonsAboveAge(personsLst, age);
   ```

14. Call the **printArray** function again but now with the array of people above the defined age, enter the following code:

   ```javascript
        printArray(personAboveAge);
   ```

15. On the **index.html** page, to the **&lt;Head&gt;** element, add the folowing script tag:

   ```html
        <script src="/Scripts/indexScript.js"></script>
   ```

#### Run the web application

1.	In Solution Explorer, double-click **Properties**.
2.	In the left pane, click **web**.
3.	Select the **specific page**, click **...**, and then select **Index.html** and click **OK**. 
4.	Click **IIS Express (Microsoft Edge)**.
5.	To see the console, in Microsoft Edge, press F12.
6.	Verify that the array prints to the console.
7.	Close Microsoft Edge, and then return to Visual Studio.
