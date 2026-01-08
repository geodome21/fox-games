Banner component
===============

Usage
-----

- Put your banner images into `banner/images/` (create folder if needed).
- Each image should be referenced inside the `.side-banner-inner` as an `<a class="banner-item"><img src="..."></a>`.
- The component is included in `index.html` as an example. If you want the script activated, include this line before other scripts:

    <script src="banner/banner.js" defer></script>

Customization
-------------
- Edit `banner/banner.css` to change width, colors, and responsive behavior.
- Edit `banner/banner.js` to enable `rotate` (set to `true`) for automatic cycling.

To remove the example images from `index.html`, replace the `<a>` elements with your own links or leave them empty and add items dynamically.
