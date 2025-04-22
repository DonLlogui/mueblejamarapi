/*const dbService = require('./bd/Conexion');
const bcrypt = require('bcrypt');

class LoginClienteModelo {
    // Buscar usuario por correo (sin filtrar por estado aquí)
    static async buscaCorreo(email) {
      const query = 'SELECT idUsuario, nombres, correo, rol, contrasena, estado FROM usuarios WHERE correo = ?';
      try {
        const result = await dbService.query(query, [email]);
        return result.length ? result[0] : null;
      } catch (err) {
        throw new Error(`Error al buscar el usuario por correo: ${err.message}`);
      }
    }
  
    // Validar correo y contraseña
    static async validarCredencial(req, res) {
        const { t1: email, t2: password } = req.body;
    
        if (!email || !password) {
          return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
        }
    
        try {
          const user = await LoginModel.validarCredenciales(email, password);
    
          if (user?.error) {
            return res.status(401).json({ error: user.error });
          }
    
          // Generar llave
          const llave = LoginModel.generarLlaveSegura();
    
          // Guardar token
          await LoginModel.guardarToken({
            idUsuario: user.idUsuario,
            nombre: user.nombres,
            rol: user.rol,
            llave
          });
    
          res.json({
            mensaje: 'Inicio de sesión exitoso',
            usuario: {
              idUsuario: user.idUsuario,
              nombres: user.nombres,
              correo: user.correo,
              rol: user.rol
            },
            token: llave
          });
    
        } catch (err) {
          res.status(500).json({ error: `Hubo un error al validar las credenciales: ${err.message}` });
        }
      }
    // 😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱
    // 😱                                               generar token                                                                                       😱
     //😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱😱
// Generar una llave/token aleatoria segura
static generarLlaveSegura() {
    return crypto.randomBytes(32).toString('hex'); // 64 caracteres hex
  }

  // Guardar token en la base de datos
  static async guardarToken({ idUsuario, nombre, rol, llave }) {
    const query = 'INSERT INTO token (idToken, usuario, rol, llave) VALUES (?, ?, ?, ?)';
    try {
      await dbService.query(query, [idUsuario, nombre, rol, llave]);
    } catch (err) {
      throw new Error(`Error al guardar el token: ${err.message}`);
    }
  }

  }//cerrar clase
  
  module.exports = LoginClienteModelo; */


  const dbService = require('./bd/Conexion');
  const bcrypt = require('bcrypt');
  const crypto = require('crypto');
  
  class LoginClienteModelo {
    static async buscaCorreo(email) {
      const query = 'SELECT idUsuario, nombres, correo, rol, contrasena, estado FROM usuarios WHERE correo = ?';
      try {
        const result = await dbService.query(query, [email]);
        return result.length ? result[0] : null;
      } catch (err) {
        throw new Error(`Error al buscar el usuario por correo: ${err.message}`);
      }
    }
  
    static async validarCredenciales(email, password) {
      if (!email || !password) {
        return { error: 'Correo y contraseña son obligatorios' };
      }
  
      try {
        const usuario = await this.buscaCorreo(email);
        if (!usuario) {
          return { error: 'Usuario no encontrado' };
        }
  
        if (usuario.estado !== 'Activo') {
          return { error: 'Usuario bloqueado, consulte con el administrador' };
        }
  
        const match = await bcrypt.compare(password, usuario.contrasena);
        if (!match) {
          return { error: 'Contraseña incorrecta' };
        }
  
        const { contrasena, ...userSinContrasena } = usuario;
        return userSinContrasena;
      } catch (err) {
        throw new Error(`Error al validar credenciales: ${err.message}`);
      }
    }
  
    static generarLlaveSegura() {
      return crypto.randomBytes(32).toString('hex');
    }
  
    static async guardarToken({ idUsuario, nombre, rol, llave }) {
      const query = 'INSERT INTO token (idToken, usuario, rol, llave) VALUES (?, ?, ?, ?)';
      try {
        await dbService.query(query, [idUsuario, nombre, rol, llave]);
      } catch (err) {
        throw new Error(`Error al guardar el token: ${err.message}`);
      }
    }
  }
  
  module.exports = LoginClienteModelo;
  
