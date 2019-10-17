import React, { useState } from 'react';

return (
  <div className="Form">
    <form onSubmit={event => handleSubmit(event)}>
      <label>
        Name: 
        <input
        type="text"
        name="name"
        value={teamMember.name}
        onChange={event => handleChange(event)} />
      </label>
      <label>
        Email: 
        <input
        type="text"
        name="email"
        value={teamMember.email}
        onChange={event => handleChange(event)} />
      </label>
      <label>
        Role: 
        <input
        type="text"
        name="role"
        value={teamMember.role}
        onChange={event => handleChange(event)} />
      </label>
    </form>
    </div>
  );
