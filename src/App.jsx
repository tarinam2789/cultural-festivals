import React from "react";
import "./App.css";

const festivals = [
  { name: "Banijjo Mela", img: "/assets/Banijjo_Mela.jpg", description: "A large trade fair showcasing businesses and innovations.", link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://en.wikipedia.org/wiki/Dhaka_International_Trade_Fair&ved=2ahUKEwiasP6m6-uLAxWGl4kEHaiNOwwQFnoECAkQAQ&usg=AOvVaw2myKuqeXmugsob79eytkNv" },
  
  { name: "Chaitra Sankranti", img: "/assets/Chaitra_Sankranti .jpg", description: "The last day of the Bengali calendar, marking the year's end.", link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://astrobix.com/hindupath/59-chaitra-sankranti.html&ved=2ahUKEwjHuvz16-uLAxWErokEHfqwAhMQFnoECCQQAQ&usg=AOvVaw24KpnQMK1jygATzaZQLp3a" },
  { name: "Eid Celebrations", img: "/assets/Eid_Celebrations .jpg", description: "Festive gatherings celebrating Eid with joy and prayers.", link: "https://www.google.com/url?sa=t&source=web&rct=j&opi=89978449&url=https://humanappealusa.org/news/2017/05/what-is-eid-al-fitr&ved=2ahUKEwip65nW7euLAxWFC3kGHc0QEWwQFnoECD4QAQ&usg=AOvVaw2eB3gSbR3Cj8MnFGYvupcZ" },
  { name: "Ekushey February", img: "/assets/Ekushey February.jpg.webp", description: "International Mother Language Day, honoring language martyrs.", link: "https://en.wikipedia.org/wiki/International_Mother_Language_Day" },
  { name: "Nabanna Utsab", img: "/assets/Nabanna_Utsab.jpg", description: "Harvest festival celebrating the arrival of new crops.", link: "https://digestknowledge.com/knowledgebase/nabanna-festival-of-relief" },
  { name: "Pohela Boishakh", img: "/assets/Pohela_Boishakh.jpg", description: "Bengali New Year, celebrated with cultural events and fairs.", link: "https://en.wikipedia.org/wiki/Pohela_Boishakh" },
  { name: "Poush Mela", img: "/assets/Poush_Mela.jpg", description: "A winter fair with traditional music, food, and crafts.", link: "https://en.wikipedia.org/wiki/Poush_Mela" },
  { name: "Rabindra Jayanti", img: "/assets/Rabindra_Jayanti .jpg", description: "Celebrating the birth anniversary of Rabindranath Tagore.", link: "https://en.wikipedia.org/wiki/Rabindra_Jayanti" },
  { name: "Boshonto Utsab", img: "/assets/Boshonto_Utsab.jpg", description: "Welcoming spring with vibrant colors and festivities.", link: "https://en.wikipedia.org/wiki/Basanta_Uṯsab" },
  { name: "Bijoy Dibosh", img: "/assets/Bijoy_Dibosh.jpg", description: "Celebration of Bangladesh's victory in the Liberation War.", link: "https://en.wikipedia.org/wiki/Victory_Day_(Bangladesh)" }
];

const App = () => {
  return (
    <div className="app">
      <h1>Cultural Festivals of Bangladesh</h1>
      <div className="festival-grid">
        {festivals.map((festival, index) => (
          <div key={index} className={`festival-card ${index >= 8 ? "centered-card" : ""}`}>
            <img src={festival.img} alt={festival.name} />
            <h2>{festival.name}</h2>
            <p>{festival.description}</p>
            <a href={festival.link} target="_blank" rel="noopener noreferrer">
              <button>See More</button>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default App;
