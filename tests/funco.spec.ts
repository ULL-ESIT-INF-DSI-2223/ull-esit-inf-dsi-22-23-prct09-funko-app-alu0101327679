import 'mocha';
import {expect} from 'chai';

import { Tipo } from "./../src/tipo.js";
import { Genero } from "./../src/genero.js";
import { Funko } from "./../src/funco.js";

describe('Funko', () => {
  let funko: Funko;

  beforeEach(() => {
    funko = new Funko(1, 'Harry Potter', 'Funko de Harry Potter', Tipo.POP, Genero.ANIMACION, 'Harry Potter', 1, true, 'Cicatriz en forma de rayo', 1000);
  });

  it('should create an instance', () => {
    expect(funko).to.exist
  });

  it('should have a valid id', () => {
    expect(funko.id).to.be.equal(1);
  });

  it('should have a valid name', () => {
    expect(funko.nombre).to.be.equal('Harry Potter');
  });

  it('should have a valid description', () => {
    expect(funko.descripcion).to.be.equal('Funko de Harry Potter');
  });

  it('should have a valid type', () => {
    expect(funko.tipo).to.deep.equal(Tipo.POP);
  });

  it('should have a valid genre', () => {
    expect(funko.genero).to.be.equal(Genero.ANIMACION);
  });

  it('should have a valid franchise', () => {
    expect(funko.franquicia).to.be.equal('Harry Potter');
  });

  it('should have a valid number', () => {
    expect(funko.numero).to.be.equal(1);
  });

  it('should have a valid exclusivity', () => {
    expect(funko.exclusivo).to.be.true;
  });

  it('should have a valid special features', () => {
    expect(funko.caracteristicasEspeciales).to.be.equal('Cicatriz en forma de rayo');
  });

  it('should have a valid market value', () => {
    expect(funko.valorDeMercado).to.be.equal(1000);
  });

  it('should update id', () => {
    funko.id_ = 2;
    expect(funko.id).to.be.equal(2);
  });

  it('should update name', () => {
    funko.nombre_ = 'Ron Weasley';
    expect(funko.nombre).to.be.equal('Ron Weasley');
  });

  it('should update description', () => {
    funko.descripcion_ = 'Funko de Ron Weasley';
    expect(funko.descripcion).to.be.equal('Funko de Ron Weasley');
  });

  it('should update type', () => {
    funko.tipo_ = Tipo.POP_RIDES;
    expect(funko.tipo).to.be.equal(Tipo.POP_RIDES);
  });

  it('should update genre', () => {
    funko.genero_ = Genero.ANIME;
    expect(funko.genero).to.be.equal(Genero.ANIME);
  });

  it('should update franchise', () => {
    funko.franquicia_ = 'Animales fantásticos';
    expect(funko.franquicia).to.be.equal('Animales fantásticos');
  });

  it('should update number', () => {
    funko.numero_ = 2;
    expect(funko.numero).to.be.equal(2);
  });

  it('should update exclusivity', () => {
    funko.exclusivo_ = false;
    expect(funko.exclusivo).to.be.false;
  });

  it('should update special features', () => {
    funko.caracteristicasEspeciales_ = 'Varita mágica';
    expect(funko.caracteristicasEspeciales).to.be.equal('Varita mágica');
  });

  it('should update market value', () => {
    funko.valorDeMercado_ = 500;
    expect(funko.valorDeMercado).to.be.equal(500);
  });
});
