import React from 'react';

export const AboutNav = () => (
  <nav>
    <h2>About</h2>
    <ul>
        <li><a href="#/">How to Adopt</a></li>
        <li><a href="#/">Volunteering</a></li>
        <li><a href="#/">Events</a></li>
        <li><a href="#/">Donate</a></li>
        <li><a href="#/">About Us</a></li>
    </ul>
  </nav>
);

export const BreedNav = ({ breeds }) => {
    return (
      <nav>
        <h2>Pick a Breed</h2>
        <ul id="breedLinks">
        {breeds.map((breed) => (
            <li key={breed}><a href="#" onClick={(e) => e.preventDefault()}>{breed}</a></li>
        ))}
        </ul>
      </nav>
    );
  };



