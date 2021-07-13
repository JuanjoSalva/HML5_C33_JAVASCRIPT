j = 0;
while (j < 2000000) {
    postMessage("Web Worker Counter: " + j);
    j++;
}