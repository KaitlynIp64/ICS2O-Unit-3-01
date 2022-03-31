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
  const baseA = parseInt(document.getElementById('base-A').value)
  const baseB = parseInt(document.getElementById('base-B').value)
  const height = parseInt(document.getElementById('height').value)

  // process
  const area = height * [(baseA + baseB) / 2]

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area.toFixed(2) + ' mm'
}
