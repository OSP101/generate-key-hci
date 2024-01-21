import React from 'react';
import { users, groups } from '../../data/data';

export default function index() {
  return (
    <>
      {users.forEach(user => {
        if (user.email === 'supphitan.p@kkumail.com') {
          console.log(user.email);
        }
      })}
    </>
  );
}
