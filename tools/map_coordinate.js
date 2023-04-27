//
// This takes the X/Y, scale and tilescale from levels and converts it to
// and in-game X/Y position, I have not found tile scale in the files
// and it's never not been 50 (50px per tile), its not 100% accurate, 
// tilescale is actually something like 49.951219... (2048/41)
//
function mapsTranslateXYZToGame(x, y, scale, tilescale = 50)
{
    if (x == 0 || y == 0 || scale == 0) {
        return false;
    }

    const map = 2048 / (scale / 100);

    const tilecount = map / tilescale;

    x = Math.ceil(Math.round((x / tilescale) + (tilecount / 2),1));
    y = Math.ceil(Math.round((y / tilescale) + (tilecount / 2),1));

    return {x,y};
}

//
// Translates a X/Y from in-game to a levels output (which can then be translate dto lat/long
// this is quite accurate, not found it to be off at all. Requires map scale
//
function mapsTranslateGameToXYZ(x, y, scale)
{
    scale = scale / 100;

    x = (x*50)-25-(1024 / scale);
    y = (y*50)-25-(1024 / scale);

    return {x, y}
}
// console.log(mapsTranslateGameToXYZ(-238.025, 8, 1))
console.log(mapsTranslateXYZToGame(-238.025, 8, 200 ))