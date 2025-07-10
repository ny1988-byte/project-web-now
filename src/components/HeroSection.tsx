import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { Phone } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const HeroSection = () => {
  const { toast } = useToast();
  const form = useForm({
    defaultValues: {
      phone: "",
    },
  });

  const onSubmit = (data: { phone: string }) => {
    toast({
      title: "Заявка отправлена!",
      description: "Мы свяжемся с вами в ближайшее время.",
    });
    form.reset();
  };

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary-glow to-blue-600"></div>
      
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Разместим вашу
            <span className="block bg-gradient-to-r from-yellow-300 to-orange-400 bg-clip-text text-transparent">
              видео рекламу
            </span>
            на самых популярных SMART TV площадках за 7 дней
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto">
            От <span className="font-bold text-yellow-300">33 копеек</span> за показ ролика
          </p>
          
          <div className="max-w-md mx-auto mb-20">
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
              <h3 className="text-2xl font-bold mb-6 text-yellow-300">
                Получить бесплатную консультацию
              </h3>
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <FormField
                    control={form.control}
                    name="phone"
                    rules={{
                      required: "Номер телефона обязателен",
                      pattern: {
                        value: /^(\+7|8)?[\s\-]?\(?[489][0-9]{2}\)?[\s\-]?[0-9]{3}[\s\-]?[0-9]{2}[\s\-]?[0-9]{2}$/,
                        message: "Введите корректный номер телефона"
                      }
                    }}
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <Input
                            {...field}
                            placeholder="+7 (999) 123-45-67"
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-yellow-300 h-12 text-lg"
                          />
                        </FormControl>
                        <FormMessage className="text-yellow-300" />
                      </FormItem>
                    )}
                  />
                  <Button 
                    type="submit" 
                    size="lg" 
                    className="w-full bg-yellow-300 text-primary hover:bg-yellow-400 px-8 py-4 text-lg font-semibold"
                  >
                    <Phone className="mr-2 h-5 w-5" />
                    Получить консультацию
                  </Button>
                </form>
              </Form>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center mb-16">
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">30 млн</div>
              <div className="text-sm text-white/80">зрителей SmartTV</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">87.5+ млн</div>
              <div className="text-sm text-white/80">уникальных зрителей</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">30+</div>
              <div className="text-sm text-white/80">ведущих приложений</div>
            </div>
            <div>
              <div className="text-3xl md:text-4xl font-bold text-yellow-300">70%</div>
              <div className="text-sm text-white/80">аудитория России</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Decorative Elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-white/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-yellow-300/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default HeroSection;