/**
 * MODULE Insults
 */
module.exports = (choice) => {
  switch (choice) {
    case 0:
      return 'Yous a bitch'
    case 1:
      return 'Yuh face look like a potat'
    case 2:
      return 'You got saggy potato tiddies'
    case 3:
      return 'U thicc ass walk in a door and your ass come bouncin in an hour later'
    /**
     * Challenge:
     * Write a new insult and test it in insults.test.js
     */
    default:
      return 'I\'m not that creative, bruh'
  }
}