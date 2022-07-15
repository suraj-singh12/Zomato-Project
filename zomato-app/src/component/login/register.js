import React, {Component} from 'react';

/* we will need to call header in each parent component now,
   so it will be child component of all Parent components.

   This is required so that updated header can be displayed,
   if and when the user does logins or logouts the header 
   needs to be re-rendered instantly.
*/
