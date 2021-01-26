var student = {
  firstName: 'Kenneth',
  lastName: ' Dela Cruz',
  age: '27'
};

var fullName = student.firstName + student.lastName;
console.log('value of fullName', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'Administrative Assistant';
console.log('value of student.livesInIrvine', student.livesInIrvine);
console.log('value of previous.Occupation', student.previousOccupation);

var vehicle = {
  make: 'Subaru',
  model: 'Impreza WRX',
  year: '2014'
};

vehicle['color'] = 'purple';
vehicle['isConvertable'] = false;
console.log('value of vehicle.color', vehicle['color']);
console.log('value of vehicle.isConvertable', vehicle['isConvertable']);
console.log('value of vehicle', vehicle);

var pet = {
  name: 'Kona',
  type: 'terrier'
};

delete pet.name;
delete pet.type;
console.log('value of pet', pet);
