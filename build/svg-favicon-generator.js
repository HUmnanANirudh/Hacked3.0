// svg-favicon-generator.js
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

// Ensure output directory exists
const outputDir = path.join(__dirname);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir);
}

async function generateFaviconsFromSvg(svgPath) {
    try {
        // For SVGs, we'll first convert to a high-res PNG to ensure quality
        const highResPng = await sharp(svgPath)
            .resize(512, 512) // Start with a large size for better quality
            .png()
            .toBuffer();

        // Generate PNG favicons from the high-res version
        await sharp(highResPng)
            .resize(16, 16)
            .png()
            .toFile(path.join(outputDir, 'favicon-16x16.png'));

        await sharp(highResPng)
            .resize(32, 32)
            .png()
            .toFile(path.join(outputDir, 'favicon-32x32.png'));

        // Generate the main favicon (32x32 PNG instead of ICO)
        await sharp(highResPng)
            .resize(32, 32)
            .png()
            .toFile(path.join(outputDir, 'favicon.png'));

        await sharp(highResPng)
            .resize(180, 180)
            .png()
            .toFile(path.join(outputDir, 'apple-touch-icon.png'));

        console.log('All favicon files generated successfully from SVG!');
        console.log('Files created:');
        console.log('- favicon.png (32x32)');
        console.log('- apple-touch-icon.png (180x180)');
        console.log('- favicon-32x32.png (32x32)');
        console.log('- favicon-16x16.png (16x16)');
        
        console.log('\nTo use these favicons, update your index.html with:');
        console.log(`
<link rel="icon" type="image/png" sizes="32x32" href="%PUBLIC_URL%/favicon-32x32.png">
<link rel="icon" type="image/png" sizes="16x16" href="%PUBLIC_URL%/favicon-16x16.png">
<link rel="apple-touch-icon" sizes="180x180" href="%PUBLIC_URL%/apple-touch-icon.png">
<link rel="icon" type="image/png" href="%PUBLIC_URL%/favicon.png">`);
    } catch (error) {
        console.error('Error generating favicons:', error);
        if (error.message.includes('Input file is missing')) {
            console.log('Make sure your SVG file exists and the path is correct.');
        }
    }
}

// Get the input SVG path from command line arguments
const svgPath = process.argv[2];
if (!svgPath) {
    console.error('Please provide an input SVG path');
    process.exit(1);
}

// Verify file exists and is an SVG
if (!fs.existsSync(svgPath)) {
    console.error('File does not exist:', svgPath);
    process.exit(1);
}

if (!svgPath.toLowerCase().endsWith('.svg')) {
    console.error('File must be an SVG');
    process.exit(1);
}

// Run the generator
generateFaviconsFromSvg(svgPath);