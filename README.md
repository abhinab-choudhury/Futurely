<div style="background-color:white; width:100%; padding:20px 0px; display:flex; align-items:center; margin-bottom:10px;">
    <img src="./client/src/assets/Image.png" width="65" height="56" alt="Futurely Logo" style="max-heigh:30%; height:auto; padding:0px 8px;"/>
    <img src="./client/public/Futurely.svg" alt="Futurely Logo" style="max-width:100%; height:auto;" />
    <hr />
</div>

**Futurely** is an innovative website that helps users predict their future and provides detailed horoscopes based on their respective sun signs. With features like partner match checks, yearly horoscopes, and sun sign compatibility, Futurely offers insights into what lies ahead, empowering users to make informed decisions in their personal and romantic lives.
 
## Features

- **Daily Horoscope:** Get personalized daily horoscopes based on your sun sign.
- **Partner Match Check:** Analyze compatibility between two sun signs to assess relationship potential.
- **Yearly Horoscope:** Receive an in-depth overview of what to expect for the upcoming year.
- **Sun Sign Details:** Explore traits, characteristics, and predictions for each sun sign.
  
You can check out the live version of Futurely [here](https://futurely.vercel.app/).

## Screenshots

![Futurely](./client/public/Home.png)
*Caption: The Futurely homepage with an interactive user interface.*

## Installation

To set up Futurely locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/abhinab-choudhury/Futurely.git
   cd Futurely
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Create an `.env` file in the root directory and add the necessary environment variables:

   ```plaintext
   VITE_QUOTE_API_KEY=your_api_key
   VITE_QUOTE_API_URI=your_api_url
   VITE_GEMINI_API_KEY=your_api_url
   ```

4. Start the development server:

   ```bash
   npm run dev
   ```

5. Visit `http://localhost:5173` in your browser to access the site.

## Usage

1. Navigate to the homepage and enter your sun sign.
2. Check your daily horoscope or explore the partner match feature.
3. Discover your future predictions for the year ahead!

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Deployment:** Vercel
- **APIs:** Quote-APIs from Rapid API & Gemini APIs to provide horoscope predictions

## Contributing

Contributions are welcome! Follow these steps to contribute:

1. Fork the repository.
2. Create a new branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

3. Make your changes and commit them:

   ```bash
   git commit -m "Add some feature"
   ```

4. Push to your branch:

   ```bash
   git push origin feature/your-feature-name
   ```

5. Open a pull request and describe the changes you made.

## License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

## Contact

If you have any questions or feedback, feel free to reach out:

- **Author:** Abhinab Choudhury, Arkadeep Karmakar
- **Email:** <abhinabchoudhury291@gmail.com>
- **GitHub:** [@abhinab-choudhury](https://github.com/abhinab-choudhury)

