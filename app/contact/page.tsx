"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { toast } from "@/components/ui/use-toast";
import { Mail, Phone, MapPin } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(2, "Le nom doit contenir au moins 2 caractères"),
  email: z.string().email("Email invalide"),
  message: z.string().min(10, "Le message doit contenir au moins 10 caractères"),
});

export default function ContactPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    toast({
      title: "Message envoyé !",
      description: "Nous vous répondrons dans les plus brefs délais.",
    });
    form.reset();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Contactez-nous</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Une question ? Un projet ? N&apos;hésitez pas à nous contacter.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <Card className="p-6">
          <h2 className="text-2xl font-semibold mb-6">Envoyez-nous un message</h2>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nom</FormLabel>
                    <FormControl>
                      <Input placeholder="Votre nom" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="votre@email.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Message</FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Votre message"
                        className="min-h-[150px]"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit" className="w-full">Envoyer</Button>
            </form>
          </Form>
        </Card>

        <div className="space-y-8">
          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <MapPin className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Adresse</h3>
                <p className="text-muted-foreground">
                  123 Rue de la Solidarité<br />
                  75001 Paris, France
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Mail className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Email</h3>
                <p className="text-muted-foreground">
                  contact@ensemblepourdemain.org
                </p>
              </div>
            </div>
          </Card>

          <Card className="p-6">
            <div className="flex items-start space-x-4">
              <Phone className="h-6 w-6 text-primary" />
              <div>
                <h3 className="font-semibold mb-2">Téléphone</h3>
                <p className="text-muted-foreground">
                  +33 (0)1 23 45 67 89
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
}