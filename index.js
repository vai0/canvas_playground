$(function () {
    // colors
    const brightGreen = '#B4FD64';
    const superGreen = '#23D572';
    const orangish = '#FEC32E';
    const blackish = '#212121';
    const colors = ['#B4FD64', '#25E47A', '#FEC32E', '#212121'];

    // intro
    const one = $('#one')[0];
    const one = $('#one')[0];
    const c_one = one.getContext('2d');
    const c_one = one.getContext('2d');
    c_one.fillRect(5, 5, 100, 100);

    // lines
    const two = $('#two')[0];
    const two = $('#two')[0];
    const c_two = two.getContext('2d');
    const c_two = two.getContext('2d');
    c_two.beginPath();
    c_two.moveTo(5.5, 5.5);
    c_two.lineTo(5.5, 100.5);
    c_two.lineTo(100.5, 100.5);
    c_two.closePath();
    c_two.stroke();

    // rectangles
    const three = $('#three')[0];
    const three = $('#three')[0];
    const c_three = three.getContext('2d');
    const c_three = three.getContext('2d');
    c_three.strokeRect(5.5, 5.5, 100, 100);
    
    // arcs
    const drawPoint = (p, context) => context.fillRect(p.x - 3, p.y - 3, 6, 6);
    const degToRad = (deg) => deg * Math.PI / 180;

    const four = document.getElementById('four');
    const c_four = four.getContext('2d');
    c_four.arc(50, 50, 40, 0, degToRad(120), true);
    c_four.stroke();

    // curves
    const five = document.getElementById('five');
    const c_five = five.getContext('2d');
    const p0 = {
        x: Math.random() * 90,
        y: Math.random() * 90
    };
    const p1 = {
        x: Math.random() * 90,
        y: Math.random() * 90
    };
    const p2 = {
        x: Math.random() * 90,
        y: Math.random() * 90
    };
    c_five.strokeStyle = '#23D572';
    c_five.lineWidth = 6
    c_five.moveTo(p0.x, p0.y);
    c_five.quadraticCurveTo(p1.x, p1.y, p2.x, p2.y);
    c_five.stroke();
    drawPoint(p0, c_five);
    drawPoint(p1, c_five);
    drawPoint(p2, c_five);


    // colors
    const six = document.getElementById('six');
    c_six = six.getContext('2d');
    c_six.strokeStyle = '#212121';
    c_six.fillStyle = '#FEC32E';
    c_six.lineWidth = 14;
    c_six.fillRect(10, 10, 100, 100);
    c_six.strokeRect(10, 10, 100, 100);

    // gradients
    const seven = document.getElementById('seven');
    c_seven = seven.getContext('2d');
    const gradient = c_seven.createLinearGradient(5, 5, 5, 100);
    gradient.addColorStop(0, '#25E47A');
    gradient.addColorStop(1, '#B4FD64');
    c_seven.strokeStyle = gradient;
    c_seven.fillStyle = '#212121';
    c_seven.lineWidth = 20;
    c_seven.fillRect(20, 20, 100, 100);
    c_seven.strokeRect(20, 20, 100, 100);

    // text
    const eight = document.getElementById('eight');
    c_eight = eight.getContext('2d');
    c_eight.fillStyle = '#212121';
    c_eight.font = 'bold 48px Roboto';
    c_eight.textAlign = 'right';
    c_eight.textBaseline = 'top';
    c_eight.fillText('Material', eight.width - 20, 0);
    c_eight.fillText('Design', eight.width - 20, 40);

    // images
    const nine = document.getElementById('nine');
    c_nine = nine.getContext('2d');
    for (let i = 0; i < 50; i++) {
        c_nine.beginPath();
        c_nine.strokeStyle = colors[Math.floor(Math.random() * colors.length)];
        c_nine.moveTo(nine.width / 8 + Math.random() * nine.width / 2, nine.width / 8 + Math.random() *
            nine.height / 2);
        c_nine.lineTo(nine.width / 8 + Math.random() * nine.width / 2, nine.width / 8 + Math.random() *
            nine.height / 2);
        c_nine.stroke();
    }

    const image = document.createElement('img');
    image.src = nine.toDataURL('image/png', 0.8);

    const ten = document.getElementById('ten');
    c_ten = ten.getContext('2d');
    image.addEventListener('load', function () {
        c_ten.drawImage(image, nine.width / 8, nine.height / 8, nine.width / 2, nine.height / 2,
            ten.width * 3 / 8, 0, ten.width / 4, ten.height / 4);
    });

    // shadows
    const eleven = document.getElementById('eleven');
    c_eleven = eleven.getContext('2d');
    eleven.style.position = 'relative';

    c_eleven.shadowColor = 'rgba(0, 0, 0, 0.5)';
    c_eleven.fillStyle = '#212121';
    c_eleven.font = 'bold 48px Roboto';
    c_eleven.textAlign = 'right';
    c_eleven.textBaseline = 'top';

    const pt = {
        x: eleven.width / 2,
        y: eleven.height / 2
    };

    c_eleven.fillRect(eleven.width / 4, eleven.height / 4, eleven.width / 2, eleven.height / 2);

    eleven.addEventListener('mousemove', function (e) {
        c_eleven.clearRect(0, 0, eleven.width, eleven.height);
        const cursorX = e.clientX - eleven.getBoundingClientRect().left;
        const cursorY = e.clientY - eleven.getBoundingClientRect().top;
        const dx = pt.x - cursorX;
        const dy = pt.y - cursorY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        // source-over, source-in, source-out, source-atop, destination-over,
        c_eleven.shadowBlur = distance;
        c_eleven.shadowOffsetY = dy * 0.3;
        c_eleven.shadowOffsetX = dx * 0.3;
        c_eleven.fillRect(eleven.width / 4, eleven.height / 4, eleven.width / 2, eleven.height /
            2);
    });

    // global composite operation
    // source-over, source-in, source-out, source-atop, destination-over,
    // destination-in, destination-out, destination-atop, 
    // lighter, copy, xor, multiply, screen, overlay, lighten, darken, 
    // color-dodge, color-burn, hard-light, soft-light, difference, exclusion
    // hue, saturation, color, luminosity
    const cvs12 = document.getElementById('twelve');
    const ctx12 = cvs12.getContext('2d');

    ctx12.fillStyle = superGreen;
    ctx12.strokeStyle = blackish;
    ctx12.lineWidth = 10;
    ctx12.fillRect(cvs12.width / 4, cvs12.height / 4, cvs12.width / 4, cvs12.height / 2);
    ctx12.globalCompositeOperation = 'source-over';
    ctx12.strokeRect(cvs12.width / 4, cvs12.height / 4, cvs12.width / 4, cvs12.height / 2);
    ctx12.globalCompositeOperation = 'source-over';


    ctx12.fillStyle = orangish;
    ctx12.strokeStyle = blackish;
    ctx12.lineWidth = 10;
    ctx12.fillRect(cvs12.width / 4, cvs12.height / 4, cvs12.width / 2, cvs12.height / 4);
    ctx12.globalCompositeOperation = 'source-over';
    ctx12.strokeRect(cvs12.width / 4, cvs12.height / 4, cvs12.width / 2, cvs12.height / 4);

    // translate, scale, rotate the coordinate system (or the context)
    // save, restoring context. save works as a "stack". each save gets pushed onto a stack,
    // saving the context at that point in the script. each restore pops off the latest save in the stack
    // the order in how you declare translate, scale, rotate matters!
    const cvs13 = document.getElementById('thirteen');
    const ctx13 = cvs13.getContext('2d');

    animate13(timestamp) => {
        requestAnimationFrame(animate13);
        // make sure code below can execute with 16.67ms, else it'll lag and drop below 60fps
        ctx13.save();
        for (let i = 0; i < 20; i++) {
            ctx13.save();
            for (let j = 0; j < 20; j++) {
                ctx13.fillStyle = colors[Math.floor(Math.random() * colors.length)];
                ctx13.fillRect(0, 0, cvs13.width / 20, cvs13.height / 20);
                ctx13.translate(20, 0);
            }
            ctx13.restore();
            ctx13.translate(0, 20);
        }
        ctx13.restore();
    }
});