export default function Horoscope(setResult) {
  let rashi = document.getElementById("sunsign").value.toLowerCase()

  switch (rashi) {
    case "aries":
      setResult("Career: Opportunities for advancement may arise, particularly in the second half of the year.\r\n"
        + "Business: Consider implementing changes for increased profitability, especially in April, September, and October.\r\n"
        + "Education: Focus on studies may fluctuate, with challenges in April, August, and November.\r\n"
        + "Relationships: Aries individuals may experience heightened romantic opportunities, especially in June to July and November to December.\r\n"
        + "Health: Prioritize health and well-being throughout the year."
        + "Lucky Numbers: 1, 5, 9, 10\r\n"
        + "Colors: Red, Scarlet, Carmine\r\n"
        + "Lucky Days: Sunday, Tuesday, Thursday, Friday");
      break;
    case "taurus":
      setResult("Career: Stability and gradual progress in career matters can be expected.\r\n"
        + "Business: Consistency and steady growth are key, with potential for financial gains in April, September, and October.\r\n"
        + "Education: Taurus students may find steady progress, though challenges may arise in April, August, and November.\r\n"
        + "Relationships: Relationships may deepen and stabilize throughout the year.\r\n"
        + "Health: Maintain a balanced approach to health and wellness."
        + "Lucky Numbers: 2, 6, 8, 11\r\n"
        + "Colors: Green, Pink, Earth tones\r\n"
        + "Lucky Days: Monday, Friday, Saturday, Wednesday.");
      break;
    case "gemini":
      setResult("Career: Opportunities for networking and communication may lead to career advancements.\r\n"
        + "Business: Adaptability and innovation are crucial for success, particularly in April, September, and October.\r\n"
        + "Education: Gemini students may excel in communication-related subjects but may face distractions in April, August, and November.\r\n"
        + "Relationships: Social connections may flourish, with peak periods in June to July and November to December.\r\n"
        + "Health: Focus on mental and emotional well-being alongside physical health."
        + "Lucky Numbers: 3, 5, 7, 12\r\n"
        + "Colors: Yellow, Light Blue, White\r\n"
        + "Lucky Days: Wednesday, Thursday, Sunday, Monday.");
      break;
    case "cancer":
      setResult("Career: Stability and gradual progress are likely in career matters.\r\n"
        + "Business: Focus on nurturing existing ventures, with potential for financial growth in April, September, and October.\r\n"
        + "Education: Cancer students may find comfort in familiar subjects but should beware of distractions in April, August, and November.\r\n"
        + "Relationships: Emotional connections may deepen throughout the year.\r\n"
        + "Health: Pay attention to emotional well-being alongside physical health.\r\n"
        + "Lucky Numbers: 2, 3, 5, 9\r\n"
        + "Colors: White, Silver, Sea Green\r\n"
        + "Lucky Days: Monday, Thursday, Friday, Saturday");
      break;
    case "leo":
      setResult("Career: Opportunities for leadership and recognition may arise.\r\n"
        + "Business: Bold decisions may lead to increased profitability, especially in April, September, and October.\r\n"
        + "Education: Leos may excel in creative pursuits but should beware of overconfidence in April, August, and November.\r\n"
        + "Relationships: Romance and passion may be heightened throughout the year.\r\n"
        + "Health: Maintain a balance between work and leisure for overall well-being.\r\n"
        + "Lucky Numbers: 1, 5, 9, 10\r\n"
        + "Colors: Gold, Orange, Yellow\r\n"
        + "Lucky Days: Sunday, Tuesday, Thursday, Friday");
      break;
    case "virgo":
      setResult("Career: Detail-oriented work may lead to recognition and advancement.\r\n"
        + "Business: Focus on efficiency and organization, with potential for financial gains in April, September, and October.\r\n"
        + "Education: Virgo students may excel in analytical subjects but should guard against perfectionism in April, August, and November.\r\n"
        + "Relationships: Stability and practicality may define relationships throughout the year.\r\n"
        + "Health: Pay attention to diet and exercise for overall wellness.\r\n"
        + "Lucky Numbers: 3, 6, 7, 12\r\n"
        + "Colors: Green, White, Grey\r\n"
        + "Lucky Days: Wednesday, Friday, Saturday, Sunday");
      break;
    case "libra":
      setResult("Career: Opportunities for diplomacy and collaboration may lead to career advancements.\r\n"
        + "Business: Focus on maintaining balance and harmony in business partnerships, with potential for financial growth in April, September, and October.\r\n"
        + "Education: Libra students may excel in subjects requiring teamwork but should beware of indecision in April, August, and November.\r\n"
        + "Relationships: Harmony and balance may define relationships throughout the year.\r\n"
        + "Health: Maintain balance in all aspects of life for overall well-being.\r\n"
        + "Lucky Numbers: 6, 7, 9, 11\r\n"
        + "Colors: Blue, Pink, Green\r\n"
        + "Lucky Days: Friday, Saturday, Sunday, Monday");
      break;
    case "scorpio":
      setResult("Career: Opportunities for transformation and regeneration may lead to significant career shifts.\r\n"
        + "Business: Embrace change and transformation in business ventures, with potential for financial gains in April, September, and October.\r\n"
        + "Education: Scorpio students may excel in intense and investigative subjects but should beware of secrecy in April, August, and November.\r\n"
        + "Relationships: Intensity and passion may characterize relationships throughout the year.\r\n"
        + "Health: Focus on emotional healing and transformation for overall wellness.\r\n"
        + "Lucky Numbers: 2, 4, 7, 9\r\n"
        + "Colors: Black, Burgundy, Maroon\r\n"
        + "Lucky Days: Tuesday, Thursday, Friday, Sunday");
      break;
    case "sagittarius":
      setResult("Career: Opportunities for adventure and expansion may lead to career growth.\r\n"
        + "Business: Embrace new horizons and take calculated risks in business endeavors, with potential for financial growth in April, September, and October.\r\n"
        + "Education: Sagittarius students may excel in subjects related to exploration but should beware of restlessness in April, August, and November.\r\n"
        + "Relationships: Freedom and adventure may characterize relationships throughout the year.\r\n"
        + "Health: Maintain an active lifestyle and pursue new experiences for overall well-being.\r\n"
        + "Lucky Numbers: 3, 5, 8, 12\r\n"
        + "Colors: Purple, Blue, Red\r\n"
        + "Lucky Days: Thursday, Friday, Saturday, Tuesday");
      break;
    case "capricorn":
      setResult("Career: Opportunities for discipline and hard work may lead to steady career progress.\r\n"
        + "Business: Focus on long-term goals and practical strategies, with potential for financial gains in April, September, and October.\r\n"
        + "Education: Capricorn students may excel in structured subjects but should beware of rigidity in April, August, and November.\r\n"
        + "Relationships: Stability and commitment may define relationships throughout the year.\r\n"
        + "Health: Prioritize self-discipline and routine for overall wellness.\r\n"
        + "Lucky Numbers: 4, 8, 10, 22\r\n"
        + "Colors: Brown, Black, Dark Green\r\n"
        + "Lucky Days: Saturday, Sunday, Monday, Thursday");
      break;
    case "aquarius":
      setResult("Career: Hard work may lead to opportunities for promotion, with potential for job switching between August and October.\r\n"
        + "Business: Consider making changes for increased profitability, especially in April, September, and October.\r\n"
        + "Education: Focus may fluctuate, with challenges in April, August, and November.\r\n"
        + "Relationships: Romantic opportunities may abound, particularly in June to July and November to December.\r\n"
        + "Health: Focus on overall well-being is essential.\r\n"
        + "Lucky Numbers: 2 3, 7, 9\r\n"
        + "Colors: Electric Blue, Grey, Ultramarine Blue\r\n"
        + "Lucky Days: Thursday, Friday, Tuesday, Monday");
      break;
    case "pisces":
      setResult("Career: Opportunities for creativity and intuition may lead to career success.\r\n"
        + "Business: Trust your instincts and intuition in business matters, with potential for financial growth in April, September, and October.\r\n"
        + "Education: Pisces students may excel in imaginative subjects but should beware of escapism in April, August, and November.\r\n"
        + "Relationships: Compassion and empathy may characterize relationships throughout the year.\r\n"
        + "Health: Pay attention to spiritual and emotional health for overall wellness.\r\n"
        + "Lucky Numbers: 3, 7, 12, 16\r\n"
        + "Colors: Sea Green, Aqua Blue, Lavender\r\n"
        + "Lucky Days: Monday, Thursday, Friday, Sunday");
      break;
    default:
      setResult("Invalid input bro 😞");
  }
}