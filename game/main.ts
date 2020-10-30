import { Actor, DisplayMode, Engine, Input, Loader, Texture } from "excalibur";


const game = new Engine({
    displayMode: DisplayMode.FullScreen,
    pointerScope: Input.PointerScope.Canvas
});

const sword = new Texture('assets/sword.png');
const loader = new Loader([sword]);

game.start(loader).then(() => {
    game.input.pointers.primary.on('move', event => {
        const delta =  event.pos.sub(actor.pos);
        actor.vel = delta;
        actor.rotation = delta.toAngle() + Math.PI/4;
    });

    const actor = new Actor({
        x: game.halfDrawWidth,
        y: game.halfDrawHeight,
        width: 40,
        height: 40
    });
    actor.addDrawing(sword);
    
    game.add(actor);
});