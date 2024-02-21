

function createFire (){
    const fireBox = document.querySelector('.snow-container');
    for (let box = 0; box < 100; box++){
        const createBox = document.createElement('div');
        createBox.classList.add('snow');
        let snowBox = fireBox.appendChild(createBox);
        const createSnowflakes = document.createElement('div');
        createSnowflakes.classList.add('snowflake');
        snowBox.appendChild(createSnowflakes);
    }
}
createFire();

