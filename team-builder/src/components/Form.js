import React, { useState } from 'react';

const Form = props => {
  const [teamMember, setTeamMember] = useState({name: "", email: "", role: ""});
  console.log("The props going into Form", props)

  const handleChange = event => {
    setTeamMember({...teamMember, [event.target.name]: event.target.value});
    console.log("This is the new team", teamMember);
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.setTeam([...props.team, teamMember]);
    setTeamMember({name: "", email: "", role: ""})
  };

  return (
    <div className="Form">
      <form onSubmit={handleSubmit}>
        <label>
          Name: 
          <input
          type="text"
          name="name"
          value={teamMember.name}
          onChange={handleChange} />
        </label>
        <label>
          Email: 
          <input
          type="text"
          name="email"
          value={teamMember.email}
          onChange={handleChange} />
        </label>
        <label>
          Role: 
          <input
          type="text"
          name="role"
          value={teamMember.role}
          onChange={handleChange} />
        </label>
        <button>Add me to the team!</button>
      </form>
    </div>
  );
}
export default Form;
