import chai from 'chai';
import supertest from 'supertest';
import { faker } from '@faker-js/faker';

const expect = chai.expect;
const requester = supertest('http://localhost:8080');

describe('Testing Usuarios', () => {
  it('En endpoint GET /api/products debe traer productos registrados', async function () {});

  it('En endpoint POST /api/products debe crear un producto (debe ser admin/premium)', async function () {});

  it('En endpoint PUT /api/products/:id debe actualizar un producto (debe ser admin/premium)', async function () {});

  it('En endpoint GET /api/products/:id debe traer un producto', async function () {});

  it('En endpoint DELETE /api/products/:id debe eliminar un producto (debe ser admin/premium)', async function () {});
});

describe('Testing Products', () => {
  it('En endpoint GET /api/products debe traer productos registrados', async function () {
    this.timeout(50000);
    const response = await requester.get('/api/products');
    const { status, ok, body } = response;
    expect(status).to.equal(200);
    expect(ok).to.equal(true);
    expect(Array.isArray(body.payload)).to.equal(true);
    expect(body.payload.length).to.be.greaterThan(1);
  });

  it('En endpoint POST /api/products debe crear un producto (debe ser admin/premium)', async function () {});

  it('En endpoint PUT /api/products/:id debe actualizar un producto (debe ser admin/premium)', async function () {});

  it('En endpoint GET /api/products/:id debe traer un producto', async function () {});

  it('En endpoint DELETE /api/products/:id debe eliminar un producto (debe ser admin/premium)', async function () {});
});

describe('Testing Carritos', () => {
  it('En endpoint GET /api/products debe traer productos registrados', async function () {});

  it('En endpoint POST /api/products debe crear un producto (debe ser admin/premium)', async function () {});

  it('En endpoint PUT /api/products/:id debe actualizar un producto (debe ser admin/premium)', async function () {});

  it('En endpoint GET /api/products/:id debe traer un producto', async function () {});

  it('En endpoint DELETE /api/products/:id debe eliminar un producto (debe ser admin/premium)', async function () {});
});

/*it('En endpoint POST /api/pets debe registrar una mascota', async () => {
      const petMock = {
        name: 'Firulais',
        specie: 'dog',
        birthDate: '10-10-2020',
      };

      const response = await requester.post('/api/pets').send(petMock);
      const { status, ok, _body } = response;

      expect(_body.payload).to.have.property('_id');
    });

    it('En endpoint POST /api/pets no deberia crear mascotas con datos vacios', async () => {
      const petMock = {};

      const response = await requester.post('/api/pets').send(petMock);
      const { status, ok, _body } = response;

      expect(ok).to.be.eq(false);
    }); 
 
   describe('Registro, Login and Current', () => {
    let cookieName;
    let cookieValue;
    const mockUser = {
      first_name: 'Maximo',
      last_name: 'Lorenzo',
      email: faker.internet.email(),
      password: '123',
    };

    it('Debe registrar un usuario', async () => {
      const { _body } = await requester.post('/api/sessions/register').send(mockUser);
      expect(_body.payload).to.be.ok;
    });

    it('Debe loggear un user y DEVOLVER UNA COOKIE', async () => {
      const result = await requester.post('/api/sessions/login').send({
        email: mockUser.email,
        password: mockUser.password,
      });

      const cookie = result.headers['set-cookie'][0];
      expect(cookie).to.be.ok;

      cookieName = cookie.split('=')[0];
      cookieValue = cookie.split('=')[1];

      expect(cookieName).to.be.ok.and.eql('coderCookie');
      expect(cookieValue).to.be.ok;
    });

    it('Enviar cookie para ver el contenido del user', async () => {
      const { _body } = await requester.get('/api/sessions/current').set('Cookie', [`${cookieName}=${cookieValue}`]);
      expect(_body.payload.email).to.be.eql(mockUser.email);
    });
  }); 
  describe('Test upload file', () => {
    it('Debe subir un archivo al crear pets', async () => {
      const petMock = {
        name: 'Firulais',
        specie: 'goat',
        birthDate: '10-10-2020',
      };

      const result = await requester.post('/api/pets/withimage').field('name', petMock.name).field('specie', petMock.specie).field('birthDate', petMock.birthDate).attach('image', './test/house.jpg');

      expect(result.status).to.be.eql(200);
      expect(result._body.payload).to.have.property('_id');
      expect(result._body.payload.image).to.be.ok;
    });
  });*/
