import React, { useState } from 'react';


const Card = props => {
  const [employee, setEmployee] = useState()
  return (
    <div className="card-content">
      {employee.map(person => (
        <EmployeeDetails key={person.name} />
      ))}
    </div>
  );
}

function EmployeeDetails({ person }) {
  const { name, email, role } = person;
  console.log(person);
  return (
    <div className="employee-card">
      <h2>{name}</h2>
      <div className="employee-email">
        Email: <em>{email}</em>
      </div>
      <div className="employee-role">
        Role: <strong>{role}</strong>
      </div>
  </div>
  );
}

export default Card;
