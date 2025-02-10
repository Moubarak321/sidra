"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const photos = [
  {
    title: "Distribution alimentaire",
    date: "Mars 2024",
    image: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=2070",
  },
  {
    title: "Cours de soutien scolaire",
    date: "Février 2024",
    image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&w=2069",
  },
  {
    title: "Construction de logements",
    date: "Janvier 2024",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=2073",
  },
  {
    title: "Plantation d'arbres",
    date: "Décembre 2023",
    image: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013",
  },
];

const videos = [
  {
    title: "Notre mission en 2 minutes",
    date: "Mars 2024",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015",
  },
  {
    title: "Témoignages de bénéficiaires",
    date: "Février 2024",
    image: "https://images.unsplash.com/photo-1516321497487-e288fb19713f?q=80&w=2070",
  },
];

export default function MediathequePage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">Médiathèque</h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Découvrez nos actions en images et en vidéos.
        </p>
      </div>

      <Tabs defaultValue="photos" className="w-full">
        <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
          <TabsTrigger value="photos">Photos</TabsTrigger>
          <TabsTrigger value="videos">Vidéos</TabsTrigger>
        </TabsList>
        <TabsContent value="photos">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {photos.map((photo, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={photo.image}
                    alt={photo.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{photo.title}</h3>
                  <p className="text-sm text-muted-foreground">{photo.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
        <TabsContent value="videos">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
            {videos.map((video, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-64">
                  <Image
                    src={video.image}
                    alt={video.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-primary/90 rounded-full flex items-center justify-center">
                      <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-semibold">{video.title}</h3>
                  <p className="text-sm text-muted-foreground">{video.date}</p>
                </div>
              </Card>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}