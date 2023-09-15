import CustomError from '../services/errors/custom-error.js';
import EErrors from '../services/errors/enums.js';
import importModels from '../DAO/factory.js';

const models = await importModels();
const modelUsuario = models.users;

class UserService {
  validatePostUser(firstName, lastName, email) {
    if (!firstName || !lastName || !email) {
      CustomError.createError({
        name: 'VALDIATION ERROR',
        cause: 'Parametros Faltantes o incorrectos.',
        message: 'os parámetros proporcionados son insuficientes o inválidos para llevar a cabo la creación. Por favor, revisa la información suministrada e intenta nuevamente.',
        code: EErrors.INVALID_INPUT_ERROR,
      });
    }
  }

  validatePutUser(id, firstName, lastName, email) {
    if ((!id, !firstName || !lastName || !email)) {
      CustomError.createError({
        name: 'VALDIATION ERROR',
        cause: 'Parametros Faltantes o incorrectos.',
        message: 'os parámetros proporcionados son insuficientes o inválidos para llevar a cabo la creación. Por favor, revisa la información suministrada e intenta nuevamente.',
        code: EErrors.INVALID_INPUT_ERROR,
      });
    }
  }

  validateId(id) {
    if (!id) {
      CustomError.createError({
        name: 'VALDIATION ERROR',
        cause: 'Parametros Faltantes o incorrectos.',
        message: 'os parámetros proporcionados son insuficientes o inválidos para llevar a cabo la creación. Por favor, revisa la información suministrada e intenta nuevamente.',
        code: EErrors.INVALID_INPUT_ERROR,
      });
    }
  }
  async getAllUsers() {
    const users = await modelUsuario.getAllUsers();
    return users;
  }

  async getOneUser(id) {
    const user = await modelUsuario.getOneUser(id);
    return user;
  }

  async createUser(firstName, lastName, email) {
    this.validatePostUser(firstName, lastName, email);
    const userCreated = await modelUsuario.createUser(firstName, lastName, email);
    return userCreated;
  }

  async updateUser(id, firstName, lastName, email, rol) {
    //this.validatePostUser(id, firstName, lastName, email);
    const userUptaded = await modelUsuario.updateUser(id, firstName, lastName, email, rol);
    return userUptaded;
  }

  async deleteUser(id) {
    this.validateId(id);
    const deleted = await modelUsuario.deleteUser(id);
    return deleted;
  }

  async changerol(id) {
    let userdb = await this.getOneUser(id);
    console.log(userdb)
    if (userdb.rol === "premium") {
      userdb.rol = "user";
    } else if (userdb.rol === "user") {
      userdb.rol = "premium";
    }else{
      userdb.rol="user"
    }
    console.log(userdb)
    userdb = await this.updateUser(id, userdb.firstName, userdb.lastName, userdb.email, userdb.rol);
    return userdb;
  }
}

export const userService = new UserService();
