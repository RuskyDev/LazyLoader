# LazyLoader
LazyLoader is a lightweight JavaScript library for lazy loading images on a web page. It allows you to delay the loading of images until they are needed, reducing initial page load times and saving bandwidth.
# Installation
To use LazyLoader, simply include the **lazyloader.js** file in your HTML page like this:
```html
<script src="lazyloader.js"></script>
```
or
```html
<script src="https://raw.githubusercontent.com/RuskyDev/LazyLoader/main/lazyloader.js"></script>
```
# Usage
To use LazyLoader, select the images you want to lazy load using a query selector, and then create a new instance of the **LazyLoader** class. You can pass in an optional options object to customize the behavior of the library. Here's an example:

```javascript
const images = document.querySelectorAll('img[data-src]');
const lazyLoader = new LazyLoader(images, {
  rootMargin: '50px',
  threshold: 0.5,
  placeholder: 'placeholder.jpg',
  blur: true,
  blurAmount: 10
});

lazyLoader.load();
```
In this example, we're selecting all images with a **data-src** attribute and passing them to the **LazyLoader** constructor. We're also specifying an options object with the **rootMargin** and **threshold** options used to determine when the images should be loaded. Additionally, we're using the **placeholder**, **blur**, and **blurAmount** options to enhance the user experience.

# Options

The following options are available:

- **rootMargin**: A string representing the root margin for the intersection observer. Defaults to '**0px**'.
- **threshold**: A number between 0 and 1 representing the intersection ratio needed for an image to be considered visible. Defaults to **0**.
- **placeholder**: A string representing the URL of the placeholder image to show while the real image is loading. Defaults to an empty string.
- **blur**: A boolean indicating whether to show a blurred version of the image while it's loading. Defaults to **false**.
- **blurAmount**: A number representing the amount of blur to apply to the image while it's loading. Defaults to **5**.

# Contributing

If you find a bug or have a feature request, please submit an issue on the [**GitHub repository.**](https://github.com/RuskyDev/LazyLoader/issues). Contributions are also welcome; feel free to fork the repository and submit a pull request.
