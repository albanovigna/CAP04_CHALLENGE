"use client";

import Image from "next/image";
import Link from "next/link";
import {
  ChevronDown,
  MonitorSmartphone,
  FolderKanban,
  Users,
  Briefcase,
} from "lucide-react";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto">
        <header className="px-4 py-6 flex items-center">
          <div className="flex items-center space-x-6">
            <Image
              src="/logo.jpeg?height=40&width=120"
              alt="Bootcamp Logo"
              width={120}
              height={40}
              className="w-auto h-10"
            />
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-semibold">
                Para estudiantes
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
            <div className="relative group">
              <button className="flex items-center text-gray-700 hover:text-gray-900 font-semibold">
                Para empresas
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
            </div>
          </div>
          <div className="ml-auto flex items-center space-x-6">
            <Link
              href="#"
              className="text-gray-700 hover:text-gray-900 font-semibold"
            >
              Ingresar
            </Link>
            <Link
              href="#"
              className="bg-yellow-400 text-black px-4 py-2 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Aplicar
            </Link>
          </div>
        </header>
      </div>
      <div className="w-full h-px bg-gray-200 my-4"></div>
      <div className="max-w-6xl mx-auto">
        <main className="px-4 py-8 md:py-16 flex flex-col md:flex-row items-start justify-between">
          <div className="md:w-[45%]">
            <h1 className="text-4xl md:text-5xl font-semibold leading-tight mb-6">
              Comienza o acelera tu carrera en tecnología
            </h1>
            <p className="text-xl mb-8 font-semibold">
              Estudia Desarrollo Full Stack, Data Science o Data Analytics.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center">
                <MonitorSmartphone className="h-6 w-6 text-purple-600 mr-2" />
                <span>Online, en vivo y flexible</span>
              </li>
              <li className="flex items-center">
                <FolderKanban className="h-6 w-6 text-purple-600 mr-2" />
                <span>Basado en proyectos</span>
              </li>
              <li className="flex items-center">
                <Users className="h-6 w-6 text-purple-600 mr-2" />
                <span>Basado en cohortes</span>
              </li>
              <li className="flex items-center">
                <Briefcase className="h-6 w-6 text-purple-600 mr-2" />
                <span>Garantía de Empleo</span>
              </li>
            </ul>
            <Link
              href="#"
              className="inline-block bg-yellow-400 text-black px-8 py-3 rounded-md font-semibold hover:bg-yellow-500 transition-colors"
            >
              Aplicar
            </Link>
          </div>
          <div className="md:w-[45%]">
            <Image
              src="/placeholder.webp?height=500&width=500"
              alt="Student working on computer"
              width={500}
              height={500}
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </main>
        <footer className="container mx-auto px-4 py-8 text-center">
          <p className="text-xl font-semibold">
            Bootcamp <span className="text-purple-600">#1</span> de Latam
          </p>
        </footer>
      </div>
    </div>
  );
}
