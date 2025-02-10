"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "@/components/ui/use-toast";
import { Heart, Trophy, Users, Leaf } from "lucide-react";

const formSchema = z.object({
  amount: z.string().min(1, "Veuillez sélectionner un montant"),
  custom_amount: z.string().optional(),
  payment_method: z.string().min(1, "Veuillez sélectionner un moyen de paiement"),
});

const impactCards = [
  {
    icon: Heart,
    amount: "20€",
    description: "permet de fournir 10 repas aux personnes dans le besoin",
  },
  {
    icon: Trophy,
    amount: "50€",
    description: "finance une semaine de soutien scolaire pour un enfant",
  },
  {
    icon: Users,
    amount: "100€",
    description: "contribue à l'hébergement d'urgence d'une famille",
  },
  {
    icon: Leaf,
    amount: "200€",
    description: "permet de planter 20 arbres dans des zones déboisées",
  },
];

export default function DonationPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      amount: "",
      custom_amount: "",
      payment_method: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Don effectué !",
      description: "Merci pour votre générosité.",
    });
    form.reset();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Faire un don</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Votre générosité permet de soutenir nos actions et de faire la différence dans la vie de nombreuses personnes.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        <div>
          <h2 className="text-2xl font-semibold mb-6">L&apos;impact de votre don</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {impactCards.map((card, index) => (
              <Card key={index} className="p-6">
                <card.icon className="h-8 w-8 text-primary mb-4" />
                <p className="text-2xl font-bold mb-2">{card.amount}</p>
                <p className="text-sm text-muted-foreground">{card.description}</p>
              </Card>
            ))}
          </div>
        </div>

        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Formulaire de don</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="amount"
                render={({ field }) => (
                  <FormItem className="space-y-3">
                    <FormLabel>Montant du don</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        {[20, 50, 100, 200].map((amount) => (
                          <div key={amount}>
                            <RadioGroupItem
                              value={amount.toString()}
                              id={`amount-${amount}`}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={`amount-${amount}`}
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="text-2xl font-bold">{amount}€</span>
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="custom_amount"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Autre montant</FormLabel>
                    <FormControl>
                      <Input
                        type="number"
                        placeholder="Montant personnalisé"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="payment_method"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Moyen de paiement</FormLabel>
                    <FormControl>
                      <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-2 gap-4"
                      >
                        {["card", "paypal"].map((method) => (
                          <div key={method}>
                            <RadioGroupItem
                              value={method}
                              id={`payment-${method}`}
                              className="peer sr-only"
                            />
                            <label
                              htmlFor={`payment-${method}`}
                              className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-transparent p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
                            >
                              <span className="font-semibold">
                                {method === "card" ? "Carte bancaire" : "PayPal"}
                              </span>
                            </label>
                          </div>
                        ))}
                      </RadioGroup>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <Button type="submit" className="w-full">
                Faire un don
              </Button>
            </form>
          </Form>
        </Card>
      </div>
    </div>
  );
}