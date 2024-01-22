import React from 'react';
import { users, groups } from '../../data/data';

export default function index() {
  return (
    <>
      {users.map((user, userIndex) => (
        groups.map((group, groupIndex) => (
          user.groupid === group.id ? <div key={groupIndex}>{user.name}</div> : null
        ))
      ))}
    </>
  );
        }  
