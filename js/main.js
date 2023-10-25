var product = [
    {
        name: "Christmas Wreath Decoration",
        price: 10,
        image: './images/gift1.webp',
        type: 'Decoration',
        color: 'As the picture showed',
        material: "MDF and plywood"
    },
    {
        name: "Illuminated Christmas Bauble",
        price: 2,
        image: './image/DEC003G.jpg',
        type: 'Decoration',
        color: 'Red, Green, Yellow',
        material: "20cm Illuminated Christmas Bauble"
    },
    {
        name: "Wooden Christmas Decoration Tabletop Ornament",
        price: 12,
        image: './image/Wooden Decoration.webp',
        type: 'Decoration',
        color: 'As the picture showed',
        material: "MDF and plywood"
    },
    {
        name: "LED Christmas Tree",
        price: 60,
        image: './image/Christmas tree.png',
        type: 'Decoration',
        color: 'Green',
        material: "PVC+PE"
    },
    {
        name: "Santa Claus Christmas Doll",
        price: 5,
        image: './image/Santa toy.jpg',
        type: 'Decoration',
        color: 'As the picture showed',
        material: "Cloth"
    },
    {
        name: "Home Slippers Christmas",
        price: 15,
        image: './image/Home Slippers Christmas.jpg',
        type: 'Warm Slippers',
        color: 'Red and Green',
        material: "Plastic cloth, soft velvet"
    },
    {
        name: "Christmas Party Glasses",
        price: 1.5,
        image: './image/Christmas Party Glasses.jpg',
        type: 'Glasses',
        color: 'Red',
        material: "Cloth and Plastic"
    },
    {
        name: "Christmas Decoration Led String Lights",
        price: 15,
        image: './image/Christmas Decoration Led String Lights.jpg',
        type: 'Christmast Ornament',
        color: 'Orange',
        material: "other"
    },
    {
        name: "Christmas Gingerbread House Arch",
        price: 15,
        image: './image/Christmas Gingerbread House Arch.jpg',
        type: 'Inflatable Christmas decoration',
        color: 'Brown',
        material: "	Polyester 190 T"
    },
]

var countDownDate = new Date("Dec 25, 2023 00:00:00").getTime()
var countDown = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor(distance % (1000 * 60) / 1000)

    document.getElementById("days").innerHTML = days
    document.getElementById("hours").innerHTML = hours
    document.getElementById("minutes").innerHTML = minutes
    document.getElementById("seconds").innerHTML = seconds

    if (distance < 0) {
        clearInterval()
        document.getElementById("days").innerHTML = days
        document.getElementById("hours").innerHTML = hours
        document.getElementById("minutes").innerHTML = minutes
        document.getElementById("seconds").innerHTML = seconds
    }
}, 1000)