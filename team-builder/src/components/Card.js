import React from 'react';


const Card = props => {  
  return (
    <div className="card-content">
      {props.team.map(person => (
        <EmployeeDetails key={person.name} person={person} />
      ))}
    </div>
  );
}

function EmployeeDetails( props ) {
  const { name, email, role } = props.person;
  console.log(props.person);
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
