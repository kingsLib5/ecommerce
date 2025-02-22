import React, { useState } from 'react';

const translations = {
  English: {
    promoText: "Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!",
    shopNow: "Shop Now",
  },
  French: {
    promoText: "Soldes d'été pour tous les maillots de bain et livraison express gratuite - 50% de réduction!",
    shopNow: "Achetez Maintenant",
  },
  Spanish: {
    promoText: "¡Venta de verano para todos los trajes de baño y entrega exprés gratis - 50% de descuento!",
    shopNow: "Compra Ahora",
  },
  Portuguese: {
    promoText: "Promoção de verão para todos os maiôs e entrega expresso grátis - 50% de desconto!",
    shopNow: "Compre Agora",
  },
  Russian: {
    promoText: "Летняя распродажа всех купальников и бесплатная экспресс-доставка - скидка 50%!",
    shopNow: "Купить сейчас",
  },
};

function Headerone() {
  const [language, setLanguage] = useState("English");

  const handleLanguageChange = (e) => {
    setLanguage(e.target.value);
    // In a full app, you could update a global context or trigger other UI changes here.
  };

  return (
    <>
      <div className="bg-black h-auto md:h-[7vh] grid grid-cols-1 md:grid-cols-12">
        {/* Empty column on desktop */}
        <div className="hidden md:block md:col-span-3"></div>
        
        {/* Central Text Section */}
        <div className="col-span-1 md:col-span-6 flex flex-col md:flex-row gap-2 justify-center items-center text-white text-sm md:text-[14px]">
          <h2 className="text-center">
            {translations[language].promoText}
          </h2>
          <h1 className="underline">
            <a href="">{translations[language].shopNow}</a>
          </h1>
        </div>
        
        {/* Language Dropdown: Visible only on medium screens and above */}
        <div className="hidden md:flex md:col-span-3 justify-center items-center text-white">
          <select
            name="language"
            id="language"
            value={language}
            onChange={handleLanguageChange}
            className="bg-black text-white border-none p-1"
          >
            <option className="bg-black text-white" value="English">English</option>
            <option className="bg-black text-white" value="French">French</option>
            <option className="bg-black text-white" value="Spanish">Spanish</option>
            <option className="bg-black text-white" value="Portuguese">Portuguese</option>
            <option className="bg-black text-white" value="Russian">Russian</option>
          </select>
        </div>
      </div>
      {/* The rest of your page content would similarly use the `language` state or a shared context */}
    </>
  );
}

export default Headerone;
