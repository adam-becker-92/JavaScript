const task5 = [
    "Hey @redsift - have you contacted reallycool@company.com yet?",
    "sdifjoweij34190 1ej1o3 team@redsift.io (127.0.0.0.1)",
    "Please contact us on help@redsift.io or support@redsift.io",
    "Super Cool Dude <supercooldude@hotmail.com>",
    "Our super secret login details are username: secret@email.com password: secretp@ssword"
  ];
  
  // This is a very basic regex that won't cover all possible emails, but will work for the examples provided
  const emailsArray = task5.map(str => str.match(/[a-z]*\@[a-z]*\.[a-z]+/g));
  console.log(emailsArray);