import React from 'react';
import pizzas from '../pizzadata';
import Pizza from '../components/Pizza';

export default function Homescreen() {
  return (
    <div className="container">
      <img
        src="https://i.ibb.co/Pm7qX7S/Copy-of-pizza-facebook-cover-design-template-Made-with-Poster-My-Wall.jpg"
        className="img-fluid"
        style={{ width: '100%', height: '300px' }}
      />
      <div className="row">
        {pizzas.map((pizza) => {
          return (
            <div className="col-md-4 d-flex justify-content-center">
              <div>
                <Pizza pizza={pizza} />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
