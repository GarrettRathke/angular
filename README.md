<h1><bold>A Practice Application for Learning Angular2</bold></h1>


<h3><bold>Basic Structure of an Angular2 Application</bold></h3>
All Angular2 apps have <strong>Modules</strong> and <strong>Components</strong>, which, together, make up the basic structure of the app. 

The <strong>Module</strong> is the largest piece of an Angular2 app. <strong>Components</strong> live inside of <strong>Modules</strong>. Modules are just a single TypeScript file (<em>.ts</em>). Components are a combination of a TypeScript file, an HTML file, a CSS file, and perhaps a test file. Angular2 lingo can be a bit sloppy when referring to Components because sometimes the aforementioned group of files together is called a Component and other times just the TypeScript file is the called the Component. In the latter case, the HTML file is referred to as the <strong>Template</strong>.

The <strong>Template</strong>, or HTML file, describes how to render the <strong>Component</strong>, or TypeScript file. That being the case, each Component / TypeScript file corresponds to one Template / HTML file. Component + Template = some section of the screen in an app. Angular2 Templates mix Angular code in with HTML to make use of the Component code. Templates' scopes are limited to their Components. 

This modular application structure makes for very nicely organized and maintainable code. There are, of course, other pieces to an Angular2 app, but the most basic building blocks of any Angular2 app are <strong>Templates</strong>, <strong>Components</strong>, and <strong>Modules</strong>.


<h3><bold>Other Features of an Angular2 Application</bold></h3>
Angular2 is an opinionated framework that uses <u>Convention over Configuration</u>, meaing that the framework <em>just does things a certain way</em>. If you're not used to convention over configuration frameworks, that can be a <em>gotcha</em>. For instance, if you use Angular CLI to generate new applications, components, and other app parts, you'll quickly notice that it automagically puts these new pieces into folders and gives them names that you didn't create. And the project leverages that assumed file structure under the hood in the framework. You can manually define / change files / folders, but beware the framework consequences.
