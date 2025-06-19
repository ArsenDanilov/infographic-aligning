import Infographic from "./Infographic";

function App() {
  // const data = [
  //   { id: 1, icon: "user", number: 210, about: "компаний из 8 стран" },
  //   { id: 2, icon: "users", number: 8190, about: "посетителей" },
  //   { id: 3, icon: "map", number: 2486, about: "уникальных посетителей" },
  //   { id: 4, icon: "chair", number: `Примите участие в секторе`, about: "«Мебельные комплектующие и фурнитура»"},
  //   { id: 5, icon: "chair", number: `NEW: Оборудование для производства`, about: "металлической мебели, стеллажей и дверей"},
  // ];

  const data = [
    { id: 1, icon: "user", number: 210, about: "компаний из 8 стран221213" },
    { id: 2, icon: "users", number: 81902221212123, about: "" },
    { id: 4, icon: "chair", number: `35 000+`, about: "региона России"},
    { id: 5, icon: "chair", number: `Тетрапентанпергидрофенантрен`, about: "Отдельный сектор – Робототехника"},
    { id: 5, icon: "chair", number: `я люблю футбол`, about: ""},
    { id: 5, icon: "chair", number: ``, about: "Новая выставка ExpoCifra"},
    { id: 5, icon: "chair", number: ``, about: "Новая выставка ExpoCifra"},
    { id: 5, icon: "chair", number: ``, about: "Новая выставка ExpoCifra"},
    { id: 5, icon: "chair", number: ``, about: "Новая выставка ExpoCifra"},
    { id: 5, icon: "chair", number: `NEW: Оборудование для производства`, about: "металлической мебели, стеллажей и дверей"},
    { id: 4, icon: "chair", number: `Примите участие в секторе`, about: "«Мебельные комплектующие и фурнитура»"},
  ];

  return (
    <>
      <Infographic data={data}/>
    </>
  );
}

export default App;
