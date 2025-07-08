import { CheckCircle, Zap, Users2, Target, Shield, Globe2 } from "lucide-react";

const advantages = [
  {
    icon: Zap,
    title: "Максимальный охват и технологическая универсальность",
    items: [
      "Все вендоры: Apple TV, Xiaomi, LG, Samsung, Sony, Philips, Panasonic и др.",
      "Все ОС: WebOS, Tizen, Android TV, tvOS",
      "Глубокая интеграция через SDK партнеров"
    ]
  },
  {
    icon: Users2,
    title: "Мощь аудитории",
    items: [
      "Более 1.3+ млрд потенциальных контактов в месяц",
      "87.5+ миллионов уникальных зрителей в месяц",
      "Высокая вовлеченность: среднее время просмотра – 2 часа",
      "Целевой состав: Мужчины – 45%, Женщины – 55%"
    ]
  },
  {
    icon: Target,
    title: "Премиальный инвентарь и гибкие форматы",
    items: [
      "In-Stream Video: pre-, mid-, post-roll",
      "Multirolls: несколько роликов подряд",
      "Реклама в стриминге ТВ каналов",
      "Patches: замещение классической ТВ рекламы",
      "Switch-роллы: реклама при переключении каналов"
    ]
  },
  {
    icon: Shield,
    title: "Эффективное управление показом",
    items: [
      "Оптимальная частота: 5 показов на пользователя за кампанию",
      "Контроль перекрытия показов",
      "Минимизация дублирования в разных приложениях"
    ]
  },
  {
    icon: Globe2,
    title: "Широчайшая география",
    items: [
      "Основной объём трафика (70%) - Россия",
      "Около 20% охвата - страны СНГ",
      "10% охвата - пользователи по всему миру"
    ]
  }
];

const AdvantagesSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/50 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Наши неоспоримые преимущества
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Технологичность, охват и эффективность в одном решении
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {advantages.map((advantage, index) => (
            <div
              key={index}
              className="bg-card rounded-2xl p-8 shadow-lg border border-border/50 hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mr-4">
                  <advantage.icon className="h-7 w-7 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{advantage.title}</h3>
              </div>
              
              <ul className="space-y-3">
                {advantage.items.map((item, itemIndex) => (
                  <li key={itemIndex} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;