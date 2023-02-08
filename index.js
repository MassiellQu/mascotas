const datos = [
    {
        img: "https://www.bunko.pet/__export/1650415713226/sites/debate/img/2022/04/19/perritos.jpg_172596871.jpg",
        desc: "Pup y Pie ",
    },
    {
        img: "https://s.yimg.com/ny/api/res/1.2/VXXHiPV0NhP2wf0mfIHBXA--/YXBwaWQ9aGlnaGxhbmRlcjt3PTk2MDtoPTcxNjtjZj13ZWJw/https://media.zenfs.com/en/homerun/feed_manager_auto_publish_494/5f2acfff720e9a2c822eaa0b4f37e3dd",
        desc: "Rufito",
    },
    {
        img: "http://llaospet.com/blog/wp-content/uploads/2021/04/Adopta-perrito.jpg",
        desc: "Canela",
    },
    {
        img: "https://lanoticia.com/wp-content/uploads/2022/04/cuidados-patitas-perritos-dias-calurosos.jpg",
        desc: "Lassie",
    },
    {
        img: "https://cdn.pixabay.com/photo/2014/04/05/11/40/dog-316598_960_720.jpg",
        desc: "Chiripa",
    },
    {
        img: "https://cdn.pixabay.com/photo/2017/10/02/21/56/dog-2810484_960_720.jpg",
        desc: "Milo",
    },
    {
        img: "https://cdn.pixabay.com/photo/2016/01/02/18/39/puppy-1118584_960_720.jpg",
        desc: "Chock",
    },
    {
        img: "https://clubmac.mx/wp-content/uploads/2019/11/IMG_3953-1024x1003.jpg",
        desc: "Bee",
    },
    {
        img: "https://www.dogalize.com/wp-content/uploads/2017/06/puppy-2298832_640.jpg",
        desc: "Pirat",
    },
    {
        img: "https://www.guatemala.com/fotos/2022/09/Maraton-de-perritos-sesiones-de-fotos-a-beneficio-de-Albergue-Amor-Animal-octubre-2022.jpg",
        desc: "Shaki",
    },
    {
        img: "https://www.guatemala.com/fotos/2022/09/Maraton-de-perritos-sesiones-de-fotos-a-beneficio-de-Albergue-Amor-Animal-2022.jpg",
        desc: "Azul",
    },
    {
        img: "https://noticias.nmas.com.mx/wp-content/uploads/2022/03/Por-que%CC%81-se-les-dice-Firulais-a-los-perritos-y-cua%CC%81l-es-el-origen-de-la-palabra.jpg",
        desc: "Peligroso",
    },
];
console.log(["hello world"]);

let proyectos = document.querySelector("#proyectos");

for (let index = 0; index < datos.length; index++) {
    const item = datos[index];
    console.log(item);
    var proyecto = document.createElement("div");
    proyecto.classList.add("proyecto_class");
    proyecto.innerHTML = '<img src="' + item.img + '" /> <p>' + item.desc + "</p> <button onclick=\"location.href='pagina2.html'\">Patita Click</button>";
    proyectos.appendChild(proyecto);
}

