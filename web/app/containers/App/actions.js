/*
 *
 * Common actions
 *
 */

import {
  AUTH_ERROR,
  AUTH_SUCCESS
} from './constants';

export function authSuccess() {
  return {
    type: AUTH_SUCCESS
  };
}

export function authError() {
  return {
    type: AUTH_ERROR
  };
}
