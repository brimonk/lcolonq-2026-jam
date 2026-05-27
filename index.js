// Brian Chrzanowski
//
// Squash the Small Bug :)

const canvas = document.getElementById("canvas");

// canvas.width  = 640;
// canvas.height = 480;

const ctx = canvas.getContext("2d");

const TARGET_FPS = 60;
const FRAME_DURATION = 1000 / TARGET_FPS;
const INSTRUCTION_FRAMES = 120;

let frame = 0;
let last_time = 0;

const mouse = {
    x: 0,
    y: 0,
    is_down: false
};

canvas.addEventListener("click", (e) => {
    const rect = canvas.getBoundingClientRect();
    const scale_x = canvas.width / rect.width;
    const scale_y = canvas.height / rect.height;

    mouse.x = (e.clientX - rect.left) * scale_x;
    mouse.y = (e.clientY - rect.top) * scale_y;
});

canvas.addEventListener("mousedown", () => mouse.is_down = true);
canvas.addEventListener("mouseup",   () => mouse.is_down = false);

let bug = { // most of these are set in setup
    x: 0,
    y: 0,
    dx: 0,
    dy: 0,
    w: 14,
    h: 8,
    is_squashed: false
};

function clicked_thing(thing, mouse) { // ducks are neat for small things
    const hx = thing.w / 2;
    const hy = thing.h / 2;
    return (thing.x - hx <= mouse.x && mouse.x <= thing.x + hx) &&
           (thing.y - hy <= mouse.y && mouse.y <= thing.y + hy);
}

function vector_to(from, to) {
    const dx = to.x - from.x;
    const dy = to.y - from.y;
    const length = Math.sqrt(dx * dx + dy * dy);
    if (length === 0) {
        return {
            dx: 0,
            dy: 0
        };
    }

    return {
        dx: dx / length,
        dy: dy / length
    };
}

function setup() {
    // We pick a random spot on the canvas and we start the bug there. We then do the trig (in
    // 'vector_to' and have it waltz through the center of the screen somewhat quickly.

    bug.x = Math.random() * canvas.width;
    bug.y = Math.random() * canvas.height;

    const center_x = canvas.width / 2;
    const center_y = canvas.height / 2;

    const vec = vector_to(bug, {x: center_x, y: center_y});

    bug.dx = vec.dx;
    bug.dy = vec.dy;
}

function update(dt) {
    if (frame < INSTRUCTION_FRAMES) {
        return;
    }

    if (clicked_thing(bug, mouse)) {
        bug.is_squashed = true;
    }

    if (!bug.is_squashed) {
        bug.x += bug.dx * (dt / 8);
        bug.y += bug.dy * (dt / 8);
    }
}

function render_bug() {
    ctx.save();

    const angle = Math.atan2(bug.dy, bug.dx);

    ctx.fillStyle = "black";
    ctx.beginPath();
    ctx.ellipse(bug.x, bug.y, bug.w, bug.h, angle, 0, Math.PI * 2);
    ctx.fillStyle = "#222";
    ctx.fill();

    ctx.restore();
}

function render(dt) {
    ctx.fillStyle = "green";
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    if (frame < INSTRUCTION_FRAMES) {
        ctx.font = "20px Arial";
        ctx.fillStyle = "white";
        ctx.fillText("SQUASH!",  8,  20);
        ctx.fillText("THAT!",   64,  44);
        ctx.fillText("BUG!",   128,  70);
    } else {
        render_bug();

        if (bug.is_squashed) {
            ctx.font = "32px Arial";
            ctx.fillStyle = "white";
            ctx.fillText("!SQUASHED!", 16, 80);
        }
    }

}

function game_loop(timestamp) {
    if (timestamp - last_time < FRAME_DURATION) {
        requestAnimationFrame(game_loop);
        return;
    }

    const dt = timestamp - last_time;
    last_time = timestamp;

    if (frame == 0) {
        setup();
    }

    update(dt);
    render(dt);

    frame++;

    requestAnimationFrame(game_loop);
}

requestAnimationFrame(game_loop);
