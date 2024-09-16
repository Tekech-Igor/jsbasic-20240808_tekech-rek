function showSalary(users, age) {
  // ваш код...
  let filteredUsers = users.filter(user => user.age <= age);
  let result = filteredUsers.map(user => `${user.name}, ${user.balance}`);
  let finalResult = result.join("\n");
  return finalResult;
}
