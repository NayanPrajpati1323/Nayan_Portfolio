
const WhatsAppIcon = () => {
  const phoneNumber = '9104295056';
  const message = encodeURIComponent("Hello, I am looking for GenAi and Development services.");
  
  return (
    <a 
      href={`https://wa.me/${phoneNumber}?text=${message}`}
      target="_blank" 
      rel="noopener noreferrer" 
      className="fixed bottom-5 right-5 bg-green-500 text-white p-3 rounded-full shadow-lg hover:bg-green-600 transition flex items-center justify-center"
    >
      <img 
        src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
        alt="WhatsApp"
        className="h-7 w-7"
      />
    </a>
  );
};

export default WhatsAppIcon; 