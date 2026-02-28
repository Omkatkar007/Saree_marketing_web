# Swamini Collection - Saree Store Website

A professional static website for Swamini Collection, a local saree store.

## Files Structure

```
swamini-collection/
├── index.html      # Main HTML file
├── style.css       # CSS styling
├── script.js       # JavaScript for products
├── images/         # Product images folder
└── README.md       # This file
```

## How to Add New Saree (Stock)

1. **Add the product image:**
   - Place the image file in the `images/` folder
   - Supported formats: JPG, PNG, WebP
   - Recommended size: 600x800 pixels or similar aspect ratio

2. **Add entry in code:**
   - Open `script.js`
   - Add a new object to the `products` array:
   
```
javascript
   {
       id: 7,  // Use next available number
       name: "Your Saree Name",
       image: "images/your-image-filename.jpg",
       price: 5000  // Price in INR
   }
   
```

## How to Remove Saree (Stock)

1. **Delete the image:**
   - Delete the image file from the `images/` folder

2. **Remove entry from code:**
   - Open `script.js`
   - Remove the corresponding product object from the `products` array

## Contact Information

The website displays the following contact details:
- **Phone:** 9881679579
- **Email:** vinitakatkar33@gmail.com
- **Address:** HV9H+56R, Tank Rd, Shanti Nagar, Vishrantwadi, Pune, Maharashtra 411006
- **Map:** https://share.google/jeiOPhAlfrJ03W9jr

## Notes

- This is a view-only website for visitors
- No authentication required
- No payment integration
- Images must be stored locally in the `images/` folder
- To update contact details, edit `index.html`

## Browser Support

Works on all modern browsers (Chrome, Firefox, Safari, Edge)

## To View the Website

Open `index.html` in any web browser.
