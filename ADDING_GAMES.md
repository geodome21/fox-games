# How to Add New Games

This guide explains how to easily add new games to your Geo Games collection.

## Quick Start: Adding a Game

### Step 1: Add Game Folder
Create a new folder in the `/games` directory with your game's files:
```
/games/My Game/
  └── index.html (the game file)
```

### Step 2: Update script.js
Add an entry to the `games` array in `script.js`. Example:

```javascript
const games = [
    // ... existing games ...
    { 
        name: "My Game", 
        url: "games/My Game/index.html",
        image: "images/my-game.jpg"
    },
]
```

**Note:** The `image` property is optional. If you don't have an image, just omit it:
```javascript
{ 
    name: "My Game", 
    url: "games/My Game/index.html"
}
```

### Step 3: Add Game Image (Optional)
To display a game thumbnail:

1. **Get game image:** Take a screenshot or find an image for your game
2. **Place in `/images` folder:** Save as `my-game.jpg` (use the same name as the image property in script.js)
3. **Supported formats:** .jpg, .png, .gif, .webp

**If no image is provided:** The game card will show a colorful gradient background instead.

## Image Naming Convention

Keep image filenames simple and lowercase with hyphens:
- ❌ `My Game Screenshot.png`
- ✅ `my-game.jpg`
- ✅ `my-game-thumbnail.jpg`

## Example: Adding "Flappy Bird"

### 1. Game folder structure:
```
/games/Flappy Bird/
  ├── index.html
  ├── style.css
  └── script.js
```

### 2. script.js entry:
```javascript
{ 
    name: "Flappy Bird", 
    url: "games/Flappy Bird/index.html",
    image: "images/flappy-bird.jpg"
}
```

### 3. Add image:
- Save game screenshot as `/images/flappy-bird.jpg`

## Features

✨ **Grid Layout**: Games display in a responsive grid (automatically adjusts for mobile)

🎨 **Auto Placeholder**: No image? Don't worry! Each game gets a unique color gradient

🔍 **Search**: Users can search for games by name

🎯 **Easy to Update**: Just add/remove entries from the `games` array

⚡ **Smooth Animations**: Hover effects and transitions already built in

## Tips

- **Image Quality**: Use images around 300x300px for best performance
- **Unique Names**: Keep game names unique in the array
- **File Paths**: Make sure folder names exactly match the `url` property
- **Special Characters**: Avoid special characters in game folder names (use hyphens instead of spaces)

## Troubleshooting

**Game not showing up?**
- Check that the game folder exists
- Verify the exact folder name matches the `url` in script.js
- Make sure `index.html` is in the game folder

**Image not displaying?**
- Check the image file path
- Ensure image filename matches the `image` property
- Verify image is in `/images` folder
- Try a different image format (.jpg, .png, .webp)

**Search not working?**
- Search is case-insensitive - just type part of the game name
- Make sure game name in array is spelled correctly
