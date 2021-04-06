import React, {Component, useEffect, useRef, useState} from 'react';

export function ComsMediator() {
  this.users = []
}

ComsMediator.prototype.register = function(handle) {
  this.users.push(handle)

  this.users.forEach((handle) => {
    handle.contacts(Object.keys(this.users))
  })

}

ComsMediator.prototype.sendMessage = function(from, message, to) {

  this.users[to].inbox(from + ' : ' + message);

}
