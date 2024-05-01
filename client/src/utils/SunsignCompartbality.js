
async function SunsignCompartbality(setResult) {
  let My_zdc = document.getElementById('your_sunsign').value.toLowerCase();
  let Partner_zdc = document.getElementById('partners_sunsign').value.toLowerCase();

  switch (My_zdc) {
    case "aries": {
      if (Partner_zdc === "gemini" || Partner_zdc === "sagittarious" || Partner_zdc === "leo") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "taurus": {
      if (Partner_zdc === "cancer" || Partner_zdc === "pisces" || Partner_zdc === "capricorn") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "gemini": {
      if (Partner_zdc === "gemini" || Partner_zdc === "aquarius" || Partner_zdc === "libra") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "cancer": {
      if (Partner_zdc === "taurus" || Partner_zdc === "scorpio" || Partner_zdc === "virgo") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "leo": {
      if (Partner_zdc === "sagittarious" || Partner_zdc === "aries" || Partner_zdc === "gemini") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "virgo": {
      if (Partner_zdc === "capricorn" || Partner_zdc === "cancer" || Partner_zdc === "taurus") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "libra": {
      if (Partner_zdc === "sagittarious" || Partner_zdc === "gemini" || Partner_zdc === "aquarius") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "scorpio": {
      if (Partner_zdc === "scorpio" || Partner_zdc === "capricorn" || Partner_zdc === "pisces") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "sagittarious":
      if (Partner_zdc === "aries" || Partner_zdc === "aquarius" || Partner_zdc === "sagittarious") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
    case "capricorn": {
      if (Partner_zdc === "capricorn" || Partner_zdc === "pisces" || Partner_zdc === "taurus" || Partner_zdc === "virgo") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "pisces": {
      if (Partner_zdc === "scorpio" || Partner_zdc === "cancer" || Partner_zdc === "capricorn") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    }
    case "aquarius": {
      if (Partner_zdc === "sagittarious" || Partner_zdc === "libra" || Partner_zdc === "gemini") {
        setResult("The compatibility between you two is remarkable, making every interaction between you both feel like a seamless blend of harmony and understanding");
      } else {
        setResult("There might be some room for improvement in your relationship. Taking time to communicate openly, understand each other's perspectives, and find common ground could be beneficial.You both have the capability to overcome any challenges, just trust in yourselves and your bond."
        );
      }
      break;
    } default: System.out.println("Enter a valid zodiac sign. Your determination will guide you through any obstacles");
  }
}

export default SunsignCompartbality