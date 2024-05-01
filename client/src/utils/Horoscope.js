export default async function Horoscope(setCareer, setBusiness, setEducation, setRelationships, setHealth, setLuckyNumbers, setLuckyColor, setLuckyDays) {
  let rashi = document.getElementById("sunsign").value.toLowerCase()

  switch (rashi) {
    case "aries":
      setCareer("Opportunities for advancement may arise, particularly in the second half of the year.")
      setBusiness("Consider implementing changes for increased profitability, especially in April, September, and October.")
      setEducation("Focus on studies may fluctuate, with challenges in April, August, and November.")
      setRelationships("Aries individuals may experience heightened romantic opportunities, especially in June to July and November to December.")
      setHealth("Prioritize health and well-being throughout the year.")
      setLuckyNumbers("1, 5, 9, 10")
      setLuckyColor("Red, Scarlet, Carmine")
      setLuckyDays("Sunday, Tuesday, Thursday, Friday")
      break;
    case "taurus":
      setCareer("Stability and gradual progress in career matters can be expected.")
      setBusiness("Consistency and steady growth are key, with potential for financial gains in April, September, and October.")
      setEducation("Taurus students may find steady progress, though challenges may arise in April, August, and November.")
      setRelationships("Relationships may deepen and stabilize throughout the year.")
      setHealth("Maintain a balanced approach to health and wellness.")
      setLuckyNumbers("2, 6, 8, 11")
      setLuckyColor("Green, Pink, Earth tones")
      setLuckyDays(" Monday, Friday, Saturday, Wednesday.");
      break;
    case "gemini":
      setCareer("Opportunities for networking and communication may lead to career advancements.")
      setBusiness("Adaptability and innovation are crucial for success, particularly in April, September, and October.")
      setEducation("Gemini students may excel in communication-related subjects but may face distractions in April, August, and November.")
      setRelationships("Social connections may flourish, with peak periods in June to July and November to December.")
      setHealth("Focus on mental and emotional well-being alongside physical health.")
      setLuckyNumbers("3, 5, 7, 12")
      setLuckyColor("Yellow, Light Blue, White")
      setLuckyDays(" Wednesday, Thursday, Sunday, Monday.");
      break;
    case "cancer":
      setCareer("Stability and gradual progress are likely in career matters.")
      setBusiness("Focus on nurturing existing ventures, with potential for financial growth in April, September, and October.")
      setEducation("Cancer students may find comfort in familiar subjects but should beware of distractions in April, August, and November.")
      setRelationships("Emotional connections may deepen throughout the year.")
      setHealth("Pay attention to emotional well-being alongside physical health.")
      setLuckyNumbers("2, 3, 5, 9")
      setLuckyColor("White, Silver, Sea Green")
      setLuckyDays(" Monday, Thursday, Friday, Saturday");
      break;
    case "leo":
      setCareer("Opportunities for leadership and recognition may arise.")
      setBusiness("Bold decisions may lead to increased profitability, especially in April, September, and October.")
      setEducation("Leos may excel in creative pursuits but should beware of overconfidence in April, August, and November.")
      setRelationships("Romance and passion may be heightened throughout the year.")
      setHealth("Maintain a balance between work and leisure for overall well-being.")
      setLuckyNumbers("1, 5, 9, 10")
      setLuckyColor("Gold, Orange, Yellow")
      setLuckyDays(" Sunday, Tuesday, Thursday, Friday");
      break;
    case "virgo":
      setCareer("Detail-oriented work may lead to recognition and advancement.")
      setBusiness("Focus on efficiency and organization, with potential for financial gains in April, September, and October.")
      setEducation("Virgo students may excel in analytical subjects but should guard against perfectionism in April, August, and November.")
      setRelationships("Stability and practicality may define relationships throughout the year.")
      setHealth("Pay attention to diet and exercise for overall wellness.")
      setLuckyNumbers("3, 6, 7, 12")
      setLuckyColor("Green, White, Grey")
      setLuckyDays(" Wednesday, Friday, Saturday, Sunday");
      break;
    case "libra":
      setCareer("Opportunities for diplomacy and collaboration may lead to career advancements.")
      setBusiness("Focus on maintaining balance and harmony in business partnerships, with potential for financial growth in April, September, and October.")
      setEducation("Libra students may excel in subjects requiring teamwork but should beware of indecision in April, August, and November.")
      setRelationships("Harmony and balance may define relationships throughout the year.")
      setHealth("Maintain balance in all aspects of life for overall well-being.")
      setLuckyNumbers("6, 7, 9, 11")
      setLuckyColor("Blue, Pink, Green")
      setLuckyDays(" Friday, Saturday, Sunday, Monday");
      break;
    case "scorpio":
      setCareer("Opportunities for transformation and regeneration may lead to significant career shifts.")
      setBusiness("Embrace change and transformation in business ventures, with potential for financial gains in April, September, and October.")
      setEducation("Scorpio students may excel in intense and investigative subjects but should beware of secrecy in April, August, and November.")
      setRelationships("Intensity and passion may characterize relationships throughout the year.")
      setHealth("Focus on emotional healing and transformation for overall wellness.")
      setLuckyNumbers("2, 4, 7, 9")
      setLuckyColor("Black, Burgundy, Maroon")
      setLuckyDays(" Tuesday, Thursday, Friday, Sunday");
      break;
    case "sagittarius":
      setCareer("Opportunities for adventure and expansion may lead to career growth.")
      setBusiness("Embrace new horizons and take calculated risks in business endeavors, with potential for financial growth in April, September, and October.")
      setEducation("Sagittarius students may excel in subjects related to exploration but should beware of restlessness in April, August, and November.")
      setRelationships("Freedom and adventure may characterize relationships throughout the year.")
      setHealth("Maintain an active lifestyle and pursue new experiences for overall well-being.")
      setLuckyNumbers("3, 5, 8, 12")
      setLuckyColor("Purple, Blue, Red")
      setLuckyDays(" Thursday, Friday, Saturday, Tuesday");
      break;
    case "capricorn":
      setCareer("Opportunities for discipline and hard work may lead to steady career progress.")
      setBusiness("Focus on long-term goals and practical strategies, with potential for financial gains in April, September, and October.")
      setEducation("Capricorn students may excel in structured subjects but should beware of rigidity in April, August, and November.")
      setRelationships("Stability and commitment may define relationships throughout the year.")
      setHealth("Prioritize self-discipline and routine for overall wellness.")
      setLuckyNumbers("4, 8, 10, 22")
      setLuckyColor("Brown, Black, Dark Green")
      setLuckyDays(" Saturday, Sunday, Monday, Thursday");
      break;
    case "aquarius":
      setCareer("Hard work may lead to opportunities for promotion, with potential for job switching between August and October.")
      setBusiness("Consider making changes for increased profitability, especially in April, September, and October.")
      setEducation("Focus may fluctuate, with challenges in April, August, and November.")
      setRelationships("Romantic opportunities may abound, particularly in June to July and November to December.")
      setHealth("Focus on overall well-being is essential.")
      setLuckyNumbers("2 3, 7, 9")
      setLuckyColor("Electric Blue, Grey, Ultramarine Blue")
      setLuckyDays(" Thursday, Friday, Tuesday, Monday");
      break;
    case "pisces":
      setCareer("Opportunities for creativity and intuition may lead to career success.")
      setBusiness("Trust your instincts and intuition in business matters, with potential for financial growth in April, September, and October.")
      setEducation("Pisces students may excel in imaginative subjects but should beware of escapism in April, August, and November.")
      setRelationships("Compassion and empathy may characterize relationships throughout the year.")
      setHealth("Pay attention to spiritual and emotional health for overall wellness.")
      setLuckyNumbers("3, 7, 12, 16")
      setLuckyColor("Sea Green, Aqua Blue, Lavender")
      setLuckyDays(" Monday, Thursday, Friday, Sunday");
      break;
    default:
      console.log("Incorrect Input.")
  }
}