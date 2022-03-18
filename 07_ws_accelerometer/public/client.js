let socket = io();

const sensor_gauge = document.getElementById("sensor_gauge");
const ctx = sensor_gauge.getContext("2d");

socket.on("sensor_updated", (data)=>{
    
        const scale = 300.0 / 30.0;

        const screen_x = sensor_data.x * scale + 150;
        const screen_y = sensor_data.y * scale + 150;
        const screen_z = sensor_data.z * scale + 148;

    ctx.clearRect(0, 0, sensor_gauge.width, sensor_gauge.height);

    ctx.beginPath();
    ctx.arc(screen_x, screen_y, 10, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.rect(300, data.z + 148, 50, 4);
    ctx.fill();
});

const on_devicemotion = (motion) => {
    let data = {
        x: motion.accelerationIncludingGravity.x,
        y: motion.accelerationIncludingGravity.y,
        z: motion.accelerationIncludingGravity.z,
    };
    socket
};

window.addEventListener("devicemotion", on_devicemotion, true);

