# Module 11: Creating Advanced Graphics

Wherever a path to a file starts with *[Repository Root]*, replace it with the absolute path to the folder in which the 20480 repository resides. For example, if you cloned or extracted the 20480 repository to **C:\Users\John Doe\Downloads\20480**, change the path: **[Repository Root]\AllFiles\20480C\Mod01** to **C:\Users\John Doe\Downloads\20480\AllFiles\20480C\Mod01**.

# Lesson 1: Creating Interactive Graphics by Using SVG

### Demonstration: Using Scalable Vector Graphics (SVG) Transformations and Events

#### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

#### Transform SVG Elements

1. On the **Start** menu, click the **Desktop** tile.

2. On the taskbar, click **Microsoft Edge**.

3. In Microsoft Edge, open the **[Repository Root]\Allfiles\Mod11\Democode\SvgDocument.html** file.

4. If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.

   ![image-20200930084642570](image-20200930084642570.png)

5. In Microsoft Edge, click **Transformations**.

   ![image-20200930084704110](image-20200930084704110.png)

6. in Microsoft Edge, right-click the webpage, and then select **View source**.

7. ![image-20200930084814702](image-20200930084814702.png)

8. In the source window, locate the **&lt;!-- Demonstrate transformations --&lt;** comment, and then review the **&lt;svg&gt;** element:

   ![image-20200930101336832](image-20200930101336832.png)

- The **<transform>** elements translate the square by **200** units in the X and Y axes, scale it by a factor of **0.5**, and then rotate it.

  ![image-20200930101909616](image-20200930101909616.png)

8.	Close the source window.

#### Handle Events on SVG Elements

1. In Microsoft Edge, click **Events**.

   ![image-20200930111207655](image-20200930111207655.png)

2. Place the mouse pointer over the red shape on the left side of the window. Verify that the color of the shape changes to yellow with a dotted green border.

   ![image-20200930112803194](image-20200930112803194.png)

3. Move the mouse pointer off the shape. Verify that its color reverts to red with no outline.

4. Place the mouse pointer over the blue shape on the right side of the window. Verify that the color of the shape changes to yellow with a dotted green border.

   ![image-20200930112923014](image-20200930112923014.png)

5. Move the mouse pointer off the shape. Verify that its color reverts to blue with no outline.

6. Click the red shape. Verify that a message box appears, indicating that the shape represents Alaska. Close the message box.

7. Click the blue shape. Verify that a message box appears, indicating that the shape represents Hawaii. Close the message box.

   ![image-20200930112947969](image-20200930112947969.png)

8. Right-click in the browser window, and then select **View source**.

9. In the source window, locate the **&lt;!-- Demonstrate events --&gt;** comment, and then review the **&lt;svg&gt;** element:

- The **&lt;path&gt;** elements contain the data that defines the two maps.

- Each **&lt;path&gt;** element responds to the **onmousedown** event and uses JavaScript code to display the appropriate message.

  ![image-20200930113221353](image-20200930113221353.png)

10. In the source window, locate the **path:hover** Cascading Style Sheets (CSS) rule near the top of the document. This CSS rule defines the style for all **&lt;path&gt;** elements when the user places the mouse pointer over them.

    ![image-20200930113320672](image-20200930113320672.png)

11. Close the source window.

12. Close Microsoft Edge.

>**Note**: The HTML document has two buttons that enable you to demonstrate transformations and events. There is a separate **&lt;svg&gt;** element for each part of the demonstration. When you click one of the buttons on the page, the page uses the DOM to locate the appropriate **&lt;svg&gt;** element for that part of the demonstration.
>When you click **Transformations**, the webpage displays two rectangles. The first rectangle is not transformed. The second rectangle has three transformations applied to it: a translation, a scale, and a skew in the X direction.
>When you click **Events**, the webpage displays two **&lt;path&gt;** shapes representing Alaska and Hawaii. To display a message box when the user clicks the shape, the **onmousedown** event is handled on each shape. The webpage also defines a CSS rule that changes the color of the shape when the user places the mouse pointer over the shape.


# Lesson 2: Drawing Graphics by Using the Canvas API

### Demonstration: Performing Transformations by Using the Canvas API

#### Preparation Steps

Ensure that you have cloned the 20480C directory from GitHub (**https://github.com/MicrosoftLearning/20480-Programming-in-HTML5-with-JavaScript-and-CSS3/tree/master/Allfiles**). It contains the code segments for the labs and demos in this course.

#### Demonstration Steps

#### Perform Simple Transformations

1. On the **Start** menu, click the **Desktop** tile.

2. On the taskbar, click **Microsoft Edge**.

3. In Microsoft Edge, open the **[Repository Root]\Allfiles\Mod11\Democode\CanvasDocument.html** file.

4. If a message box appears asking if you want to allow blocked content, click **Allow blocked content**.

5. In Microsoft Edge, click **Separate Transformations**.

   ![image-20200930113422667](image-20200930113422667.png)

6. In Microsoft Edge, right-click the webpage, and then select **View source**.

7. In the source window, locate the **demoSeperateTransformations** function, and then review the code:

- The **demoSeperateTransformations** function uses the **drawShape** function to draw a triangle filled with an image of the Welsh flag.

- Before calling the **drawShape** function, the code transforms the context. It moves the canvas to the right and down by half the width and height of the canvas, then it scales the context by a different value in the X and Y dimensions, and then rotates the context by **pi/4** radians.

  ![image-20200930113517629](image-20200930113517629.png)

- When the **drawShape** function is called, the image is transformed according to the context settings.

>**Note**: If time allows, comment out each of the transformations and run the code again. Then, uncomment each transformation one at a time, so that students can see the effects of each one.

#### Perform Matrix Transformation

1. In Microsoft Edge, click **Matrix Transformations**.

   ![image-20200930113605610](image-20200930113605610.png)

2. In the source window, locate the **demoMatrixTransformations** function, and then review the code:

   ![image-20200930113648498](image-20200930113648498.png)

- This function is similar to the previous one in that it transforms the context, and then calls the **drawShape** function to display the image.
- The difference is that this function uses the **transform** function to perform a matrix transformation, and scales, skews, and translates the context in a single function call.

3.	Close the source window.
4.	Close Microsoft Edge.

>**Note**: When you click **Separate Transformations**, the webpage invokes the **demoSeparateTransformations()** function. This function invokes separate transformation functions in the two-dimensional context. Explain these functions. Also point out the **save()** and **restore()** function calls, which save the initial context, and then restore it at the end of the drawing operations.
>When you click **Matrix Transformations**, the webpage invokes the **demoMatrixTransformations()** function. This function performs a composite relative transformation on the coordinate system by using the **transform()** function. The code also contains a commented-out call to **setTransform()** to show how to perform an absolute transformation. Explain the difference between **transform()** and **setTransform()**.

