const partners = [
  { name: "Эверест (СТС, ЧЕ, Домашний, РЕН, Муз-ТВ, Ю, Солнце, wink)", audience: "10 млн" },
  { name: "smotrim.ru / vesti.ru", audience: "20 млн" },
  { name: "Цифровое ТВ", audience: "1 млн" },
  { name: "Tvigle", audience: "2 млн" },
  { name: "lampa.mx", audience: "1 млн" },
  { name: "Эфир ТВ", audience: "500 тыс" },
  { name: "Смотрешка LG Channels", audience: "500 тыс" },
  { name: "24hTV", audience: "1 млн" },
  { name: "ShowJet", audience: "500 тыс" },
  { name: "Lime", audience: "1 млн" },
  { name: "Peers TV", audience: "500 тыс" },
  { name: "Free TV", audience: "500 тыс" },
  { name: "Лайт HD TV", audience: "500 тыс" },
  { name: "TV+", audience: "500 тыс" },
  { name: "Zona.ru", audience: "3 млн" },
  { name: "vintera.tv", audience: "3 млн" },
  { name: "HD Video Box", audience: "1 млн" },
  { name: "Aptoide", audience: "1 млн" },
  { name: "arte.tv", audience: "1 млн" },
  { name: "MX Player", audience: "1 млн" },
  { name: "VLC Media Player", audience: "1 млн" },
  { name: "LazyIPTV", audience: "1 млн" },
  { name: "Tubi TV", audience: "1 млн" },
  { name: "Fry!TV", audience: "1 млн" },
  { name: "Videowork", audience: "1 млн" },
];

const cisPartners = [
  { name: "BeeTV (KZ)", audience: "9 млн" },
  { name: "KINOM", audience: "9 млн" },
  { name: "Megogo", audience: "10 млн" },
];

const PartnersSection = () => {
  return (
    <section className="py-20 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наши партнеры
          </h2>
          <p className="text-xl text-muted-foreground mb-4">
            Фундамент нашего охвата
          </p>
          <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
            Мы сотрудничаем с более чем 30 ведущими приложениями, обеспечивая 
            беспрецедентный доступ к экранам
          </p>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Российские и международные партнеры
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-secondary to-secondary/50 rounded-lg p-4 border border-border/50 hover:shadow-md transition-all duration-200"
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-card-foreground text-sm">{partner.name}</span>
                  <span className="text-primary font-bold text-sm">{partner.audience}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-12">
          <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
            Партнеры СНГ
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {cisPartners.map((partner, index) => (
              <div
                key={index}
                className="bg-gradient-to-r from-primary/10 to-primary-glow/10 rounded-lg p-6 border border-primary/20 text-center"
              >
                <div className="font-bold text-card-foreground mb-2">{partner.name}</div>
                <div className="text-primary font-bold text-lg">{partner.audience}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center bg-gradient-to-r from-primary/5 to-primary-glow/5 rounded-2xl p-8">
          <p className="text-lg text-muted-foreground italic">
            <strong>Примечание:</strong> Суммарная аудитория партнеров превышает 1.3 млрд, 
            что отражает общий объем контактов в сети.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;