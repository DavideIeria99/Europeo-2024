import { Nation, Groups } from "@prisma/client";

export const NationData: Nation[] = [
    {
        id: 1,
        name: "Germania",
        image: "/nation/Germania.png",
    },
    {
        id: 2,
        name: "Scozia",
        image: "/nation/Scozia.png",
    },
    {
        id: 3,
        name: "Ungheria",
        image: "/nation/Ungheria.png",
    },
    {
        id: 4,
        name: "Svizzera",
        image: "/nation/Svizzera.png",
    },
    {
        id: 5,
        name: "Spagna",
        image: "/nation/Spagna.png",
    },
    {
        id: 6,
        name: "Croazia",
        image: "/nation/Croazia.png",
    },
    {
        id: 7,
        name: "Italia",
        image: "/nation/Italia.png",
    },
    {
        id: 8,
        name: "Albania",
        image: "/nation/Albania.png",
    },
    {
        id: 9,
        name: "Slovenia",
        image: "/nation/Slovenia.png",
    },
    {
        id: 10,
        name: "Danimarca",
        image: "/nation/Danimarca.png",
    },
    {
        id: 11,
        name: "Serbia",
        image: "/nation/Serbia.png",
    },
    {
        id: 12,
        name: "Inghilterra",
        image: "/nation/Inghilterra.png",
    },
    {
        id: 13,
        name: "Polonia",
        image: "/nation/Polonia.png",
    },
    {
        id: 14,
        name: "Olanda",
        image: "/nation/Olanda.png",
    },
    {
        id: 15,
        name: "Austria",
        image: "/nation/Austria.png",
    },
    {
        id: 16,
        name: "Francia",
        image: "/nation/Francia.png",
    },
    {
        id: 17,
        name: "Belgio",
        image: "/nation/Belgio.png",
    },
    {
        id: 18,
        name: "Slovacchia",
        image: "/nation/Slovacchia.png",
    },
    {
        id: 19,
        name: "Romania",
        image: "/nation/Romania.png",
    },
    {
        id: 20,
        name: "Ucraina",
        image: "/nation/Ucraina.png",
    },
    {
        id: 21,
        name: "Turchia",
        image: "/nation/Turchia.png",
    },
    {
        id: 22,
        name: "Georgia",
        image: "/nation/Georgia.png",
    },
    {
        id: 23,
        name: "Portogallo",
        image: "/nation/Portogallo.png",
    },
    {
        id: 24,
        name: "RepublicaC",
        image: "/nation/RepublicaC.png",
    },
];

export const GroupsData: Partial<Groups>[] = [
    {
        nationId: "Germania",
        Groups: "A"
    },

    {
        nationId: "Scozia",
        Groups: "A"
    },
    {
        nationId: "Ungheria",
        Groups: "A"
    },
    {
        nationId: "Svizzera",
        Groups: "A"
    },
    {
        nationId: "Spagna",
        Groups: "B"
    },
    {
        nationId: "Croazia",
        Groups: "B"
    },
    {
        nationId: "Italia",
        Groups: "B"
    },
    {
        nationId: "Albania",
        Groups: "B"
    },
    {
        nationId: "Slovenia",
        Groups: "C"
    },
    {
        nationId: "Danimarca",
        Groups: "C"
    },
    {
        nationId: "Serbia",
        Groups: "C"
    },
    {
        nationId: "Inghilterra",
        Groups: "C"
    },
    {
        nationId: "Polonia",
        Groups: "D"
    },
    {
        nationId: "Olanda",
        Groups: "D"
    },
    {
        nationId: "Austria",
        Groups: "D"
    },
    {
        nationId: "Francia",
        Groups: "D"
    },
    {
        nationId: "Belgio",
        Groups: "E"
    },
    {
        nationId: "Slovacchia",
        Groups: "E"
    },
    {
        nationId: "Romania",
        Groups: "E"
    },
    {
        nationId: "Ucraina",
        Groups: "E"
    },
    {
        nationId: "Turchia",
        Groups: "F"
    },
    {
        nationId: "Georgia",
        Groups: "F"
    },
    {
        nationId: "Portogallo",
        Groups: "F"
    },
    {
        nationId: "RepublicaC",
        Groups: "F"
    },
]


