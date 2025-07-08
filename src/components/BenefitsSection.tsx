import { Check, Target, Shield, Users, Palette, TrendingDown } from "lucide-react";

const benefits = [
  {
    icon: Users,
    title: "Миллионы клиентов по минимальной цене",
    description: "О вашем бренде/продукте узнают миллионы клиентов. Наш охват позволяет достичь огромной аудитории.",
  },
  {
    icon: Target,
    title: "SmartTV реклама дешевле эфирного времени",
    description: "Запустим рекламу на популярных телеканалах в SmartTV формате (до 30 млн человек). В разы дешевле покупки эфирного времени.",
  },
  {
    icon: Shield,
    title: "Персональный менеджер",
    description: "Вам нужно только заполнить бриф и уточнить KPI, остальное мы сделаем сами. Полное сопровождение проекта.",
  },
  {
    icon: Check,
    title: "Соблюдение закона о рекламе",
    description: "Все необходимые действия мы возьмём на себя: регистрация токена, отчёт в ОРД. Вам не нужно беспокоиться.",
  },
  {
    icon: Palette,
    title: "Создание креативов",
    description: "Поможем создать баннер или видео креатив при бюджетах более 50 000 рублей для баннера и более 100 000 для видео.",
  },
  {
    icon: TrendingDown,
    title: "Самая выгодная цена",
    description: "От 500 рублей за тысячу показов. Для сравнения: видео реклама в Телеграм стоит в среднем 2500₽ за тысячу показов.",
  },
];

const BenefitsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Почему выбирают нас
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Мы предоставляем максимально эффективные решения для размещения вашей рекламы
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-border/50"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mr-4">
                  <benefit.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold text-card-foreground">{benefit.title}</h3>
              </div>
              <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;