var nouns = [
  "the police", 
  "your children", 
  "disruptive startups", 
  "emerging economies",
  "mortgage providers",
  "zero-hour contract workers",
  "corporate private security",
  "internet connected fridges",
  "mandatory dashboard cameras",
  "new media ventures",
  "the lowest bidder",
  "crowdfunding",
  "your search history",
  "responsibly sourced gasoline",
  "digital death certificates",
  "criminal sentencing",
];

var verbPhrases = [
  "be your CV",
  "inherit your social media strategy", 
  "be funded by microtransactions",
  "socialise your lifestyle brand",
  "vote on your behalf",
  "sue for access to your DNA",
  "provide your end-of-life care",
  "be trained by AI",
  "replace drinking water",
  "become your digital ID card",
  "be delivered by unskippable adverts",
  "be available to the public as DLC",
  "operate digital shops using your idle brain capacity",
  "disrupt the rental market",
  "be integrated into your brain stem",
];

var optionalSuffixes = [
  "as a service",
  "even after your death",
  "while expanding into new markets",
  "using a freemium model",
];

function randomFromArray(inputArray) {
  return inputArray[Math.floor(Math.random() * inputArray.length)];
}

function randomDystopianFuture() {
  var hasSuffix = Math.random() < 0.33;
  return "In the future, " + randomFromArray(nouns) 
  + " will " + randomFromArray(verbPhrases) 
  + (hasSuffix ? " " + randomFromArray(optionalSuffixes) : "");
}

exports.randomDystopianFuture = randomDystopianFuture;