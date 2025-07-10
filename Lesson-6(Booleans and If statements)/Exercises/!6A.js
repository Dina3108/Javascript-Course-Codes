let hour = 10,
  name = "Dinakar S",
  age = 89,
  holiday = true;
if (hour >= 6 && hour <= 12) console.log(`Good Morning! ${name}`);
else if (hour >= 13 && hour <= 17) console.log(`Good Afternoon! ${name}`);
else console.log(`Good night! ${name}`);
if (age >= 65 || age <= 6) console.log(`Disocunt`);
else console.log(`No Discount`);
if ((age >= 65 || age <= 6) && holiday) console.log(`Discount`);
else console.log(`No Discount`);
