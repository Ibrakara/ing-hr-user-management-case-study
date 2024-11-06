export const USER_LIST = [
  {
    name: 'Ahmet',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-01',
    dateOfBirth: '1988-01-01',
    phoneNumber: '+(90) 5555555555',
    email: 'ahmet.sourtime@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
];
const firstNames = [
  'Ahmet',
  'John',
  'Jane',
  'Emily',
  'Michael',
  'Sarah',
  'David',
  'Laura',
  'Robert',
  'Linda',
];
const lastNames = [
  'Sourtime',
  'Doe',
  'Smith',
  'Johnson',
  'Brown',
  'Williams',
  'Jones',
  'Garcia',
  'Miller',
  'Davis',
];

const mockUsers = [];

for (let i = 0; i < 100; i++) {
  const firstName = firstNames[i % firstNames.length];
  const lastName =
    lastNames[Math.floor(i / firstNames.length) % lastNames.length];
  mockUsers.push({
    name: firstName,
    lastName: lastName,
    dateOfEmployment: '2022-01-01',
    dateOfBirth: '1988-01-01',
    phoneNumber: `+(90) 55555555${String(i).padStart(2, '0')}`,
    email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@fake-ing.com`,
    department: 'Analytics',
    position: 'Junior',
  });
}

console.log(mockUsers);
