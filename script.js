let tiles = [];

document.addEventListener("click", function(event) {
    if(event.target.classList.contains('tile')){
        tiles.push(event.target);
        event.target.classList.add('selected');
    }

    if(tiles.length >= 9){
        const interval = setInterval(() => {
            tiles[0].classList.remove('selected');
            tiles.shift();
            if(tiles.length === 0){
                clearInterval(interval);
            }
        }, 500)
    }
});