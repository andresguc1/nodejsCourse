const sharp = require('sharp')

sharp('./logo.png')
.resize(80)
.grayscale()
.toFile('./resized.png')