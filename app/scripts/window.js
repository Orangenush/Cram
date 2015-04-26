var gui = require('nw.gui');
var win = gui.Window.get();
win.isMaximized = false;

document.getElementById('windowControlMinimize').onclick = function()
{
    win.minimize();
};

document.getElementById('windowControlClose').onclick = function()
{
    win.close();
};
