
import { Tipo } from "./tipo.js";
import { Genero } from "./genero.js";


export class Funko {
  id: number;
  nombre: string;
  descripcion: string;
  tipo: Tipo;
  genero: Genero;
  franquicia: string;
  numero: number;
  exclusivo: boolean;
  caracteristicasEspeciales: string;
  valorDeMercado: number;

  constructor(
    id: number,
    nombre: string,
    descripcion: string,
    tipo: Tipo,
    genero: Genero,
    franquicia: string,
    numero: number,
    exclusivo: boolean,
    caracteristicasEspeciales: string,
    valorDeMercado: number
  ) {
    this.id = id;
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.tipo = tipo;
    this.genero = genero;
    this.franquicia = franquicia;
    this.numero = numero;
    this.exclusivo = exclusivo;
    this.caracteristicasEspeciales = caracteristicasEspeciales;
    this.valorDeMercado = valorDeMercado;
  }

  get id_() {
    return this.id;
  }

  set id_(id: number) {
    this.id = id;
  }

  get nombre_() {
    return this.nombre;
  }

  set nombre_(nombre: string) {
    this.nombre = nombre;
  }

  get descripcion_() {
    return this.descripcion;
  }

  set descripcion_(descripcion: string) {
    this.descripcion = descripcion;
  }

  get tipo_() {
    return this.tipo;
  }

  set tipo_(tipo: Tipo) {
    this.tipo = tipo;
  }

  get genero_() {
    return this.genero;
  }

  set genero_(genero: Genero) {
    this.genero = genero;
  }

  get franquicia_() {
    return this.franquicia;
  }

  set franquicia_(franquicia: string) {
    this.franquicia = franquicia;
  }

  get numero_() {
    return this.numero;
  }

  set numero_(numero: number) {
    this.numero = numero;
  }

  get exclusivo_() {
    return this.exclusivo;
  }

  set exclusivo_(exclusivo: boolean) {
    this.exclusivo = exclusivo;
  }

  get caracteristicasEspeciales_() {
    return this.caracteristicasEspeciales;
  }

  set caracteristicasEspeciales_(caracteristicasEspeciales: string) {
    this.caracteristicasEspeciales = caracteristicasEspeciales;
  }

  get valorDeMercado_() {
    return this.valorDeMercado;
  }

}

