# etch-a-sketch
06.02.2023: Second version of Etch-A-Sketch

Implementation:
- Resizing

ToDo:
- Improve layout

Trained/Learned:
Adding the resizing caused me to encapsulate the canvas generation into its own function. Since I intended to do this from the beginning, only minor restructuring was necessary. This exemplified the importance of encapsulation and planning to me.
My first try didn't update the event listeners of the pixels. This meant, that sketching on the resized canvas was not possible. This bug was found quickly by investigating with the developer tools.
Summary:
- DOM-manipulation with JS
- Encapsulation of functionality
- Bugfixing
- Combining DOM-manipulation with updating event listeners


05.02.2023: First version of Etch-A-Sketch

Implementation:
- Basic layout using flexbox
- Sketching
- Clearing the canvas
- Changing mode from Black/White to Rainbow


ToDo:
- Improve layout
- Resizing


Trained/Learned:
After a longer pause because of my afterwork courses, I used this stop of the project to get back into TOP. 
The html-part of Etch-A-Sketch was no Problem, since it is very basic. The CSS-part forced me to read up on flexbox once again.
The main part of this project is JS. In this project, I first used JS to create main parts of the DOM. At first I tried to append a single node multiple times, before realizing I needed to append clones. The implementation of sketching was quite fast, although I did encounter a bug which collapsed the height of my rows, if a complete row was colored. I solved this by moving away from adding inline style via JS and instead started to modify the style attributes directly. The implementation of the rainbow mode as well as switching modes went without any problems.
Summary:
- Flexbox
- DOM-manipulation with JS
- Style-manipulation with JS
- Bugfixing