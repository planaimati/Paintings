import Obraz1 from "../assets/img/03NIepewność kamienia(1).jpg";
import Obraz2 from "../assets/img/09.jpg";
import Obraz4 from "../assets/img/Adam i Ewa.jpg";
import Obraz5 from "../assets/img/obraz2.jpg";
import Obraz6 from "../assets/img/ZłoteWydmy.jpg";
import Obraz7 from "../assets/img/szkło06.jpg";
import Obraz8 from "../assets/img/szkło08.jpg";

export const images = [
  {
    id: 1,
    category: "painting on canvas",
    categoryImg: Obraz5,
    series: [
      {
        id: 1,
        name: "terra incognita",
        images: [
          {
            id: 1,
            title: "daleka podróż",
            seriesName: "terra incognita",

            images: [Obraz1, Obraz2, Obraz4],
          },
          {
            id: 2,
            title: "daleka podróż",
            seriesName: "terra incognita",

            images: [Obraz1, Obraz2, Obraz4],
          },
          {
            id: 3,
            title: "daleka podróż",
            seriesName: "terra incognita",

            images: [Obraz1, Obraz2, Obraz4],
          },
          {
            id: 4,
            title: "daleka podróż",
            seriesName: "terra incognita",

            images: [Obraz5, Obraz2, Obraz4],
          },
          {
            id: 5,
            title: "daleka podróż",
            seriesName: "terra incognita",

            images: [Obraz5, Obraz2, Obraz4],
          },
          {
            id: 6,
            title: "daleka podróż",
            seriesName: "terra incognita",

            images: [Obraz5, Obraz2, Obraz4],
          },
        ],
      },

      {
        id: 2,
        name: "mini",
        images: [
          {
            id: 1,
            title: "daleka podróż",
            seriesName: "mini",

            images: [
              Obraz2,
              "https://images.pexels.com/photos/3016038/pexels-photo-3016038.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ],
          },
          {
            id: 2,
            title: "daleka podróż",
            seriesName: "mini",

            images: [
              Obraz6,
              "https://images.pexels.com/photos/3016038/pexels-photo-3016038.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ],
          },
          {
            id: 3,
            title: "daleka podróż",
            seriesName: "mini",

            images: [
              Obraz2,
              "https://images.pexels.com/photos/3016038/pexels-photo-3016038.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ],
          },
          {
            id: 4,
            title: "daleka podróż",
            seriesName: "mini",

            images: [
              Obraz6,
              "https://images.pexels.com/photos/3016038/pexels-photo-3016038.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ],
          },
          {
            id: 5,
            title: "daleka podróż",
            seriesName: "mini",

            images: [
              Obraz6,
              "https://images.pexels.com/photos/3016038/pexels-photo-3016038.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ],
          },
          {
            id: 6,
            title: "daleka podróż",
            seriesName: "mini",

            images: [
              Obraz6,
              "https://images.pexels.com/photos/3016038/pexels-photo-3016038.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
              "https://images.pexels.com/photos/1572386/pexels-photo-1572386.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
            ],
          },
        ],
      },
    ],
  },
  {
    //kategoria glass painting
    id: 2,
    category: "glass painting",
    categoryImg:
      "https://images.pexels.com/photos/674837/pexels-photo-674837.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    series: [],
  },
  {
    //kategoria graphic
    id: 3,
    category: "graphic",
    categoryImg:
      "https://images.pexels.com/photos/2911545/pexels-photo-2911545.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    series: [],
  },
  {
    //kategoria graphic
    id: 4,
    category: "glass obiects",
    categoryImg: Obraz7,
    series: [],
  },
  {
    //kategoria graphic
    id: 5,
    category: "monument",
    categoryImg: Obraz8,
    series: [],
  },
];
