import { useState, useEffect } from "react";

export const Announcements = () => {
  const [phrase, setPhrase] = useState(
    "Envío gratis a partir de $45 USD $60 CAD"
  );
  const [show, setShow] = useState(true);
  const phraseChange = () => {
    let salesPhrases = [
      "Encuentra el camino a seguir para tu negocio",
      "¡Apúrate que se acaban! ¡No demores mucho!",
      "¡Este producto es 100% para ti! ¡Encontramos la opción de tus sueños!",
      "Contáctame",
      "Bana ulaşın",
      "让我们谈谈",
      "Vil du snakke med meg?",
      "¿Podemos ayudarte en algo más? ¿Hay algo que quieras contarnos?",
      "Կապվեք ինձ հետ",
      "Let's coallesce.",
      "Επικοινώνησε μαζί μου",
      "Dost thou need to speak?",
      "Свяжитесь со мной",
      "저에게 연락",
      "ما سره اړیکه ونیسئ",
      "Liên hệ với tôi",
      "Зв'яжіться зі мною",
      "צור איתי קשר",
      "Reach out.",
      "اتصل بي",
      "私に連絡して",
      "New phone who dis?",
    ];
    let current_phrase_index = salesPhrases.indexOf(phrase);
    salesPhrases.length - 1 === current_phrase_index
      ? setPhrase(salesPhrases[0])
      : setPhrase(salesPhrases[current_phrase_index + 1]);
  };

  useEffect(() => {
    setTimeout(() => phraseChange(), 2000);
  }, [phrase]);

  return (
    <div className="banner" style={{ display: show ? "block" : "none" }}>
      {phrase}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="25"
        height="25"
        fill="currentColor"
        className="closeButton bi bi-x"
        viewBox="0 0 16 16"
        onClick={()=>setShow(!show)}
      >
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
      </svg>
    </div>
  )
};