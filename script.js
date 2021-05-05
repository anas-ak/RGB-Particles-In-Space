const { log } = console;

log('🎨');

const internals = {
    config: {
        totalGroups: 50
    },

    colors: [
        [0x00ffff, 0xff0000],
        [0x00ff00, 0xff00ff],
        [0x0000ff, 0xffff00]
    ]
};

internals.w = window.innerWidth;
internals.h = window.innerHeight;

internals.random = (min, max) => min + Math.random() * (max - min);

internals.app = new PIXI.Application({
    width: internals.w,
    height: internals.h,
    antialias: true,
    resolution: window.devicePixelRatio,
    transparent: false,
    autoResize: true,
    backgroundColor: 0xFFFFFF
});

document.body.appendChild(internals.app.view);


class Shapes {
    constructor(index) {
        
        this.index = index;
        this.offset = 50;
        this.colorsIndex = 0;

        this.container = new PIXI.Container();
        this.graphicsContainer = new PIXI.Container();
        this.graphicA = new PIXI.Graphics();
        this.graphicA.blendMore = PIXI.BLEND_MODES.MULTIPLY;
        this.graphicB = new PIXI.Graphics();
        this.graphicB.blendMode = PIXI.BLEND_MODES.MULTIPLY;

        this.draw(0);

        this.graphicsContainer.addChild(this.graphicA);
        this.graphicsContainer.addChild(this.graphicB);

        this.container.addChild(this.graphicsContainer);

        this.container.pivot.x = this.getWidth() / 2;
        this.container.pivot.y = this.getHeight() / 2;

        this.reset().animate();
    }

    get() {
        return this.container;
    }

    getWidth() {
        return this.get().children[0].width;
    }

    getHeight() {
        return this.get().children[0].height;
    }

    draw(colorsIndex) {
        if(this.index % 2) {
            this.graphicA.clear();
            this.graphicA.beginFill(colors[0]);
            this.graphicA.drawRect(internals.random(0, this.offset), internals.random(0, this.offset), 60, 60);
            this.graphicA.endFill();
        }
    }
};