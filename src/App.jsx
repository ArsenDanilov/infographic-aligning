import Infographic from "./Infographic";

function App() {
  const data = [
    { id: 1, icon: "user", number: 29537, about: "уникальных посетителей" },
    { id: 2, icon: "users", number: 1100, about: "компаний участниц" },
    { id: 3, icon: "chart-pie", number: `55000 м2`, about: "площадь экспозиции" },
    { id: 4, icon: "volume-high", number: 150, about: "спикеров деловой программы" },
  ];

  return (
    <>
      <Infographic data={data}/>
    </>
  );
}

export default App;
