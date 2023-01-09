function drawBox(aString) {
    let colorObject = {a : 'amber', b : 'blue', c : 'cyan'}
    for (let element of aString) {
      drawBox(colorObject[element]);
    }
  }

