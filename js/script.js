// Copyright (c) 2022 Kaitlyn Ip All rights reserved
//
// Created by: Kaitlyn Ip
// Created on: Mar 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * This function calculates area of trapezoid.
 */
function calculate () {
  // input
  const a base = parseInt(document.getElementById(' a-base-of-triangle').value)
  const b base = parseInt(document.getElementById('b-base-of-triangle').value)
  const height = parseInt(document.getElementById('height-of-triangle').value)

  // process
  const area = height * [(a base + b base) / 2]

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + perimeter.toFixed(2) + ' mm'
}
