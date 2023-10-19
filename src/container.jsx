import React, { useState } from "react";
import logo from './muichiro.jpg';
import Panel from "./accordion";

function Profil(){
    const [Poto, setFoto] = useState(false);
    const [activeIndex, setActiveIndex] = useState(0);
    const foto = React.createElement("img",{src:Poto ? logo : '', alt:'logo'});
    const divFoto = React.createElement("div",{className:`ProfilePic`}, foto);

    const nama = React.createElement("p", null, 'Enrico Kevin Ariantho');
    const divNama = React.createElement("div", {className:"name"}, nama);
    const divPertama = React.createElement("div", {className:"Header"}, [divFoto, divNama]);

    const listKiri1= React.createElement("li",null, "Laki-laki");
    const listKiri2= React.createElement("li",null, "IT Development");

    const listkiri = React.createElement("ul", null, [listKiri1,listKiri2]);
    const divKeduakiri=React.createElement("div",{className:"Left-Text"},listkiri);

    const listKanan1= React.createElement(Panel, {
        title: "Angkatan",
        isActive: activeIndex === 0,
        onShow: () => setActiveIndex(0)
    }
        ,'2022/2023');
       const listKanan2= React.createElement(Panel, {
        title: "Jurusan",
        isActive: activeIndex === 1,
        onShow: () => setActiveIndex(1)
    }
        ,'IMT');
       const listKanan3= React.createElement(Panel, {
        title: "Jalur sukses",
        isActive: activeIndex === 2,
        onShow: () => setActiveIndex(2)
    }
        ,'StartUP');
       const listKanan4= React.createElement(Panel, {
        title: "Hobby",
        isActive: activeIndex === 3,
        onShow: () => setActiveIndex(3)
    }
        ,'Games, Menggambar');


    const listKanan = React.createElement("ul", {className:"Right-Text"}, [listKanan1,listKanan2,listKanan3,listKanan4]);
    const divKeduaKanan=React.createElement("div", {className:"divKanan"}, listKanan);


    const divKedua = React.createElement("div", {className:"Text"}, [divKeduakiri,divKeduaKanan]);

    const button = React.createElement("button", {className:'button', onClick: () => setFoto(prev => !prev)}, "Change Picture");
    const divButton = React.createElement("div",{className:"buttonPict"}, button);

    const riwayatO =React.createElement("p", null, "- Riwayat Organisasi :");
    const divOrganisasi= React.createElement("div", {className:"Riwayat"},riwayatO);

    const divluar = React.createElement("div", {className:"App-header"}, [divPertama, divKedua,divButton, divOrganisasi]);

    return divluar;
}

export default Profil;