/*const LoginModel = require('../modelo/LoginClienteModelo');

class LoginClienteControlador {
    // Validar correo y contraseña
    static async validarCredencial(req, res) {
      const { t1: email, t2: password } = req.body; // Renombramos t1 y t2 para mayor claridad
  
      if (!email || !password) {
        return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
      }
  
      try {
        const user = await LoginModel.validarCredenciales(email, password);
  
        // Si se devuelve un error desde el modelo
        if (user?.error) {
          return res.status(401).json({ error: user.error });
        }
  
        // Usuario y contraseña válidos
        res.json({ mensaje: 'Inicio de sesión exitoso', usuario: user });
  
      } catch (err) {
        res.status(500).json({ error: `Hubo un error al validar las credenciales: ${err.message}` });
      }
    }
  }
  

module.exports = LoginClienteControlador;*/

const modelo = require('../modelo/LoginClienteModelo'); // ajustá la ruta si es distinta

class LoginClienteControlador {
  static async validarCredencial(req, res) {
    const { t1: email, t2: password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Correo y contraseña son obligatorios' });
    }

    try {
      const user = await modelo.validarCredenciales(email, password);

      if (user?.error) {
        return res.status(401).json({ error: user.error });
      }

      const llave = modelo.generarLlaveSegura();

      await modelo.guardarToken({
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
}

module.exports = LoginClienteControlador;
