// const firstNames = [
//   'Ahmet',
//   'John',
//   'Jane',
//   'Emily',
//   'Michael',
//   'Sarah',
//   'David',
//   'Laura',
//   'Robert',
//   'Linda',
// ];
// const lastNames = [
//   'Sourtime',
//   'Doe',
//   'Smith',
//   'Johnson',
//   'Brown',
//   'Williams',
//   'Jones',
//   'Garcia',
//   'Miller',
//   'Davis',
// ];

// export function generateMockUserList() {
//   const mockUsers = [];
//   for (let i = 0; i < 100; i++) {
//     const firstName = firstNames[i % firstNames.length];
//     const lastName =
//       lastNames[Math.floor(i / firstNames.length) % lastNames.length];
//     const dateOfEmployment = new Date(2022, 0, 1 + i)
//       .toISOString()
//       .split('T')[0];
//     const dateOfBirth = new Date(1988, 0, 1 + i).toISOString().split('T')[0];

//     mockUsers.push({
//       name: firstName,
//       lastName: lastName,
//       dateOfEmployment: dateOfEmployment,
//       dateOfBirth: dateOfBirth,
//       phoneNumber: `+(90) 55555555${String(i).padStart(2, '0')}`,
//       email: `${firstName.toLowerCase()}.${lastName.toLowerCase()}${i}@fake-ing.com`,
//       department: 'Analytics',
//       position: 'Junior',
//     });
//   }
//   console.log(mockUsers);
//   return mockUsers;
// }
export const userList = [
  {
    name: 'Ahmet',
    lastName: 'Sourtime',
    dateOfEmployment: '2021-12-31',
    dateOfBirth: '1987-12-31',
    phoneNumber: '+(90) 5555555500',
    email: 'ahmet.sourtime0@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-01',
    dateOfBirth: '1988-01-01',
    phoneNumber: '+(90) 5555555501',
    email: 'john.sourtime1@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-02',
    dateOfBirth: '1988-01-02',
    phoneNumber: '+(90) 5555555502',
    email: 'jane.sourtime2@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-03',
    dateOfBirth: '1988-01-03',
    phoneNumber: '+(90) 5555555503',
    email: 'emily.sourtime3@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-04',
    dateOfBirth: '1988-01-04',
    phoneNumber: '+(90) 5555555504',
    email: 'michael.sourtime4@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-05',
    dateOfBirth: '1988-01-05',
    phoneNumber: '+(90) 5555555505',
    email: 'sarah.sourtime5@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-06',
    dateOfBirth: '1988-01-06',
    phoneNumber: '+(90) 5555555506',
    email: 'david.sourtime6@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-07',
    dateOfBirth: '1988-01-07',
    phoneNumber: '+(90) 5555555507',
    email: 'laura.sourtime7@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-08',
    dateOfBirth: '1988-01-08',
    phoneNumber: '+(90) 5555555508',
    email: 'robert.sourtime8@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Sourtime',
    dateOfEmployment: '2022-01-09',
    dateOfBirth: '1988-01-09',
    phoneNumber: '+(90) 5555555509',
    email: 'linda.sourtime9@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-10',
    dateOfBirth: '1988-01-10',
    phoneNumber: '+(90) 5555555510',
    email: 'ahmet.doe10@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-11',
    dateOfBirth: '1988-01-11',
    phoneNumber: '+(90) 5555555511',
    email: 'john.doe11@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-12',
    dateOfBirth: '1988-01-12',
    phoneNumber: '+(90) 5555555512',
    email: 'jane.doe12@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-13',
    dateOfBirth: '1988-01-13',
    phoneNumber: '+(90) 5555555513',
    email: 'emily.doe13@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-14',
    dateOfBirth: '1988-01-14',
    phoneNumber: '+(90) 5555555514',
    email: 'michael.doe14@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-15',
    dateOfBirth: '1988-01-15',
    phoneNumber: '+(90) 5555555515',
    email: 'sarah.doe15@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-16',
    dateOfBirth: '1988-01-16',
    phoneNumber: '+(90) 5555555516',
    email: 'david.doe16@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-17',
    dateOfBirth: '1988-01-17',
    phoneNumber: '+(90) 5555555517',
    email: 'laura.doe17@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-18',
    dateOfBirth: '1988-01-18',
    phoneNumber: '+(90) 5555555518',
    email: 'robert.doe18@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Doe',
    dateOfEmployment: '2022-01-19',
    dateOfBirth: '1988-01-19',
    phoneNumber: '+(90) 5555555519',
    email: 'linda.doe19@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-20',
    dateOfBirth: '1988-01-20',
    phoneNumber: '+(90) 5555555520',
    email: 'ahmet.smith20@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-21',
    dateOfBirth: '1988-01-21',
    phoneNumber: '+(90) 5555555521',
    email: 'john.smith21@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-22',
    dateOfBirth: '1988-01-22',
    phoneNumber: '+(90) 5555555522',
    email: 'jane.smith22@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-23',
    dateOfBirth: '1988-01-23',
    phoneNumber: '+(90) 5555555523',
    email: 'emily.smith23@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-24',
    dateOfBirth: '1988-01-24',
    phoneNumber: '+(90) 5555555524',
    email: 'michael.smith24@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-25',
    dateOfBirth: '1988-01-25',
    phoneNumber: '+(90) 5555555525',
    email: 'sarah.smith25@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-26',
    dateOfBirth: '1988-01-26',
    phoneNumber: '+(90) 5555555526',
    email: 'david.smith26@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-27',
    dateOfBirth: '1988-01-27',
    phoneNumber: '+(90) 5555555527',
    email: 'laura.smith27@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-28',
    dateOfBirth: '1988-01-28',
    phoneNumber: '+(90) 5555555528',
    email: 'robert.smith28@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Smith',
    dateOfEmployment: '2022-01-29',
    dateOfBirth: '1988-01-29',
    phoneNumber: '+(90) 5555555529',
    email: 'linda.smith29@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Johnson',
    dateOfEmployment: '2022-01-30',
    dateOfBirth: '1988-01-30',
    phoneNumber: '+(90) 5555555530',
    email: 'ahmet.johnson30@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Johnson',
    dateOfEmployment: '2022-01-31',
    dateOfBirth: '1988-01-31',
    phoneNumber: '+(90) 5555555531',
    email: 'john.johnson31@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-01',
    dateOfBirth: '1988-02-01',
    phoneNumber: '+(90) 5555555532',
    email: 'jane.johnson32@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-02',
    dateOfBirth: '1988-02-02',
    phoneNumber: '+(90) 5555555533',
    email: 'emily.johnson33@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-03',
    dateOfBirth: '1988-02-03',
    phoneNumber: '+(90) 5555555534',
    email: 'michael.johnson34@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-04',
    dateOfBirth: '1988-02-04',
    phoneNumber: '+(90) 5555555535',
    email: 'sarah.johnson35@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-05',
    dateOfBirth: '1988-02-05',
    phoneNumber: '+(90) 5555555536',
    email: 'david.johnson36@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-06',
    dateOfBirth: '1988-02-06',
    phoneNumber: '+(90) 5555555537',
    email: 'laura.johnson37@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-07',
    dateOfBirth: '1988-02-07',
    phoneNumber: '+(90) 5555555538',
    email: 'robert.johnson38@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Johnson',
    dateOfEmployment: '2022-02-08',
    dateOfBirth: '1988-02-08',
    phoneNumber: '+(90) 5555555539',
    email: 'linda.johnson39@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-09',
    dateOfBirth: '1988-02-09',
    phoneNumber: '+(90) 5555555540',
    email: 'ahmet.brown40@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-10',
    dateOfBirth: '1988-02-10',
    phoneNumber: '+(90) 5555555541',
    email: 'john.brown41@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-11',
    dateOfBirth: '1988-02-11',
    phoneNumber: '+(90) 5555555542',
    email: 'jane.brown42@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-12',
    dateOfBirth: '1988-02-12',
    phoneNumber: '+(90) 5555555543',
    email: 'emily.brown43@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-13',
    dateOfBirth: '1988-02-13',
    phoneNumber: '+(90) 5555555544',
    email: 'michael.brown44@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-14',
    dateOfBirth: '1988-02-14',
    phoneNumber: '+(90) 5555555545',
    email: 'sarah.brown45@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-15',
    dateOfBirth: '1988-02-15',
    phoneNumber: '+(90) 5555555546',
    email: 'david.brown46@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-16',
    dateOfBirth: '1988-02-16',
    phoneNumber: '+(90) 5555555547',
    email: 'laura.brown47@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-17',
    dateOfBirth: '1988-02-17',
    phoneNumber: '+(90) 5555555548',
    email: 'robert.brown48@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Brown',
    dateOfEmployment: '2022-02-18',
    dateOfBirth: '1988-02-18',
    phoneNumber: '+(90) 5555555549',
    email: 'linda.brown49@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-19',
    dateOfBirth: '1988-02-19',
    phoneNumber: '+(90) 5555555550',
    email: 'ahmet.williams50@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-20',
    dateOfBirth: '1988-02-20',
    phoneNumber: '+(90) 5555555551',
    email: 'john.williams51@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-21',
    dateOfBirth: '1988-02-21',
    phoneNumber: '+(90) 5555555552',
    email: 'jane.williams52@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-22',
    dateOfBirth: '1988-02-22',
    phoneNumber: '+(90) 5555555553',
    email: 'emily.williams53@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-23',
    dateOfBirth: '1988-02-23',
    phoneNumber: '+(90) 5555555554',
    email: 'michael.williams54@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-24',
    dateOfBirth: '1988-02-24',
    phoneNumber: '+(90) 5555555555',
    email: 'sarah.williams55@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-25',
    dateOfBirth: '1988-02-25',
    phoneNumber: '+(90) 5555555556',
    email: 'david.williams56@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-26',
    dateOfBirth: '1988-02-26',
    phoneNumber: '+(90) 5555555557',
    email: 'laura.williams57@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-27',
    dateOfBirth: '1988-02-27',
    phoneNumber: '+(90) 5555555558',
    email: 'robert.williams58@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Williams',
    dateOfEmployment: '2022-02-28',
    dateOfBirth: '1988-02-28',
    phoneNumber: '+(90) 5555555559',
    email: 'linda.williams59@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-01',
    dateOfBirth: '1988-02-29',
    phoneNumber: '+(90) 5555555560',
    email: 'ahmet.jones60@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-02',
    dateOfBirth: '1988-03-01',
    phoneNumber: '+(90) 5555555561',
    email: 'john.jones61@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-03',
    dateOfBirth: '1988-03-02',
    phoneNumber: '+(90) 5555555562',
    email: 'jane.jones62@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-04',
    dateOfBirth: '1988-03-03',
    phoneNumber: '+(90) 5555555563',
    email: 'emily.jones63@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-05',
    dateOfBirth: '1988-03-04',
    phoneNumber: '+(90) 5555555564',
    email: 'michael.jones64@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-06',
    dateOfBirth: '1988-03-05',
    phoneNumber: '+(90) 5555555565',
    email: 'sarah.jones65@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-07',
    dateOfBirth: '1988-03-06',
    phoneNumber: '+(90) 5555555566',
    email: 'david.jones66@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-08',
    dateOfBirth: '1988-03-07',
    phoneNumber: '+(90) 5555555567',
    email: 'laura.jones67@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-09',
    dateOfBirth: '1988-03-08',
    phoneNumber: '+(90) 5555555568',
    email: 'robert.jones68@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Jones',
    dateOfEmployment: '2022-03-10',
    dateOfBirth: '1988-03-09',
    phoneNumber: '+(90) 5555555569',
    email: 'linda.jones69@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-11',
    dateOfBirth: '1988-03-10',
    phoneNumber: '+(90) 5555555570',
    email: 'ahmet.garcia70@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-12',
    dateOfBirth: '1988-03-11',
    phoneNumber: '+(90) 5555555571',
    email: 'john.garcia71@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-13',
    dateOfBirth: '1988-03-12',
    phoneNumber: '+(90) 5555555572',
    email: 'jane.garcia72@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-14',
    dateOfBirth: '1988-03-13',
    phoneNumber: '+(90) 5555555573',
    email: 'emily.garcia73@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-15',
    dateOfBirth: '1988-03-14',
    phoneNumber: '+(90) 5555555574',
    email: 'michael.garcia74@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-16',
    dateOfBirth: '1988-03-15',
    phoneNumber: '+(90) 5555555575',
    email: 'sarah.garcia75@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-17',
    dateOfBirth: '1988-03-16',
    phoneNumber: '+(90) 5555555576',
    email: 'david.garcia76@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-18',
    dateOfBirth: '1988-03-17',
    phoneNumber: '+(90) 5555555577',
    email: 'laura.garcia77@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-19',
    dateOfBirth: '1988-03-18',
    phoneNumber: '+(90) 5555555578',
    email: 'robert.garcia78@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Garcia',
    dateOfEmployment: '2022-03-20',
    dateOfBirth: '1988-03-19',
    phoneNumber: '+(90) 5555555579',
    email: 'linda.garcia79@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-21',
    dateOfBirth: '1988-03-20',
    phoneNumber: '+(90) 5555555580',
    email: 'ahmet.miller80@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-22',
    dateOfBirth: '1988-03-21',
    phoneNumber: '+(90) 5555555581',
    email: 'john.miller81@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-23',
    dateOfBirth: '1988-03-22',
    phoneNumber: '+(90) 5555555582',
    email: 'jane.miller82@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-24',
    dateOfBirth: '1988-03-23',
    phoneNumber: '+(90) 5555555583',
    email: 'emily.miller83@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-25',
    dateOfBirth: '1988-03-24',
    phoneNumber: '+(90) 5555555584',
    email: 'michael.miller84@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-26',
    dateOfBirth: '1988-03-25',
    phoneNumber: '+(90) 5555555585',
    email: 'sarah.miller85@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-27',
    dateOfBirth: '1988-03-26',
    phoneNumber: '+(90) 5555555586',
    email: 'david.miller86@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-28',
    dateOfBirth: '1988-03-27',
    phoneNumber: '+(90) 5555555587',
    email: 'laura.miller87@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-29',
    dateOfBirth: '1988-03-28',
    phoneNumber: '+(90) 5555555588',
    email: 'robert.miller88@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Miller',
    dateOfEmployment: '2022-03-30',
    dateOfBirth: '1988-03-29',
    phoneNumber: '+(90) 5555555589',
    email: 'linda.miller89@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Ahmet',
    lastName: 'Davis',
    dateOfEmployment: '2022-03-31',
    dateOfBirth: '1988-03-30',
    phoneNumber: '+(90) 5555555590',
    email: 'ahmet.davis90@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'John',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-01',
    dateOfBirth: '1988-03-31',
    phoneNumber: '+(90) 5555555591',
    email: 'john.davis91@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Jane',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-02',
    dateOfBirth: '1988-04-01',
    phoneNumber: '+(90) 5555555592',
    email: 'jane.davis92@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Emily',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-03',
    dateOfBirth: '1988-04-02',
    phoneNumber: '+(90) 5555555593',
    email: 'emily.davis93@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Michael',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-04',
    dateOfBirth: '1988-04-03',
    phoneNumber: '+(90) 5555555594',
    email: 'michael.davis94@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Sarah',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-05',
    dateOfBirth: '1988-04-04',
    phoneNumber: '+(90) 5555555595',
    email: 'sarah.davis95@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'David',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-06',
    dateOfBirth: '1988-04-05',
    phoneNumber: '+(90) 5555555596',
    email: 'david.davis96@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Laura',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-07',
    dateOfBirth: '1988-04-06',
    phoneNumber: '+(90) 5555555597',
    email: 'laura.davis97@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Robert',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-08',
    dateOfBirth: '1988-04-07',
    phoneNumber: '+(90) 5555555598',
    email: 'robert.davis98@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
  {
    name: 'Linda',
    lastName: 'Davis',
    dateOfEmployment: '2022-04-09',
    dateOfBirth: '1988-04-08',
    phoneNumber: '+(90) 5555555599',
    email: 'linda.davis99@fake-ing.com',
    department: 'Analytics',
    position: 'Junior',
  },
];
