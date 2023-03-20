class LazyLoader {
  constructor(images, options) {
    this.images = images;
    this.options = options || {};
    this.threshold = this.options.threshold || 0;
    this.blur = this.options.blur || false;
    this.callback = this.options.callback || function() {};

    this.init();
  }

  init() {
    this.addListeners();
    this.loadVisibleImages();
  }

  addListeners() {
    window.addEventListener('scroll', this.throttle(this.loadVisibleImages.bind(this), 100));
    window.addEventListener('resize', this.throttle(this.loadVisibleImages.bind(this), 100));
  }

  loadVisibleImages() {
    for (let i = 0; i < this.images.length; i++) {
      const image = this.images[i];
      const imageTop = image.getBoundingClientRect().top;
      const imageHeight = image.getBoundingClientRect().height;
      const windowHeight = window.innerHeight;
      const threshold = windowHeight * this.threshold;

      if (imageTop + imageHeight >= threshold && imageTop <= windowHeight - threshold) {
        if (this.blur) {
          image.style.filter = 'blur(5px)';
          image.style.imageRendering = '-moz-crisp-edges';
          image.style.imageRendering = '-webkit-crisp-edges';
          image.style.imageRendering = 'pixelated';
          image.style.objectFit = 'cover';
          image.style.transition = 'filter 0.5s ease';
        }

        const img = new Image();
        img.onload = () => {
          if (this.blur) {
            image.style.filter = 'none';
          }
          image.src = img.src;
          image.classList.add('loaded');
          this.callback(image);
        };
        img.src = image.dataset.src;
        image.parentNode.insertBefore(img, image.nextSibling);
        image.classList.remove('lazy');
      }
    }
  }

  throttle(func, delay) {
    let timeout = null;
    return function() {
      const context = this;
      const args = arguments;
      if (!timeout) {
        timeout = setTimeout(() => {
          func.apply(context, args);
          timeout = null;
        }, delay);
      }
    }
  }
}
