import React from "react";
import "./Main.css";

function Main(props) {
  const calcular = function (e) {
    console.log(e);
    props.calcular(e);
  };

  return (
    <main>
      <div className="caixa">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit consectetur perferendis laboriosam culpa pariatur, nam
          odio. Modi assumenda voluptatum accusamus quo nobis laudantium et!
          Voluptatibus deleniti nihil quas porro a.
        </p>
      </div>
      <div className="caixa">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit consectetur perferendis laboriosam culpa pariatur, nam
          odio. Modi assumenda voluptatum accusamus quo nobis laudantium et!
          Voluptatibus deleniti nihil quas porro a.
        </p>
      </div>
      <div className="caixa">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit consectetur perferendis laboriosam culpa pariatur, nam
          odio. Modi assumenda voluptatum accusamus quo nobis laudantium et!
          Voluptatibus deleniti nihil quas porro a.
        </p>
      </div>
      <div className="caixa">
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Reprehenderit consectetur perferendis laboriosam culpa pariatur, nam
          odio. Modi assumenda voluptatum accusamus quo nobis laudantium et!
          Voluptatibus deleniti nihil quas porro a.
        </p>
      </div>
    </main>
  );
}

export default Main;
