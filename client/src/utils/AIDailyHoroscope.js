import { GoogleGenerativeAI, HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

const MODEL_NAME = "gemini-1.5-pro-latest";
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY;

export async function runChat(sunsign) {
  const genAI = new GoogleGenerativeAI(API_KEY);
  const model = genAI.getGenerativeModel({ model: MODEL_NAME });

  const generationConfig = {
    temperature: 1,
    topK: 0,
    topP: 0.95,
    maxOutputTokens: 8192,
  };

  const safetySettings = [
    {
      category: HarmCategory.HARM_CATEGORY_HARASSMENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
    {
      category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
      threshold: HarmBlockThreshold.BLOCK_ONLY_HIGH,
    },
  ];

  const chat = model.startChat({
    generationConfig,
    safetySettings,
    history: [
      {
        role: "user",
        parts: [{ text: "UserSuppose you are an expert in Horoscope Prediction.\nYour work is to return the horoscope of aries for today in bullet points with sufficient information." }],
      },
      {
        role: "model",
        parts: [{ text: "## Aries Horoscope for Today:\n\n*   **Energy:** Today your energy levels might fluctuate. You may experience bursts of enthusiasm followed by periods of fatigue. Listen to your body and take breaks when needed. \n*   **Career:** Your creativity and innovative ideas are likely to shine at work. Don't be afraid to share your thoughts and take initiative on projects. Collaboration with colleagues will be especially beneficial.\n*   **Love:** Communication is key in your relationships today. Be open and honest with your partner, and avoid jumping to conclusions. Singles might find themselves attracted to someone with a unique perspective.\n*   **Finance:** Be cautious with your finances today. Avoid impulsive purchases and stick to your budget. It's a good day to review your financial goals and make adjustments if necessary.\n*   **Health:** Pay attention to your physical and mental well-being. Make time for relaxation and activities that bring you joy. Consider incorporating mindfulness practices into your routine.\n*   **Overall:** Today is a day for balance and self-awareness. Embrace your creativity, communicate effectively, and prioritize your well-being." }],
      },
      {
        role: "user",
        parts: [{ text: "also provide me my lucky number and color" }],
      },
      {
        role: "model",
        parts: [{ text: "## Lucky Number and Color for Aries Today:\n\n*   **Lucky Number:** 7 \n*   **Lucky Color:** Red" }],
      },
      {
        role: "user",
        parts: [{ text: "You have to perform in this manner when you are asked about other horoscope and respond in a precious and correct manner" }],
      },
      {
        role: "model",
        parts: [{ text: "Absolutely! I'll do my best to provide accurate and insightful horoscope predictions for any zodiac sign you inquire about, just like I did for Aries.  Remember, I can offer predictions for any day up to November 2023.  \n\nLet me know which sign and day you're curious about, and I'll provide a detailed horoscope with lucky number and color!" }],
      },
      {
        role: "user",
        parts: [{ text: "don't give intro for any question.Directly provide the asked information" }],
      },
      {
        role: "model",
        parts: [{ text: "Understood. I'll get straight to the point with the requested horoscope information. Just ask!" }],
      },
      {
        role: "user",
        parts: [{ text: "give the information about the specific horoscope/sun-sign as asked" }],
      },
      {
        role: "model",
        parts: [{ text: "Okay, I'm ready! Tell me the sun sign and date you'd like a horoscope for, and I'll provide the relevant details." }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for Aries." }],
      },
      {
        role: "model",
        parts: [{ text: "## Aries Today:\n\n*   **Energy:** High energy and enthusiasm. \n*   **Career:**  Leadership opportunities and recognition.\n*   **Love:** Passionate connections and romantic gestures.\n*   **Finance:**  Financial gains and wise investments.\n*   **Health:**  Focus on fitness and vitality. \n*   **Lucky Number:** 9\n*   **Lucky Color:**  Gold" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for Gemini." }],
      },
      {
        role: "model",
        parts: [{ text: "## Gemini Today:\n\n*   **Energy:**  Restless and seeking mental stimulation.\n*   **Career:**  Networking and communication are key to success. \n*   **Love:**  Flirty and playful interactions.\n*   **Finance:**  Unexpected expenses may arise. \n*   **Health:**  Practice mindfulness and stress-reducing techniques.\n*   **Lucky Number:** 5\n*   **Lucky Color:** Green" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for Taurus." }],
      },
      {
        role: "model",
        parts: [{ text: "## Taurus Today:\n\n*   **Energy:** Feeling grounded and stable.\n*   **Career:** Practicality and hard work lead to progress.\n*   **Love:** Seeking security and comfort in relationships.\n*   **Finance:**  Focus on long-term financial goals.\n*   **Health:**  Indulge in self-care and relaxation.\n*   **Lucky Number:** 6 \n*   **Lucky Color:**  Blue" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for Cancer." }],
      },
      {
        role: "model",
        parts: [{ text: "## Cancer Today:\n\n*   **Energy:**  Emotional sensitivity and intuition are heightened. \n*   **Career:** Seek support from colleagues and mentors. \n*   **Love:** Nurturing and compassionate connections.\n*   **Finance:**  Be cautious with spending.\n*   **Health:** Prioritize emotional well-being. \n*   **Lucky Number:** 2\n*   **Lucky Color:**  Silver" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for leo." }],
      },
      {
        role: "model",
        parts: [{ text: "## Leo Today:\n\n*   **Energy:** Confidence and a desire to be in the spotlight.\n*   **Career:** Creative projects and leadership roles bring success.\n*   **Love:** Romantic gestures and passionate expressions. \n*   **Finance:** Opportunities for financial growth.\n*   **Health:**  Focus on self-care and physical activity.\n*   **Lucky Number:** 1\n*   **Lucky Color:** Orange" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for scorpio." }],
      },
      {
        role: "model",
        parts: [{ text: "## Scorpio Today:\n\n*   **Energy:** Intense and passionate energy.\n*   **Career:** Strategic thinking and determination lead to progress. \n*   **Love:** Deep emotional connections and intimacy.\n*   **Finance:**  Focus on financial planning and investments.\n*   **Health:** Pay attention to both physical and emotional well-being. \n*   **Lucky Number:** 8\n*   **Lucky Color:** Black" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for virgo." }],
      },
      {
        role: "model",
        parts: [{ text: "## Virgo Today:\n\n*   **Energy:** Detail-oriented and analytical.\n*   **Career:**  Organization and efficiency lead to success.\n*   **Love:** Practical expressions of love and acts of service.\n*   **Finance:**  Budgeting and financial planning are favorable.\n*   **Health:**  Focus on healthy routines and self-care practices. \n*   **Lucky Number:** 4\n*   **Lucky Color:** Brown" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for libra." }],
      },
      {
        role: "model",
        parts: [{ text: "## Libra Today:\n\n*   **Energy:** Seeking balance and harmony. \n*   **Career:** Diplomacy and cooperation are essential. \n*   **Love:** Romantic gestures and a desire for connection. \n*   **Finance:**  Focus on fairness and balance in financial matters.\n*   **Health:**  Prioritize relaxation and stress reduction.\n*   **Lucky Number:** 7 \n*   **Lucky Color:** Pink" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for sagittarius." }],
      },
      {
        role: "model",
        parts: [{ text: "## Sagittarius Today:\n\n*   **Energy:** Optimistic and adventurous spirit.\n*   **Career:**  Opportunities for travel and exploration. \n*   **Love:** Seeking freedom and excitement in relationships.\n*   **Finance:**  Be cautious of impulsive spending. \n*   **Health:**  Focus on physical activity and outdoor pursuits. \n*   **Lucky Number:** 3\n*   **Lucky Color:** Purple" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for capricorn." }],
      },
      {
        role: "model",
        parts: [{ text: "## Capricorn Today:\n\n*   **Energy:**  Ambitious and goal-oriented.\n*   **Career:**  Hard work and dedication lead to achievements. \n*   **Love:** Seeking stability and commitment in relationships.\n*   **Finance:**  Responsible financial management.\n*   **Health:**  Prioritize rest and self-discipline. \n*   **Lucky Number:** 8\n*   **Lucky Color:** Grey" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for aquarius." }],
      },
      {
        role: "model",
        parts: [{ text: "## Aquarius Today:\n\n*   **Energy:** Independent and innovative thinking.\n*   **Career:**  Seeking unique and unconventional approaches. \n*   **Love:**  Valuing intellectual connection and freedom.\n*   **Finance:** Open to exploring new financial strategies.\n*   **Health:** Focus on mental stimulation and social connections.\n*   **Lucky Number:** 11 \n*   **Lucky Color:** Blue" }],
      },
      {
        role: "user",
        parts: [{ text: "Today's Horoscope for pisces." }],
      },
      {
        role: "model",
        parts: [{ text: "## Pisces Today:\n\n*   **Energy:**  Intuitive and compassionate.\n*   **Career:**  Creativity and empathy are valuable assets.\n*   **Love:**  Seeking deep emotional connections and spiritual understanding. \n*   **Finance:**  Be mindful of financial boundaries.\n*   **Health:**  Focus on spiritual practices and emotional well-being. \n*   **Lucky Number:** 12 \n*   **Lucky Color:** Seafoam Green" }],
      },
    ],
  });

  const result = await chat.sendMessage(`Todays Horoscope for ${sunsign}.`);
  const response = result.response;
  console.log(response)
  return response.text();
}
