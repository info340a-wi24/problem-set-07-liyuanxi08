import React from 'react';

const PetCard = ({ pet, handleAdopt, petIdentifier }) => {
  const displayName = `Pet ${petIdentifier}`;

  return (
    <div className="card" onClick={() => handleAdopt(pet.name)}>
      <img className="card-img-top" src={pet.img} alt={displayName} />
      <div className="card-body">
        <h3 className="card-title">{displayName} {pet.adopted ? '(Adopted)' : ''}</h3>
        <p className="card-text">{`${pet.sex} ${pet.breed}`}</p>
      </div>
    </div>
  );
};

const PetList = ({ pets, handleAdopt }) => (
  <div>
    <h2>Dogs for Adoption</h2>
    {pets.map((pet, index) => {
      const petIdentifier = String.fromCharCode(65 + index);
      return (
        <PetCard key={pet.name} pet={pet} handleAdopt={handleAdopt} petIdentifier={petIdentifier} />
      );
    })}
  </div>
);

export default PetList;
