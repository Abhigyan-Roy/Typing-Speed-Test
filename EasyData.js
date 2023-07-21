const easy=["Every morning we look for shells in the sand. I found fifteen big shells last year. I put them in a special place in my room. This year I want to learn to surf. It is hard to surf, but so much fun! My sister is a good surfer. She says that she can teach me. I hope I can do it!",
"My family is very important to me. We do lots of things together. My brothers and I like to go on long walks in the mountains. My sister likes to cook with my grandmother. On the weekends we all play board games together. We laugh and always have a good time. I love my family very much.",
"The Smiths live in a house. They have a living room. They watch TV in the living room. The father cooks food in the kitchen. They eat in the dining room. The house has two bedrooms. They sleep in the bedrooms. They keep their clothes in the closet. There is one bathroom. They brush their teeth in the bathroom."];
const medium=["The Grand Canyon, one of the Seven Wonders of the Natural World, is located in the state of Arizona. It is also a UNESCO World Heritage Site. Formed by over 70 million years of erosion from the Colorado River, the Grand Canyon offers a spectacular view. The canyon spans 277 miles in length, up to 18 miles in width, and it measures over a mile in depth at its deepest points. Carlos always wanted to visit the Grand Canyon, and recently he received the chance to hike some of the trails and take several panoramic photographs during his visit.",
"The Empire State Building, constructed in 1931, is a 102-story skyscraper, the ninth highest building in the world, and the fourth tallest structure in the United States. It is located in Midtown, Manhattan. This skyscraper is an iconic symbol of the city, having been featured in over 90 popular movies (as of 2018) throughout film history. Tourists come from all over the world to visit this building and view the city from its famous observation decks.",
"The holiday signifies the immense progress made by pilgrims, or some of the first travelers to North America, at Plymouth Plantation circa 1621. It was at this time that the hungry and weary Pilgrims were taught (by Native Americans) how to grow and produce food on North America's unique terrain. Once they'd grown (and caught) an abundance of food, the Pilgrims were expectedly thankful, and they celebrated alongside the Native Americans who provided them with such valuable assistance. President Abraham Lincoln initiated the contemporary practice of Thanksgiving by calling for a day of Thanksgiving during one of his Civil War addresses."];
const hard=["A freelancer or freelance worker, is a term commonly used for a person who is self-employed and is not necessarily committed to a particular employer long-term. Freelance workers are sometimes represented by a company or a temporary agency that resells freelance labor to clients; others work independently or use professional associations or websites to get work. While the term independent contractor would be used in a higher register of English to designate the tax and employment classes of this type of worker, the term freelancing is most common in culture and creative industries and this term specifically motions to participation therein. Fields, professions, and industries where freelancing is predominant include: music, writing, acting, computer programming, web design, graphic design, translating and illustrating, film and video production and other forms of piece work which some cultural theorists consider as central to the cognitive-cultural economy.",
"Business meetings, and professional recordings can contain sensitive data, so security is something a transcription company should not overlook when providing services. Companies should therefore follow the various laws and industry best practice, especially so when serving law firms, government agencies or courts. Medical Transcription specifically is governed by HIPAA, which elaborates data security practices and compliance measures to be strictly followed, failure of which leads to legal action and penalties. Transcription security includes maintaining confidentiality of the data through information security practices including limiting access with passwords and ensuring a secure environment for data and appropriate methods of disposal of all materials and deletion of files. Personnel may be required to sign non-disclosure agreements on a regular basis as well as take various oaths regarding confidentiality and accuracy.","Today, historians relate that, as a general rule, buying and selling securities was very much unorganized before the year 1792. Every person who owned a security faced the problem of finding interested buyers who might consider the purchase of a debt-free investment. This meant most people were somewhat slow in investing in stocks and bonds because these securities could not readily be converted into money. We have been told that an interesting number of traders and merchants agreed to try to do something to help correct the situation. At this first crucial meeting, they decided that it was a good idea to visit regularly on a daily basis to buy and sell securities. The group of leaders, whose meeting place was under an old, tall cottonwood tree, found the needed time to plot the financial future of our nation. We know from reading the old records that the original team who met together long ago in May became the very first members of the New York Stock Exchange. The New York Stock Exchange is still operating. Other stock exchanges conduct business in many countries around the world. Thousands and thousands of stocks and bonds are bought and sold each day."];
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
function getSelectedArray(difficulty) {
  switch (difficulty) {
    case 'easy':
      return easy;
    case 'medium':
      return medium;
    case 'hard':
      return hard;
    // Add other cases for medium and hard arrays if available
    default:
      return easy; // Default to easy array if difficulty is not provided or invalid
  }
}
module.exports = getData = (difficulty) => {
  const selectedArray = getSelectedArray(difficulty);
  const rndInt = randomIntFromInterval(1, selectedArray.length);
  return selectedArray[rndInt - 1].split(' ');
};

